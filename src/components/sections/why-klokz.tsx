
"use client";

import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { FaLayerGroup, FaShieldAlt, FaSlidersH, FaChartLine, FaGlobe, FaHeadset } from 'react-icons/fa';

const differentiators = [
    {
        icon: <FaLayerGroup className="w-5 h-5" />,
        title: 'Operação 100% Integrada',
        description: 'Da portaria ao relatório financeiro — tudo conectado em uma única base de dados.',
    },
    {
        icon: <FaShieldAlt className="w-5 h-5" />,
        title: 'Permissões e Auditoria Completa',
        description: 'Defina níveis de acesso com precisão e rastreie cada ação realizada no sistema, com total transparência.',
    },
    {
        icon: <FaSlidersH className="w-5 h-5" />,
        title: 'Adaptável à sua operação',
        description: 'Configure regras, fluxos e permissões conforme o modelo do seu bar ou balada — sem engessar sua operação.',
    },
    {
        icon: <FaChartLine className="w-5 h-5" />,
        title: 'Dados ao Vivo',
        description: 'Acompanhe público, vendas e portaria em tempo real, de qualquer dispositivo.',
    },
    {
        icon: <FaGlobe className="w-5 h-5" />,
        title: 'Acesso de Qualquer Lugar',
        description: 'Gerencie sua operação sem servidor local e sem depender de uma máquina específica, apenas com conexão à internet.',
    },
    {
        icon: <FaHeadset className="w-5 h-5" />,
        title: 'Suporte para Noite Real',
        description: 'Atendimento preparado para operação noturna e eventos de alto volume, quando você mais precisa.',
    },
];

export function WhyKlokz() {
    return (
        <Section id="diferenciais" className="bg-black">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-[44px] font-extrabold text-white mb-5 uppercase leading-tight tracking-tight">
                        Por que escolher o{' '}
                        <span className="efeito-piscante-roxo" data-text="KLOKZ?">KLOKZ?</span>
                    </h2>
                    <p className="text-[#DCDCDC] text-[15px] md:text-[16px]">
                        Desenvolvido por quem viveu a operação real da noite.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {differentiators.map((item, index) => (
                        <div
                            key={index}
                            className="group p-7 rounded-[16px] bg-[#111114] border border-white/5 hover:border-[#10A7F1]/40 hover:shadow-[0_0_20px_rgba(16,167,241,0.08)] transition-all duration-300 flex flex-col"
                        >
                            {/* Icon with gradient background */}
                            <div
                                className="w-[46px] h-[46px] rounded-[12px] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, #10A7F1 0%, #882FE3 100%)',
                                }}
                            >
                                {item.icon}
                            </div>
                            <h3 className="text-[17px] font-bold text-[#10A7F1] mb-3 italic">{item.title}</h3>
                            <p className="text-[#DCDCDC] text-[14px] leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
