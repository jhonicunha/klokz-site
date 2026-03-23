
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
                <div className="absolute top-[15%] left-[5%] w-[600px] h-[600px] bg-[#10A7F1]/[0.05] rounded-full blur-[120px]" />
                <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[#10A7F1]/[0.08] rounded-full blur-[130px]" />
            </div>

            <Container className="relative z-10 flex flex-col items-center text-center justify-center mt-[32px] md:mt-[92px]">

                {/* Main Headline */}
                <h1 className="text-[1.8rem] sm:text-[2.25rem] lg:text-[2.75rem] font-bold text-white mb-[22px] max-w-[900px] mx-auto leading-[1.2] md:leading-[1.05] tracking-tight">
                    NÃO SOMOS UM <span className="efeito-piscante-roxo" data-text="PDV">PDV</span><span className="text-white">.</span>{' '}
                    <br className="hidden md:block" />
                    SOMOS <span className="efeito-piscante-roxo" data-text="CONTROLE TOTAL">CONTROLE TOTAL</span>{' '}
                    <br className="hidden md:block" />
                    DA OPERAÇÃO DO SEU <span className="efeito-piscante-roxo" data-text="BAR">BAR</span><span className="text-white">.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-[0.85rem] md:text-[1.125rem] font-medium text-[#D4D4D8] italic mb-9 max-w-[280px] md:max-w-[500px] mx-auto leading-[1.6]">
                    Da recepção ao financeiro. Cada ação registrada. Cada movimento rastreável.
                </p>

                {/* CTA Button */}
                <div className="w-full max-w-[420px] mb-8">
                    <button
                        className="w-full h-[48px] md:h-[54px] rounded-[8px] text-white font-bold text-[0.875rem] md:text-[14px] transition-all duration-300 hover:brightness-110 cursor-pointer shadow-[0_4px_14px_0_rgba(16,167,241,0.2)]"
                        style={{
                            background: 'linear-gradient(90deg, #10A7F1 0%, #882FE3 100%)',
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
                            <FaCheck className="text-[#10A7F1] text-[11px] shrink-0" />
                            <span className="text-[#F4F4F5] text-[0.75rem] md:text-[0.875rem] font-medium">{text}</span>
                        </div>
                    ))}
                </div>

            </Container>
        </Section>
    );
}
