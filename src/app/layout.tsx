import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ 
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Free AI/ML Career Roadmap Webinar | Dandes Academy",
  description:
    "Register for Dandes Academy’s free AI/ML Career Roadmap Webinar. Get a clear roadmap, CV-ready projects, and live interview readiness.",
  keywords: [
    "AI/ML webinar",
    "free AI webinar",
    "machine learning webinar",
    "AI ML career roadmap",
    "AI/ML career transition",
    "AI ML roadmap webinar",
    "AI ML projects for resume",
    "AI/ML projects for CV",
    "interview readiness AI/ML",
    "AI/ML career roadmap session",
  ],
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://lp.dandesacademy.com",
  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>

        <Header />

        <main className="pt-[90px] min-h-screen">
          {children}
        </main>

      </body>
    </html>
  )
}