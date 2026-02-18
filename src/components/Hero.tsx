import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

import CTAButton from "./CTAButton";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center pt-32 md:pt-40 overflow-hidden"
    >
      {/* Background with Dark Gradient */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(15,15,17,1)_100%)] z-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center z-20 relative">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          Toda gestão do seu evento <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            em um só sistema
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Tudo em um só lugar - simples, rápido e inteligente.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <CTAButton dark={true} />
          <Link
            href="#contact"
            className="flex items-center gap-2 text-sm font-semibold text-white tracking-widest hover:text-primary transition-colors uppercase"
          >
            <span className="border border-white/20 rounded-full p-3 hover:bg-white/10 transition-colors">
              <FaPlay className="text-xs ml-0.5" />
            </span>
            Agende uma Demo
          </Link>
        </div>
      </div>

      <div className="relative w-full max-w-5xl mx-auto z-20 px-4">
        <div className="relative mx-auto rounded-t-2xl border-t border-l border-r border-white/10 bg-white/5 backdrop-blur-sm p-2 shadow-2xl shadow-primary/20">
          <Image
            src="/images/devices.png"
            width={1000}
            height={500}
            priority
            alt="Klokz Dashboard"
            className="rounded-lg shadow-2xl w-full h-auto"
          />
        </div>
        {/* Gradient overlay at bottom of image to blend with floor */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-30"></div>
      </div>
    </section>
  );
};

export default Hero;
