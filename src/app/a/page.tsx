import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { IntegratedSolutions } from "@/components/sections/integrated-solutions";
import { WhyKlokz } from "@/components/sections/why-klokz";
import { Partners } from "@/components/sections/partners";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaWhatsappBanner } from "@/components/sections/cta-whatsapp-banner";
import { CtaProvider } from "@/components/providers/cta-provider";

export default function PageA() {
  return (
    <CtaProvider link="https://wa.me/5541999988288?text=Ol%C3%A1!%20Vi%20o%20site%20e%20estou%20buscando%20um%20sistema%20de%20gest%C3%A3o%20para%20bares%20e%20eventos.%20Gostaria%20de%20saber%20mais%20sobre%20o%20Klokz." isWhatsapp={true}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <IntegratedSolutions />
          <WhyKlokz />
          <Partners />
          <Testimonials />
          <CtaWhatsappBanner />
        </main>
        <Footer />
      </div>
    </CtaProvider>
  );
}
