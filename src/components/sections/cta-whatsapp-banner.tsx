"use client";

import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { FaWhatsapp, FaBolt, FaHeadset, FaRocket } from 'react-icons/fa';

export function CtaWhatsappBanner() {
    const whatsappLink = "https://wa.me/5541999988288?text=Ol%C3%A1!%20Vi%20o%20site%20e%20estou%20buscando%20um%20sistema%20de%20gest%C3%A3o%20para%20bares%20e%20eventos.%20Gostaria%20de%20saber%20mais%20sobre%20o%20Klokz.";

    return (
        <Section id="contato" className="bg-black py-20 md:py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full opacity-20 blur-[100px]"
                    style={{ background: 'radial-gradient(circle, #25D366 0%, transparent 70%)' }}
                />
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-[1100px] mx-auto">
                    
                    {/* Left content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-[13px] font-bold mb-8 uppercase tracking-wider">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
                            </span>
                            Atendimento Rápido
                        </div>
                        
                        <h2 className="text-4xl md:text-[52px] font-extrabold text-white mb-6 uppercase leading-[1.1] tracking-tight">
                            Fale com um <br className="hidden md:block lg:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-[#128C7E]">especialista</span><br />
                            agora mesmo
                        </h2>
                        
                        <p className="text-[#DCDCDC] text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                            Pronto para transformar a gestão do seu estabelecimento? Nossa equipe está online no WhatsApp para tirar todas as suas dúvidas e ativar seus 30 dias grátis.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start justify-center lg:justify-start gap-6 lg:gap-8 w-fit mx-auto lg:mx-0">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <FaBolt className="text-[#25D366] text-xl" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white font-bold text-[15px]">Ativação Imediata</h4>
                                    <p className="text-white/60 text-[13px]">Comece a usar hoje</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <FaHeadset className="text-[#25D366] text-xl" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white font-bold text-[15px]">Suporte Humanizado</h4>
                                    <p className="text-white/60 text-[13px]">Gente que entende do negócio</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right content - Action Card */}
                    <div className="w-full max-w-[420px]">
                        <div className="bg-[#111114] rounded-[24px] p-8 md:p-10 border border-[#25D366]/20 shadow-[0_0_50px_rgba(37,211,102,0.1)] relative overflow-hidden group">
                            
                            {/* Hover effect background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-6 relative">
                                    <div className="absolute inset-0 bg-[#25D366]/20 rounded-full animate-ping opacity-50" style={{ animationDuration: '3s' }}></div>
                                    <FaWhatsapp className="text-[#25D366] text-[40px]" />
                                </div>
                                
                                <h3 className="text-[22px] font-bold text-white mb-2">Chame no WhatsApp</h3>
                                <p className="text-[#DCDCDC] text-[14px] mb-8 leading-relaxed">
                                    Resposta em menos de 5 minutos.<br/>Sem robôs, atendimento direto.
                                </p>
                                
                                <a 
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-3 h-14 bg-[#25D366] hover:bg-[#128C7E] transition-all duration-300 text-white font-extrabold text-[15px] uppercase tracking-wide rounded-[12px] shadow-lg hover:shadow-[#25D366]/25 hover:-translate-y-1"
                                >
                                    <FaWhatsapp className="text-xl" />
                                    <span>Iniciar Conversa</span>
                                </a>
                                
                                <div className="mt-6 flex items-center justify-center gap-2 text-[#DCDCDC] text-[13px]">
                                    <FaRocket className="text-[#25D366]" />
                                    <span>30 dias grátis + implementação custo zero</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </Section>
    );
}
