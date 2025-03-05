import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Righteous } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import ScrollToTop from '@/components/ScrollToTop'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-jakarta' 
});
const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-righteous'
});

export const metadata: Metadata = {
  title: "Frontend Template",
  description: "Next.js Frontend Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable} ${righteous.variable} font-sans`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
