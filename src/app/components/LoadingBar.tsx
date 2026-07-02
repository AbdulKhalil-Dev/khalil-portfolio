"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

// ---- Global request tracker (patched once, shared across the app) ----
let activeRequests = 0;
const listeners = new Set<(count: number) => void>();

function notify() {
  listeners.forEach((cb) => cb(activeRequests));
}

function trackStart() {
  activeRequests++;
  notify();
}

function trackEnd() {
  activeRequests = Math.max(0, activeRequests - 1);
  notify();
}

let patched = false;
function patchNetworkAPIsOnce() {
  if (patched || typeof window === "undefined") return;
  patched = true;

  // --- Patch fetch ---
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    trackStart();
    try {
      const res = await originalFetch(...args);
      return res;
    } finally {
      trackEnd();
    }
  };

  // --- Patch XMLHttpRequest ---
  const OriginalXHR = window.XMLHttpRequest;
  function PatchedXHR(this: XMLHttpRequest) {
    const xhr = new OriginalXHR();
    xhr.addEventListener("loadstart", trackStart);
    const done = () => trackEnd();
    xhr.addEventListener("loadend", done);
    return xhr;
  }
  // @ts-expect-error - intentional runtime patch
  window.XMLHttpRequest = PatchedXHR;
}

export default function LoadingBar() {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    patchNetworkAPIsOnce();
  }, []);

  useEffect(() => {
    if (!progressBarRef.current || !containerRef.current) return;

    const bar = progressBarRef.current;
    const container = containerRef.current;

    const ctx = gsap.context(() => {
      gsap.set(container, { display: "block", opacity: 1, y: 0 });
      gsap.set(bar, { scaleX: 0 });

      // Give the new route a tick to actually fire its requests
      // (data fetching in RSC/client components usually kicks off
      // synchronously on mount).
      let settleTimeout: ReturnType<typeof setTimeout>;
      let finished = false;
      // Track how many requests we've SEEN so far this navigation,
      // so we can animate proportionally instead of jumping around.
      let seen = 0;
      let completed = 0;

      const finish = () => {
        if (finished) return;
        finished = true;
        gsap
          .timeline()
          .to(bar, { scaleX: 1, duration: 0.25, ease: "power1.out" })
          .to(container, {
            opacity: 0,
            y: -10,
            duration: 0.35,
            ease: "power1.in",
            onComplete: () => {
              container.style.display = "none";
            },
          });
      };

      const update = (count: number) => {
        if (count > seen) seen = count;
        if (count === 0 && seen > 0) {
          completed = seen;
        } else {
          completed = seen - count;
        }

        const ratio = seen > 0 ? completed / seen : 0;
        // Cap visual progress at 92% until we KNOW everything is done —
        // this mirrors what real progress bars do so it never appears
        // "finished" while requests are still pending.
        const target = count === 0 && seen > 0 ? 1 : Math.min(ratio, 0.92);

        gsap.to(bar, {
          scaleX: target,
          duration: 0.3,
          ease: "power1.out",
        });

        if (count === 0 && seen > 0) {
          finish();
        }
      };

      listeners.add(update);

      // If nothing fires within 400ms, treat it as an instant/static
      // navigation and complete the bar quickly instead of hanging.
      settleTimeout = setTimeout(() => {
        if (activeRequests === 0 && seen === 0) {
          finish();
        }
      }, 400);

      // Immediately reflect current in-flight count (covers requests
      // that started right as navigation kicked off).
      update(activeRequests);

      return () => {
        clearTimeout(settleTimeout);
        listeners.delete(update);
      };
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 right-0 z-[9999] h-0.5 bg-white/5 backdrop-blur-sm"
    >
      <div
        ref={progressBarRef}
        className="h-full w-full origin-left"
        style={{
          background:
            "linear-gradient(90deg, #e84393 0%, #f368e0 25%, #ff9f43 55%, #00dff3 80%, #00ffa1 100%)",
          boxShadow:
            "0 0 8px rgba(243, 104, 224, 0.4), 0 0 16px rgba(255, 159, 67, 0.2)",
        }}
      />
    </div>
  );
}
