import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaCheck } from "react-icons/fa";

import CTAButton from "./CTAButton";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center pt-44 md:pt-56 overflow-hidden"
    >
      {/* Background with Dark Gradient */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(15,15,17,1)_100%)] z-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center z-20 relative">
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white mb-8 max-w-6xl mx-auto leading-[1.1] uppercase">
          NÃO SOMOS UM <span className="text-brand-cyan">PDV</span>.<br />
          SOMOS <span className="text-brand-cyan">CONTROLE TOTAL</span><br />
          DA OPERAÇÃO DO SEU <span className="text-brand-cyan">BAR</span>.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto italic opacity-90">
          Da recepção ao financeiro. Cada ação registrada. Cada movimento rastreável.
        </p>

        <div className="flex flex-col items-center justify-center gap-8 mb-16">
          <CTAButton />
          
          <div className="flex flex-col items-center gap-2 text-sm text-gray-300 font-medium">
            <div className="flex items-center gap-2">
              <FaCheck className="text-brand-cyan text-xs" />
              <span>Sem compromisso.</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-brand-cyan text-xs" />
              <span>Implementação rápida.</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-brand-cyan text-xs" />
              <span>Suporte especializado.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[300px] pointer-events-none">
        {/* Glow effect at the bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/10 blur-[100px] rounded-full opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;
