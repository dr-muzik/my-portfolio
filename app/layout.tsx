import type { Metadata } from "next";
// import localFont from 'next/font/local';
import { ThemeProvider } from "@/context/ThemeToggle";
import "./globals.css";

// const geistSans = localFont({
// 	src: './fonts/GeistVF.woff',
// 	variable: '--font-geist-sans',
// 	weight: '100 900',
// });
// const geistMono = localFont({
// 	src: './fonts/GeistMonoVF.woff',
// 	variable: '--font-geist-mono',
// 	weight: '100 900',
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// export const monstserrat = localFont({
// 	src: './fonts/Montserrat-VariableFont_wght.ttf',
// 	variable: '--font-montserrat-sans',
// 	weight: '100 900',
// });

// export const monstItalic = localFont({
// 	src: './fonts/Montserrat-Italic-VariableFont_wght.ttf',
// 	variable: '--font-montserrat-sans',
// 	weight: '100 900',
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
