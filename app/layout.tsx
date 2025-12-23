import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist, Roboto, Playfair_Display, Poppins, Raleway, Montserrat } from "next/font/google"
import "./globals.css"
import LayoutShell from "@/components/layout-shell"
import Script from 'next/script'
import { Analytics } from "@vercel/analytics/next"


const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  weight: '600',
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // choose the weights you need
  subsets: ['latin'],
})


const raleway = Raleway({
  variable: "--font-raleway",
  weight: ['400', '500', '600', '700'], // choose the weights you need
  subsets: ['latin'],
})


const mont = Montserrat({
  variable: "--font-montserrat",
  weight: ['400', '500', '600', '700'], // choose the weights you need
  subsets: ['latin'],
})



export const metadata: Metadata = {
  title: "Andrew Dietz",
  description: "Join our webinars and seminars to discover the path to lasting happiness and personal growth.",
  generator: 'Andrew Dietz',
  icons: {
    icon: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${mont.variable} ${raleway.variable}`}>
      <meta name="google-site-verification" content="6L82PwHefkzhG8rPtJ61jc9tQHuorq7FVQ-h-K_eBXI" />

      <head>
        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-ML59DWDD');
            `
          }}
        />

        {/* Google Analytics Script */}
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-F1TGT1RMG7"
          strategy="afterInteractive"
        />
        <Script
          id="ga-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F1TGT1RMG7');
            `
          }}
        />

        {/* Microsoft Clarity tracking code */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ucntizjxnr");
            `
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-ML59DWDD"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        <LayoutShell>
          {children}
        </LayoutShell>
        <Analytics/>
      </body>
    </html>
  )
}
