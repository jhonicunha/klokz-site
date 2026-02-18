
import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { FaClipboardList, FaGlassCheers, FaUsers, FaChartPie, FaQrcode, FaMobileAlt } from 'react-icons/fa';

const features = [
    {
        icon: <FaClipboardList className="w-6 h-6" />,
        title: 'Comandas Individuais',
        description: 'Controle total de consumo por cliente com cartões ou pulseiras RFID/QR Code.'
    },
    {
        icon: <FaUsers className="w-6 h-6" />,
        title: 'Gestão de Listas',
        description: 'Listas de aniversariantes, promoters e VIPs integradas à portaria.'
    },
    {
        icon: <FaGlassCheers className="w-6 h-6" />,
        title: 'Bares e Estoque',
        description: 'Controle de estoque em tempo real com ficha técnica e baixa automática.'
    },
    {
        icon: <FaChartPie className="w-6 h-6" />,
        title: 'Financeiro Completo',
        description: 'Dree, fluxo de caixa, split de pagamentos e relatórios detalhados.'
    },
    {
        icon: <FaQrcode className="w-6 h-6" />,
        title: 'Cardápio Digital',
        description: 'Autoatendimento via QR Code na mesa ou balcão para agilizar pedidos.'
    },
    {
        icon: <FaMobileAlt className="w-6 h-6" />,
        title: 'App do Garçom',
        description: 'Pedidos lançados diretamente pelo celular, impresso na cozinha/bar.'
    }
];

export function Features() {
    return (
        <Section id="features" className="bg-secondary/20">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Tudo o que seu negócio precisa
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Da portaria ao fechamento do caixa, o Klokz centraliza toda a operação em uma única plataforma.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all hover:bg-white/10"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
