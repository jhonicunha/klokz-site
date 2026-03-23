import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Klokz — Sistema de Gestão para Bares, Baladas e Eventos",
  description: "Sistema completo de gestão para bares, casas noturnas e eventos. Controle de comandas, listas, reservas, estoque e financeiro em tempo real.",
};

import { AccessibilityMenu } from "@/components/ui/AccessibilityMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.variable} antialiased font-sans bg-background text-foreground`}>
        {children}
        <AccessibilityMenu />
        
        {/* Global WhatsApp Floating Button */}
        <a
            href="https://wa.me/554199998288"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[100] w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label="Falar no WhatsApp"
        >
            <FaWhatsapp className="text-white" size={24} />
        </a>
      </body>
    </html>
  );
}
