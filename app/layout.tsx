import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProjectATLAS — Phase 1 Evidence Preview",
  description:
    "A preview map of real, independently-verified public camera and traffic-event data gathered during ProjectATLAS Phase 1 research.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
