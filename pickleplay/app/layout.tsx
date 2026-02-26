import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pickleplay",
  description: "Your one-stop destination for all things pickleball.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
