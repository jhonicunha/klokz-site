
"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { FaClipboardList, FaGlassCheers, FaUsers, FaChartPie, FaQrcode, FaMobileAlt } from 'react-icons/fa';
import { DescriptionModal } from '@/components/ui/modal';

const solutions = [
    {
        icon: <FaClipboardList className="w-6 h-6" />,
        title: 'Comandas e Consumo',
        description: 'Controle total de consumo por cliente com cartões ou pulseiras RFID/QR Code. Elimine erros de lançamento e filas no checkout.',
        fullDescription: 'Nosso sistema de comandas permite que você opere com cartões individuais, pulseiras RFID ou QR Codes. O cliente consome e tudo é lançado em tempo real. No final, o pagamento é agilizado, reduzindo filas e garantindo que nada passe despercebido. Ideal para casas com alto fluxo de pessoas.',
        features: [
            'Comanda Individual ou Cartão',
            'Pulseiras RFID / NFC',
            'Bloqueio automático por limite',
            'Extrato em tempo real'
        ]
    },
    {
        icon: <FaUsers className="w-6 h-6" />,
        title: 'Gestão de Listas',
        description: 'Listas de aniversariantes, promoters e VIPs integradas à portaria. Check-in rápido e seguro.',
        fullDescription: 'Diga adeus às pranchetas de papel. Com o Klokz, promotores enviam listas diretamente pelo sistema, e a portaria faz o check-in em segundos. Tenha relatórios de quem entrou, qual promoter trouxe mais gente e gerencie cortesias de forma automática.',
        features: [
            'Link para envio de nomes',
            'Controle de Promoters',
            'Check-in via QR Code',
            'Relatório de conversão'
        ]
    },
    {
        icon: <FaGlassCheers className="w-6 h-6" />,
        title: 'Bares e Estoque',
        description: 'Controle de estoque em tempo real com ficha técnica e baixa automática a cada venda realizada.',
        fullDescription: 'Mantenha seu estoque sempre auditado. Cada dose, drink ou produto vendido é baixado automaticamente do estoque através da ficha técnica. Receba alertas de nível crítico e evite desperdícios ou desvios com relatórios precisos de movimentação.',
        features: [
            'Ficha técnica de drinks',
            'Baixa automática de insumos',
            'Alerta de estoque mínimo',
            'Auditoria de inventário'
        ]
    },
    {
        icon: <FaChartPie className="w-6 h-6" />,
        title: 'Financeiro Completo',
        description: 'DRE, fluxo de caixa, split de pagamentos e relatórios detalhados para tomada de decisão.',
        fullDescription: 'Tenha a saúde financeira do seu negócio na palma da mão. Visualize DRE, fluxo de caixa diário e mensal. Se você tem sócios ou parceiros, o sistema calcula os repasses automaticamente. Relatórios gráficos ajudam você a entender onde está o lucro real.',
        features: [
            'DRE Gerencial',
            'Fluxo de Caixa em tempo real',
            'Split de pagamento automático',
            'Contas a pagar e receber'
        ]
    },
    {
        icon: <FaQrcode className="w-6 h-6" />,
        title: 'Cardápio Digital',
        description: 'Autoatendimento via QR Code na mesa ou balcão para agilizar pedidos e aumentar o ticket médio.',
        fullDescription: 'O cliente senta, lê o QR Code e faz o pedido pelo celular sem precisar chamar o garçom. O pedido sai direto na impressora do bar ou cozinha. Isso agiliza o atendimento, reduz a necessidade de garçons e comprovadamente aumenta o consumo por impulso.',
        features: [
            'Pedidos via QR Code',
            'Pagamento online (Pix/Cartão)',
            'Personalização de adicionais',
            'Fotos de alta resolução'
        ]
    },
    {
        icon: <FaMobileAlt className="w-6 h-6" />,
        title: 'App do Garçom',
        description: 'Pedidos lançados diretamente pelo celular, impresso na cozinha/bar. Mais agilidade no salão.',
        fullDescription: 'Seus garçons ganham mobilidade e eficiência. Com o App do Garçom, eles lançam pedidos ao lado da mesa, que são enviados instantaneamente para produção. Menos erros de comunicação, atendimento mais rápido e clientes mais satisfeitos.',
        features: [
            'Lançamento móvel de pedidos',
            'Impressão remota na cozinha',
            'Observações no pedido',
            'Fechamento de conta na mesa'
        ]
    }
];

export function IntegratedSolutions() {
    const [selectedSolution, setSelectedSolution] = useState<typeof solutions[0] | null>(null);

    return (
        <Section id="solutions" className="bg-background">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
                        Soluções <span className="text-primary">Integradas</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Da portaria ao fechamento do caixa, o Klokz centraliza toda a operação em uma única plataforma.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-[#18181B] border border-white/5 hover:border-primary/50 transition-all hover:bg-white/5 cursor-pointer flex flex-col h-full"
                            onClick={() => setSelectedSolution(solution)}
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                {solution.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 text-left">{solution.title}</h3>
                            <ul className="text-gray-400 space-y-2 mb-6 flex-1 text-left text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    {solution.description}
                                </li>
                            </ul>
                            <div className="mt-auto pt-4 border-t border-white/5">
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
