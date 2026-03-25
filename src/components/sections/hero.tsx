
import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { FaCheck, FaWhatsapp, FaUniversalAccess } from 'react-icons/fa';

export function Hero() {
    return (
        <Section className="relative min-h-screen flex items-center justify-center pt-[80px] pb-0 overflow-hidden bg-[#050505]">

            {/* Background & Overlay */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Base Background Image */}
                <div
                    className="absolute inset-0 opacity-[0.4]"
                    style={{ 
                        backgroundImage: 'url(/images/herobackground.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50" />
                
                {/* Mobile glow (shifted up and stretched to kill the black top bar) */}
                <div 
                    className="md:hidden absolute top-[-10%] left-1/2 -translate-x-1/2 w-[150vw] h-[100vh] pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at 50% 40%, rgba(16, 167, 241, 0.35) 0%, rgba(16, 167, 241, 0.15) 60%, rgba(16, 167, 241, 0) 100%)'
                    }}
                />

                {/* Desktop glow (subtle, exactly as requested initially) */}
                <div 
                    className="hidden md:block absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(16, 167, 241, 0.30) 0%, rgba(16, 167, 241, 0) 75%)'
                    }}
                />
            </div>

            <Container className="relative z-10 flex flex-col items-center text-center justify-center mt-[-20px] md:mt-[92px]">

                {/* Main Headline */}
                <h1 className="text-[1.45rem] sm:text-[1.7rem] lg:text-[2.75rem] font-bold text-white mb-[22px] max-w-[900px] mx-auto leading-[1.2] md:leading-[1.05] tracking-tight">
                    NÃO SOMOS UM <span className="efeito-piscante-roxo" data-text="PDV">PDV</span><span className="text-white">.</span>
                    <br className="block md:hidden" />
                    {' '}<br className="hidden md:block" />
                    SOMOS <span className="efeito-piscante-roxo" data-text="CONTROLE TOTAL">CONTROLE TOTAL</span>{' '}
                    <br className="hidden md:block" />
                    DA OPERAÇÃO DO SEU <span className="efeito-piscante-roxo" data-text="BAR">BAR</span><span className="text-white">.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-[0.85rem] md:text-[1.125rem] font-medium text-[#D4D4D8] italic mb-9 w-[370px] max-w-full md:max-w-[500px] mx-auto leading-[1.6] text-center">
                    Da recepção ao financeiro. Cada ação registrada. Cada movimento rastreável.
                </p>

                {/* CTA Button */}
                <div className="w-full px-0 md:max-w-[420px] mb-8">
                    <a
                        href="#contato"
                        className="flex items-center justify-center w-full h-[48px] md:h-[54px] rounded-[8px] text-white font-bold text-[0.875rem] md:text-[14px] transition-all duration-300 hover:brightness-110 cursor-pointer shadow-[0_4px_14px_0_rgba(16,167,241,0.2)]"
                        style={{
                            background: 'linear-gradient(90deg, #10A7F1 0%, #882FE3 100%)',
                        }}
                    >
                        Testar 30 dias grátis
                    </a>
                </div>

                {/* Checkmarks */}
                <div className="flex flex-col items-center gap-[10px]">
                    {[
                        'Sem compromisso.',
                        'Implementação rápida.',
                        'Suporte especializado.',
                    ].map((text, idx) => (
                        <div key={idx} className="flex items-center gap-[8px]">
                            <FaCheck className="text-[#10A7F1] text-[11px] shrink-0" />
                            <span className="text-[#F4F4F5] text-[0.75rem] md:text-[0.875rem] font-medium">{text}</span>
                        </div>
                    ))}
                </div>

            </Container>
        </Section>
    );
}
