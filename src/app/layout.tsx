import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Streaman",
  description: "Shared AI powered video with friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${manrope.className} bg-[#171717]`}
          suppressHydrationWarning
        >
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
              storageKey="streaman-theme"
            >
              {children}
            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
