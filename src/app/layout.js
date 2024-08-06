import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-white')}>
        <section>
          <Header />
        </section>

        <div className="flex flex-col lg:flex-row">
          <div className="py-4 px-2 ml-8 mr-16 hidden lg:block">
            <Sidebar />
          </div>
          <main className="px-8 py-8 w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
