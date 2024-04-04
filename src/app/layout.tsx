import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my portfolio. There are many like it, but this one is mine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex max-w-screen-lg mx-auto p-10 min-h-screen flex-col justify-between sm:p-24">
          <Nav />
            {children}
          <Footer /> 
        </main>
      </body>
    </html>
  );
}
