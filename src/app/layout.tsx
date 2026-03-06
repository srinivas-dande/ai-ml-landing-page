import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ 
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dandes Academy',
  description: 'Dandes Academy - Learn and Grow',
}

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