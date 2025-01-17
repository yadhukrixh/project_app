import type { Metadata } from "next";
import localFont from "next/font/local";
import "../themes/styles/globals.scss";

export const metadata: Metadata = {
  title: "Project",
};

const geistSans = localFont({
  src: "../themes/fonts/NotoSansJP-Medium.ttf",
  variable: "--font-japanese",
  weight: "100 900",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.className}>{children}</body>
    </html>
  );
}
