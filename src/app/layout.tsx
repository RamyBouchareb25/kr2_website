import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Image from 'next/image'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "K2 Printing Services - Professional On-Demand Printing Solutions",
  description: "Professional printing services including roll-ups, stickers, t-shirts, and more. Quality on-demand printing for all your needs.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex justify-center py-4">
            <Image
              src="/Logo-removebg-preview.png"
              alt="K2 Printing Logo"
              width={100}
              height={100}
            />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
