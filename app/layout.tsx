import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Shadow Mind Projection Test",
  description: "A Freudian projection-style personality test for AP Psychology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
