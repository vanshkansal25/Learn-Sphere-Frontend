// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Github, Linkedin } from "lucide-react";
import { SiX } from "react-icons/si";
import Link from "next/link";
import ReduxProvider from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LearnSphere - LMS Platform",
  description: "LearnSphere is a platform for students to learn and get help from teachers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ReduxProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="py-2 bg-gray-200">
            <div className="flex items-center justify-between mx-8">
              <div className="text-neutral-600">
                Developed By - Vansh Kansal
              </div>
              <div className="flex items-center space-x-6">
                <Link href="https://github.com/vanshkansal25" target="_blank">
                  <Github className="w-5 h-5 text-gray-600 hover:text-violet-700 transition" />
                </Link>
                <Link href="https://linkedin.com/in/vanshkansal-dev" target="_blank">
                  <Linkedin className="w-5 h-5 text-gray-600 hover:text-violet-700 transition" />
                </Link>
                <Link href="https://x.com/Vanshtwt25" target="_blank">
                  <SiX className="w-5 h-5 text-gray-600 hover:text-violet-700 transition" />
                </Link>
              </div>
            </div>
          </footer>
        </ReduxProvider>
      </body>
    </html>
  );
}