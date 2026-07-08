import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import LoadingBar from "./components/LoadingBar";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const calistoga = Calistoga({
  variable: "--font-serif",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abdul Khalil | Creative Frontend Developer",
    template: "%s | Abdul Khalil",
  },

  description:
    "Portfolio of Abdul Khalil, a frontend developer specializing in React and Next.js, crafting clean and fast web applications.",

  metadataBase: new URL("https://khalildevs.vercel.app"),

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khalildevs.vercel.app",
    siteName: "Abdul Khalil Portfolio",
    title: "Abdul Khalil | Creative Frontend Developer",
    description:
      "Portfolio of Abdul Khalil, a frontend developer specializing in React and Next.js.",
    images: [
      {
        url: "/og-img.jpeg",
        width: 1200,
        height: 630,
        alt: "Abdul Khalil Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdul Khalil | Creative Frontend Developer",
    description:
      "Portfolio of Abdul Khalil, a frontend developer specializing in React and Next.js.",
    images: ["/og-img.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${calistoga.variable}`}
    >
      <body
        className={twMerge(
          inter.className,
          "bg-gray-900 text-white antialiased min-h-screen relative",
        )}
      >
        <LoadingBar />
        {children}
      </body>
    </html>
  );
}
