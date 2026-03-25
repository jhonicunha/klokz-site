import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Klokz — Sistema de Gestão para Bares, Baladas e Eventos",
  description: "Sistema completo de gestão para bares, casas noturnas e eventos. Controle de comandas, listas, reservas, estoque e financeiro em tempo real.",
  other: {
    'theme-color': '#050505',
  },
};

import { FloatingButtons } from "@/components/ui/FloatingButtons";
import GoogleAnalytics from "@/components/scripts/GoogleAnalytics";
import { GTMHead, GTMBody } from "@/components/scripts/GoogleTagManager";

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
      </head>
      <body className={`${spaceGrotesk.variable} antialiased font-sans bg-[#050505] text-foreground`}>
        <GTMBody />
        <div id="main-content">{children}</div>
        <FloatingButtons />
      </body>
    </html>
  );
}
