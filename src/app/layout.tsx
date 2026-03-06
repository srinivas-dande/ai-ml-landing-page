import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Script from "next/script";


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
      <head>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W865WG7N');
          `}
        </Script>
        {/* End Google Tag Manager */}

      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W865WG7N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}


        <Header />

        <main className="pt-[90px] min-h-screen">
          {children}
        </main>

      </body>
    </html>
  )
}