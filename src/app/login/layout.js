import React from 'react'
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const Loginlayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-white')}>
            <main className="flex-grow p-8">
              {children}
            </main>
      </body>
    </html>
  )
}

export default Loginlayout