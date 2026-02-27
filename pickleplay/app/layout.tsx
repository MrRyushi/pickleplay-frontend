import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";

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
    <html lang="en" suppressHydrationWarning>
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute top-2 left-2">
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
