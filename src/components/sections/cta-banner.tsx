
"use client";

import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { FaChevronDown } from 'react-icons/fa';

export function CtaBanner() {
    return (
        <Section id="contato" className="bg-black py-20 md:py-32">
            <Container>
                {/* Header Sequence */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-[52px] font-extrabold text-white mb-6 uppercase leading-[1.1] tracking-tight flex flex-col items-center">
                        <span>30 dias grátis +</span>
                        <div className="mt-1 flex flex-col items-center">
                            <span className="efeito-piscante-roxo" data-text="implementação custo">implementação custo</span>
                            <span className="efeito-piscante-roxo" data-text="zero">zero</span>
                        </div>
                    </h2>
                    <p className="text-[#DCDCDC] text-[15px] sm:text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
                        Preencha o formulário que um de nossos especialistas entrará em contato para ativar sua operação 100% grátis na prática.
                    </p>
                </div>

                {/* Form Container */}
                <div className="max-w-2xl mx-auto w-full">
                    <div className="bg-[#111114] rounded-[24px] p-6 sm:p-8 md:p-10 border border-white/5 shadow-2xl">
                        <form className="flex flex-col gap-3">
                            {/* Nome */}
                            <input
                                type="text"
                                placeholder="Nome"
                                className="w-full h-10 sm:h-11 bg-[#0a0a0c] border border-white/5 rounded-[10px] px-5 text-[14px] text-white placeholder-gray-500 focus:outline-none focus:border-[#10A7F1]/50 transition-colors"
                            />

                            {/* WhatsApp */}
                            <input
                                type="tel"
                                placeholder="WhatsApp"
                                className="w-full h-10 sm:h-11 bg-[#0a0a0c] border border-white/5 rounded-[10px] px-5 text-[14px] text-white placeholder-gray-500 focus:outline-none focus:border-[#10A7F1]/50 transition-colors"
                            />

                            {/* Estabelecimento */}
                            <input
                                type="text"
                                placeholder="Nome do Estabelecimento"
                                className="w-full h-10 sm:h-11 bg-[#0a0a0c] border border-white/5 rounded-[10px] px-5 text-[14px] text-white placeholder-gray-500 focus:outline-none focus:border-[#10A7F1]/50 transition-colors"
                            />

                            {/* Select Wrapper */}
                            <div className="relative">
                                <select 
                                    className="w-full h-10 sm:h-11 bg-[#0a0a0c] border border-white/5 rounded-[10px] px-5 pr-10 text-[14px] text-gray-500 appearance-none focus:outline-none focus:border-[#10A7F1]/50 transition-colors cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Tipo</option>
                                    <option value="bar">Bar</option>
                                    <option value="balada">Casa Noturna / Balada</option>
                                    <option value="restaurante">Restaurante / Pub</option>
                                    <option value="outro">Outro</option>
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                    <FaChevronDown size={14} />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button 
                                type="button" 
                                className="w-full h-10 sm:h-11 mt-2 bg-brand-gradient hover:opacity-90 transition-opacity text-white font-extrabold text-[14px] uppercase tracking-wide rounded-[10px] border-0"
                            >
                                Quero Testar 30 Dias
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
