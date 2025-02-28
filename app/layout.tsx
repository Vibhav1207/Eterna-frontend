import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EternaVaultX - Secure Time-Locked Storage",
  description: "Next-gen digital vault for secure, time-locked storage of messages, files, and smart contracts."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'