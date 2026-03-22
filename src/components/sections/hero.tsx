
import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { FaCheck, FaWhatsapp, FaUniversalAccess } from 'react-icons/fa';

export function Hero() {
    return (
        <Section className="relative h-screen flex items-center justify-center pt-[80px] pb-0 overflow-hidden bg-[#050505]">

            {/* Background & Overlay */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Base Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.4]"
                    style={{ backgroundImage: 'url(/images/herobackground.jpg)' }}
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Light glow effects similar to reference */}
                <div className="absolute top-[15%] left-[5%] w-[600px] h-[600px] bg-[#00B4D8]/[0.05] rounded-full blur-[120px]" />
                <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[#00B4D8]/[0.08] rounded-full blur-[130px]" />
            </div>

            <Container className="relative z-10 flex flex-col items-center text-center justify-center -mt-12">

                {/* Main Headline */}
                <h1 className="text-[2.75rem] md:text-[3rem] font-bold text-white mb-[22px] max-w-[900px] mx-auto leading-[1.05] tracking-tight">
                    NÃO SOMOS UM <span className="text-[#00B4D8]">PDV</span><span className="text-white">.</span>
                    <br />
                    SOMOS <span className="text-[#00B4D8]">CONTROLE TOTAL</span>
                    <br />
                    DA OPERAÇÃO DO SEU <span className="text-[#00B4D8]">BAR</span><span className="text-white">.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-[1.125rem] font-medium text-[#D4D4D8] italic mb-9 max-w-[500px] mx-auto leading-[1.6]">
                    Da recepção ao financeiro. Cada ação registrada. Cada movimento rastreável.
                </p>

                {/* CTA Button */}
                <div className="w-full max-w-[420px] mb-8">
                    <button
                        className="w-full h-[54px] rounded-[8px] text-white font-bold text-[14px] transition-all duration-300 hover:brightness-110 cursor-pointer shadow-[0_4px_14px_0_rgba(0,180,216,0.2)]"
                        style={{
                            background: 'linear-gradient(90deg, #00B4D8 0%, #8B5CF6 100%)',
                        }}
                    >
                        Testar 30 dias grátis
                    </button>
                </div>

                {/* Checkmarks */}
                <div className="flex flex-col items-center gap-[10px]">
                    {[
                        'Sem compromisso.',
                        'Implementação rápida.',
                        'Suporte especializado.',
                    ].map((text, idx) => (
                        <div key={idx} className="flex items-center gap-[8px]">
                            <FaCheck className="text-[#00B4D8] text-[11px] shrink-0" />
                            <span className="text-[#F4F4F5] text-[0.875rem] font-medium">{text}</span>
                        </div>
                    ))}
                </div>

            </Container>

            {/* Accessibility button - bottom left */}
            <button
                className="absolute bottom-6 left-6 z-50 w-11 h-11 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #00B4D8 0%, #3B82F6 100%)' }}
                aria-label="Acessibilidade"
            >
                <FaUniversalAccess size={22} />
            </button>
            
            {/* WhatsApp floating button - bottom right */}
            <a
                href="https://wa.me/554199998288"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
                <FaWhatsapp className="text-white" size={24} />
            </a>
        </Section>
    );
}
