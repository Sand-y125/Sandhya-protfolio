import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sandhya Lamichhane - Portfolio",
  description: "Personal portfolio of Sandhya Lamichhane, BSc.IT 2nd Year student and aspiring tech enthusiast",
  keywords: "Sandhya Lamichhane, portfolio, BSc.IT, web developer, student, Nepal",
  authors: [{ name: "Sandhya Lamichhane" }],
  openGraph: {
    title: "Sandhya Lamichhane - Portfolio",
    description: "Personal portfolio of Sandhya Lamichhane, BSc.IT 2nd Year student and aspiring tech enthusiast",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
