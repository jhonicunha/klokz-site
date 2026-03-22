
"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { FaCashRegister, FaDoorOpen, FaHeartbeat, FaBoxes, FaCreditCard, FaChartLine } from 'react-icons/fa';
import { DescriptionModal } from '@/components/ui/modal';

const solutions = [
    {
        icon: <FaCashRegister className="w-6 h-6" />,
        title: 'Vendas e PDV',
        description: 'PDV completo e intuitivo com integração fiscal, emissão de NFC-e, controle de caixa e múltiplas formas de pagamento. Agilize suas vendas.',
        fullDescription: 'Nosso PDV foi desenvolvido pensando na velocidade e praticidade do atendimento em bares e eventos. Com interface intuitiva, seus operadores dominam o sistema em minutos. Integração fiscal completa com emissão de NFC-e e suporte a PIX, cartão, dinheiro e vale.',
        features: [
            'Emissão de NFC-e integrada',
            'Múltiplas formas de pagamento',
            'Controle de caixa em tempo real',
            'Interface rápida e intuitiva'
        ]
    },
    {
        icon: <FaDoorOpen className="w-6 h-6" />,
        title: 'Portaria e Recepção',
        description: 'Controle total da entrada com listas de promoters, check-in via QR Code, recepção automática e gestão de cortesias integrada.',
        fullDescription: 'A portaria é o primeiro contato do cliente com seu estabelecimento. Com o Klokz, você automatiza o check-in, valida listas de promoters e controla cortesias em tempo real. Tudo integrado ao sistema de comandas.',
        features: [
            'Check-in via QR Code',
            'Listas de promoters integradas',
            'Recepção automática',
            'Controle de cortesias'
        ]
    },
    {
        icon: <FaHeartbeat className="w-6 h-6" />,
        title: 'Protocolo Médico',
        description: 'Registro e acompanhamento de protocolos médicos para eventos, garantindo a segurança dos clientes e conformidade legal.',
        fullDescription: 'Garanta a segurança do seu evento com protocolos médicos integrados ao sistema. Registre ocorrências, acompanhe atendimentos e mantenha toda a documentação organizada para conformidade com órgãos reguladores.',
        features: [
            'Registro de ocorrências',
            'Acompanhamento em tempo real',
            'Documentação organizada',
            'Conformidade legal'
        ]
    },
    {
        icon: <FaBoxes className="w-6 h-6" />,
        title: 'Estoque e Insumos',
        description: 'Gestão completa de estoque com ficha técnica, baixa automática, alerta de nível crítico e auditoria de movimentações.',
        fullDescription: 'Mantenha seu estoque sempre auditado. Cada dose, drink ou produto vendido é baixado automaticamente do estoque através da ficha técnica. Receba alertas de nível crítico e evite desperdícios ou desvios com relatórios precisos.',
        features: [
            'Ficha técnica de drinks',
            'Baixa automática de insumos',
            'Alerta de estoque mínimo',
            'Auditoria de inventário'
        ]
    },
    {
        icon: <FaCreditCard className="w-6 h-6" />,
        title: 'Controle de Comandas',
        description: 'Comandas individuais com cartões ou pulseiras RFID/QR Code. Consumo em tempo real, bloqueio por limite e extrato instantâneo.',
        fullDescription: 'Nosso sistema de comandas permite que você opere com cartões individuais, pulseiras RFID ou QR Codes. O cliente consome e tudo é lançado em tempo real. No final, o pagamento é agilizado, reduzindo filas.',
        features: [
            'Comanda Individual ou Cartão',
            'Pulseiras RFID / NFC',
            'Bloqueio automático por limite',
            'Extrato em tempo real'
        ]
    },
    {
        icon: <FaChartLine className="w-6 h-6" />,
        title: 'Gestão Financeira',
        description: 'DRE gerencial, fluxo de caixa, split de pagamentos entre sócios e relatórios detalhados para tomada de decisão estratégica.',
        fullDescription: 'Tenha a saúde financeira do seu negócio na palma da mão. Visualize DRE, fluxo de caixa diário e mensal. Se você tem sócios ou parceiros, o sistema calcula os repasses automaticamente.',
        features: [
            'DRE Gerencial',
            'Fluxo de Caixa em tempo real',
            'Split de pagamento automático',
            'Contas a pagar e receber'
        ]
    }
];

export function IntegratedSolutions() {
    const [selectedSolution, setSelectedSolution] = useState<typeof solutions[0] | null>(null);

    return (
        <Section id="solutions" className="bg-background">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Uma operação. Um <span className="text-primary underline decoration-primary underline-offset-8">sistema</span>.
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                        Da portaria ao financeiro — tudo integrado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-[#141418] border border-white/5 hover:border-primary/40 transition-all duration-300 cursor-pointer flex flex-col h-full"
                            onClick={() => setSelectedSolution(solution)}
                        >
                            <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary/25 transition-all duration-300">
                                {solution.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">{solution.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed flex-1">
                                {solution.description}
                            </p>
                            <div className="mt-5 pt-4 border-t border-white/5">
                                <span className="text-primary text-sm font-medium group-hover:underline">Saiba mais &rarr;</span>
                            </div>
                        </div>
                    ))}
                </div>

                <DescriptionModal
                    isOpen={!!selectedSolution}
                    onClose={() => setSelectedSolution(null)}
                    title={selectedSolution?.title || ''}
                    description={selectedSolution?.fullDescription || ''}
                    icon={selectedSolution?.icon}
                    features={selectedSolution?.features}
                />
            </Container>
        </Section>
    );
}
