import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { IntegratedSolutions } from "@/components/sections/integrated-solutions";
import { WhyKlokz } from "@/components/sections/why-klokz";
import { Partners } from "@/components/sections/partners";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function PageB() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IntegratedSolutions />
        <WhyKlokz />
        <Partners />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
