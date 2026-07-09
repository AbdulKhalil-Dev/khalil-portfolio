import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  reverseOrbit = false,
  orbitDuration = "20s",
  shouldSpin = false,
  spinDuration = "5s",
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  reverseOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
  orbitDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={twMerge(
          shouldOrbit && "animate-spin [animation-timing-function:linear]",
        )}
        style={{
          animationDuration: orbitDuration,
          animationDirection: reverseOrbit ? "reverse" : "normal",
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(
              "inline-flex",
              shouldSpin && "animate-spin [animation-timing-function:linear]",
            )}
            style={{
              transform: `rotate(${-rotation}deg)`,
              animationDuration: shouldSpin ? spinDuration : undefined,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
