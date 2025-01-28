import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Ammar Hussein - Software Engineer",
  description: "Ammar Hussein's portfolio website made with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {/* Wrapper component to use themeing and preferences*/}
        <ThemeProvider 
        attribute={"class"}
        enableSystem
        defaultTheme="system"> 
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
