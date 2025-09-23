import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "react-hot-toast"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Apex Pickleball Academy",
  description: "Premier pickleball coaching, court management, and tournaments",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} font-primary antialiased`}>
        <Navbar />
        <Toaster position="top-right" reverseOrder={false} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
