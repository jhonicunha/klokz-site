
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ProblemStatement } from "@/components/sections/problem-statement";
import { IntegratedSolutions } from "@/components/sections/integrated-solutions";
import { Partners } from "@/components/sections/partners";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemStatement />
        <IntegratedSolutions />
        <Partners />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
