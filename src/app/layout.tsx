import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Klokz — Sistema de Gestão para Bares, Baladas e Eventos",
  description: "Sistema completo de gestão para bares, casas noturnas e eventos. Controle de comandas, listas, reservas, estoque e financeiro em tempo real.",
  keywords: ["sistema para bares", "sistema para baladas", "gestão de eventos", "controle de comandas", "software para casas noturnas", "Klokz"],
  authors: [{ name: "Klokz" }],
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.klokz.com.br",
    title: "Klokz — Sistema de Gestão para Bares, Baladas e Eventos",
    description: "Sistema completo de gestão para bares, casas noturnas e eventos. Controle de comandas, listas, reservas, estoque e financeiro em tempo real.",
    siteName: "Klokz",
    images: [
      {
        url: "/images/og-image.png", // Precisamos garantir que essa imagem exista ou usar o logo
        width: 1200,
        height: 630,
        alt: "Klokz — Gestão Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klokz — Sistema de Gestão para Bares, Baladas e Eventos",
    description: "Sistema completo de gestão para bares, casas noturnas e eventos.",
    images: ["/images/og-image.png"],
  },
  verification: {
    google: "HvmALWs3u80ZWrEcuA_pmUmZr-WrqEtLwfW79d9TKpo",
    other: {
      "linkedin-site-verification": ["AQWz1Bl8rXSMfXtoYH1Cg22k6w11K_GVNIPd44jvRSWixKxYZYFcSoCg-CvWqWS_TukBbZzTL_jCjw3KgBAIQmVUM4Gg_xsGtpJUW9XuTEPuuWwJqxihYmjFXNCpWhSS5cvBP0DwnWxjEoX1YxOpxOH2Qdpi3I8liwFMBpFwtIdX1tg2D3suC9KNulzbZa5bpI6oZomN8x3DG3Bibn3y6t0RgIMhBDalFLWIcS6lxsUdPeM-RsOCGT6tTGNjUdkYFkL6GbTmZ7O9QG4cblbBuyhXaif2KRaE7yv9ZidLyj9CSr1E3te2Q9372pAdHZUt5RdJmT2A20YZvT2jkTUiWgoIDSiemIKPwViB8CH3XmXTtYlcfuNQjwqMY0lzwHa12SZjqvwWdtzxLNnivKCtaDxhEndQyPE1NAI-CdPGMlNI1bpYUBmp6s4-sk2nTpqEEHi8bGw1-0R_ZNqfOOc"]
    }
  },
  other: {
    'theme-color': '#050505',
  },
};

import { FloatingButtons } from "@/components/ui/FloatingButtons";
import GoogleAnalytics from "@/components/scripts/GoogleAnalytics";
import { GTMHead, GTMBody } from "@/components/scripts/GoogleTagManager";
import { MetaPixelHead, MetaPixelBody } from "@/components/scripts/MetaPixel";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <GTMHead />
        <GoogleAnalytics />
        <MetaPixelHead />
      </head>
      <body className={`${spaceGrotesk.variable} antialiased font-sans bg-[#050505] text-foreground`}>
        <GTMBody />
        <MetaPixelBody />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Klokz",
              "operatingSystem": "Web",
              "applicationCategory": "BusinessApplication",
              "description": "Sistema completo de gestão para bares, casas noturnas e eventos.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "BRL"
              },
              "author": {
                "@type": "Organization",
                "name": "Klokz",
                "url": "https://www.klokz.com.br"
              }
            })
          }}
        />
        <div id="main-content">{children}</div>
        <FloatingButtons />
      </body>
    </html>
  );
}
