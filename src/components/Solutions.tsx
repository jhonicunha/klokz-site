import React from "react";
import { FaCheck } from "react-icons/fa";

const solutions = [
    {
        title: "Listas e Reservas",
        features: [
            "Controle de espaço com mapa em tempo real e impresso",
            "Links personalizados para promoters com negociações próprias",
            "Ranking em tempo real de desempenho de listas",
            "Relatórios com análise de rentabilidade e inteligência preditiva",
        ],
    },
    {
        title: "Portaria e Cadastro",
        features: [
            "Cadastro automático por CPF com dados da Receita Federal",
            "Recepção VIP exclusiva para aniversariantes e convidados",
            "Alertas inteligentes sobre pendências e restrições",
        ],
    },
    {
        title: "Gestão de Vendas",
        features: [
            "Terminal intuitivo para lançamento rápido",
            "Personalização de ingredientes e combos",
            "Ranking de vendas por garçom para comissões",
            "Visualização em tempo real do consumo",
        ],
    },
    {
        title: "Fechamento de Caixa",
        features: [
            "Ranking de produtos vendidos com análise",
            "Relatórios detalhados de múltiplos caixas",
            "Fechamento eficiente com conciliação",
            "Controle de saída de clientes para evitar calotes",
        ],
    },
    {
        title: "Controle de Estoque",
        features: [
            "Suporte a múltiplas unidades de medida",
            "Gestão de compras e pedidos com alertas",
            "Auditoria de estoque com identificação de perdas",
            "Baixa automática integrada às vendas",
        ],
    },
    {
        title: "Gestão Financeira",
        features: [
            "Fluxo de caixa com visibilidade completa",
            "Controle de múltiplas contas bancárias",
            "Projeção financeira para planejamento",
            "Relatórios gerenciais para decisões",
        ],
    },
];

const Solutions: React.FC = () => {
    return (
        <section id="solutions" className="py-24 bg-background relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Soluções Completas
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Módulos integrados para gerenciar cada aspecto do seu negócio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="bg-card-bg border border-white/5 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-primary transition-colors">
                                {solution.title}
                            </h3>
                            <ul className="space-y-4">
                                {solution.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                                        <FaCheck className="mt-1 text-primary flex-shrink-0 text-sm" />
                                        <span className="text-sm leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
