import React from "react";
import {
    FaLayerGroup,
    FaUserShield,
    FaSlidersH,
    FaBolt,
    FaCloud,
    FaHeadset
} from "react-icons/fa";

const differentials = [
    {
        icon: FaLayerGroup,
        title: "Tudo em um Sistema",
        description: "Centralize todas as operações do seu evento em uma única plataforma integrada, da portaria aos relatórios.",
    },
    {
        icon: FaUserShield,
        title: "Controle Total de Usuários",
        description: "O poder está em suas mãos. Determine o nível de acesso de cada usuário, do promoter ao administrador, com total precisão.",
    },
    {
        icon: FaSlidersH,
        title: "Flexibilidade",
        description: "Adapte o sistema às regras e formatos do seu evento. Personalize listas, reservas e cobranças conforme a sua operação.",
    },
    {
        icon: FaBolt,
        title: "Tempo Real",
        description: "Acompanhe dados de público, vendas e portaria ao vivo, com atualizações instantâneas em todos os dispositivos.",
    },
    {
        icon: FaCloud,
        title: "100% Online",
        description: "Acesse e gerencie seu evento de qualquer lugar, sem instalações ou dependência de servidor local.",
    },
    {
        icon: FaHeadset,
        title: "Suporte 24/7",
        description: "Conte com atendimento especializado em tempo integral para garantir que seu evento nunca pare.",
    },
];

const Differentiators: React.FC = () => {
    return (
        <section id="diferenciais" className="py-24 bg-background relative border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
                        POR QUE ESCOLHER A KLOKZ?
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto">
                        Diferenciais exclusivos que fazem da KLOKZ a escolha número #1 do mercado
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {differentials.map((item, index) => (
                        <div key={index} className="flex flex-col items-start group">
                            <div className="mb-6 p-4 rounded-2xl bg-white/5 group-hover:bg-primary/20 transition-colors text-primary border border-white/10 group-hover:border-primary/50">
                                <item.icon className="text-2xl" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">
                                {item.title}
                            </h4>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Differentiators;
