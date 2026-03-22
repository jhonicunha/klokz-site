
import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { FaCogs, FaShieldAlt, FaHandshake, FaCloud, FaPlug, FaHeadset } from 'react-icons/fa';

const differentiators = [
    {
        icon: <FaCogs className="w-6 h-6" />,
        title: 'Automação 100% Completa',
        description: 'Desde a entrada do cliente até o fechamento do caixa, tudo é automatizado para eliminar falhas humanas e aumentar a eficiência.',
    },
    {
        icon: <FaShieldAlt className="w-6 h-6" />,
        title: 'Prevenção e Auditoria',
        description: 'Relatórios detalhados de movimentação, controle de acesso e auditoria completa para prevenir desvios e perdas financeiras.',
    },
    {
        icon: <FaHandshake className="w-6 h-6" />,
        title: 'Assessoria Técnica',
        description: 'Time especializado para te ajudar na implantação, treinamento da equipe e suporte contínuo para o sucesso do seu negócio.',
    },
    {
        icon: <FaCloud className="w-6 h-6" />,
        title: 'Dados em Nuvem',
        description: 'Acesse seus dados de qualquer lugar, a qualquer momento. Seus dados estão seguros e sempre disponíveis na nuvem.',
    },
    {
        icon: <FaPlug className="w-6 h-6" />,
        title: 'Integração com Delivery',
        description: 'Conecte seu estabelecimento com as principais plataformas de delivery e receba pedidos diretamente no sistema.',
    },
    {
        icon: <FaHeadset className="w-6 h-6" />,
        title: 'Suporte 24h',
        description: 'Suporte técnico disponível em horários estendidos para garantir que sua operação nunca pare quando mais precisa.',
    },
];

export function WhyKlokz() {
    return (
        <Section id="features" className="bg-[#0a0a0c]">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">
                        Por que escolher o <span className="text-primary">KLOKZ</span>?
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                        Conheça os diferenciais que fazem a diferença na sua operação
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {differentiators.map((item, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-[#141418] border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col"
                        >
                            <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary/25 transition-all duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
