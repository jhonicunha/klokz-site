
"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { FaDoorOpen, FaClipboardList, FaShoppingCart, FaCheck, FaCalculator, FaCube, FaDollarSign } from 'react-icons/fa';
import { DescriptionModal } from '@/components/ui/modal';
import type { AccordionItem } from '@/components/ui/modal';

const solutions: {
    icon: React.ReactNode;
    title: string;
    description: string;
    fullDescription: string;
    features: string[];
    accordionItems?: AccordionItem[];
}[] = [
    {
        icon: <FaClipboardList className="w-5 h-5" />,
        title: 'Listas e Reservas',
        description: 'Gestão de listas VIP e reservas de mesas.',
        fullDescription: 'Gerencie listas, reservas e promoters em um só lugar — tudo conectado em tempo real com a portaria e os relatórios.',
        features: [
            'Controle de espaço com mapa em tempo real e impresso',
            'Links personalizados para promoters com negociações próprias',
            'Ranking em tempo real de desempenho de listas',
            'Relatórios com análise de rentabilidade e inteligência preditiva'
        ],
        accordionItems: [
            {
                title: 'Controle de Espaço',
                description: 'Cadastre facilmente suas mesas, camarotes e áreas VIP.',
                subItems: [
                    { title: 'Mapa em Tempo Real', text: 'Visualize o mapa de reservas atualizado ao vivo (disponível apenas para usuários autorizados).' },
                    { title: 'Mapa Impresso', text: 'Imprima o mapa de reservas do dia para a equipe da noite.' }
                ]
            },
            {
                title: 'Criação de Links Personalizados',
                description: 'Gere links individuais para promoters, aniversariantes, parceiros ou bandas — cada um com regras próprias, como valor de entrada e horário de acesso.',
                subItems: [
                    { title: 'Negociações Personalizadas', text: 'Defina regras de valores e horários diferentes para cada tipo de lista e reserva.' },
                    { title: 'Escolha o Tipo de Cobrança', text: 'Entrada Seca: O cliente paga apenas o ingresso. Entrada + Consumação: O cliente paga o ingresso e recebe parte do valor em crédito. Consumação: O valor total pago na entrada vira crédito.' }
                ]
            },
            {
                title: 'Ranking',
                description: 'Acompanhe em tempo real o desempenho de todas as listas e reservas.'
            },
            {
                title: 'Relatórios',
                description: 'A Inteligência do seu Evento',
                subItems: [
                    { title: 'Análise de Rentabilidade', text: 'Foque no lucro, não no volume. Saiba exatamente quais ações (listas, reservas) trazem clientes que gastam e quais trazem apenas quantidade. Invista apenas no que dá retorno financeiro real.' },
                    { title: 'Inteligência Preditiva', text: 'Tenha uma estimativa precisa do público do seu evento. O sistema analisa o volume total de nomes em listas e reservas confirmadas para prever quantas pessoas realmente irão comparecer, permitindo um planejamento muito mais preciso de staff e estoque.' },
                    { title: 'Painel de Comando', text: 'O \'placar final\' da sua noite em uma tela. Tenha os números consolidados de público e faturamento, com a flexibilidade de ver o resultado total do evento ou o desempenho individual de cada lista e reserva. Decida com base em dados, não em achismo.' }
                ]
            }
        ]
    },
    {
        icon: <FaDoorOpen className="w-5 h-5" />,
        title: 'Portaria e Cadastro',
        description: 'Controle total da entrada e validação rápida.',
        fullDescription: 'Acesso rápido, seguro e automático — o sistema identifica o cliente, valida os dados e libera a entrada em segundos.',
        features: [
            'Cadastro automático por CPF com dados da Receita Federal',
            'Recepção VIP exclusiva para aniversariantes e convidados',
            'Alertas inteligentes sobre pendências e restrições'
        ],
        accordionItems: [
            {
                title: 'Cadastro Automático por CPF',
                description: 'O sistema busca as informações direto da Receita Federal, preenchendo automaticamente nome e data de nascimento — rápido, preciso e sem erro.',
                subItems: [
                    { title: 'Preenchimento Automático', text: 'Evita erros e cadastros duplicados.' },
                    { title: 'Validação Instantânea', text: 'Verifica se o CPF é válido antes de liberar o acesso.' }
                ]
            },
            {
                title: 'Recepção VIP Exclusiva',
                description: 'Crie uma experiência de entrada diferenciada para seus melhores clientes. O sistema permite configurar uma recepção especial, separada da fila principal, destinada apenas a aniversariantes e convidados VIP, garantindo uma validação rápida e um atendimento exclusivo.'
            },
            {
                title: 'Alertas Inteligentes',
                description: 'A portaria é avisada em tempo real sobre clientes com pendências ou restrições.',
                subItems: [
                    { title: 'Comandas em Aberto', text: 'Identifica devedores automaticamente antes da entrada.' },
                    { title: 'Lista de Bloqueio', text: 'Impede acesso de clientes problemáticos.' },
                    { title: 'Avisos Automáticos', text: 'Alertas aparecem instantaneamente no sistema da recepção.' }
                ]
            }
        ]
    },
    {
        icon: <FaShoppingCart className="w-5 h-5" />,
        title: 'Gestão de Vendas',
        description: 'PDV e terminal ágil para operações de bar.',
        fullDescription: 'Controle cada centavo vendido, da comanda do garçom ao SmartPOS, com um sistema de PDV rápido e à prova de erros.',
        features: [
            'Terminal intuitivo para lançamento rápido',
            'Personalização de ingredientes e combos',
            'Ranking de vendas por garçom para comissões',
            'Visualização em tempo real do consumo'
        ],
        accordionItems: [
            {
                title: 'PDV Móvel e Fixo',
                description: 'Venda em qualquer lugar. Use terminais fixos no caixa ou móveis (como a maquininha SmartPOS ou Smartphone) para registrar pedidos na hora, direto da mesa ou da pista.',
                subItems: [
                    { title: 'Lançamento Rápido', text: 'Interface desenhada para agilidade. Encontre produtos, aplique descontos e feche vendas em segundos, reduzindo filas e aumentando a satisfação.' },
                    { title: 'Sincronia Total', text: 'Um pedido feito na maquininha aparece instantaneamente no caixa, na cozinha e nos relatórios. Sem perda de informação, sem desencontros.' }
                ]
            },
            {
                title: 'Venda Personalizada (Combos e Variações)',
                description: 'O sistema entende a complexidade do seu cardápio, permitindo que o garçom personalize o pedido na hora, garantindo o pedido e o estoque corretos.',
                subItems: [
                    { title: 'Troca de Itens (Combos)', text: 'Modifique um combo no momento do pedido, como trocar o sabor de um energético ou substituir um ingrediente, com o sistema ajustando o valor (se configurado).' },
                    { title: 'Divisão de Itens', text: 'Lance um item (ex: \'Combo de Gin\') e, no mesmo instante, divida o valor dele entre várias comandas, já deixando a conta de cada cliente correta.' }
                ]
            },
            {
                title: 'Ranking de Vendas e Garçons',
                description: 'Transforme dados em lucro. Saiba em tempo real quem está vendendo mais e quais produtos dão mais margem, incentivando sua equipe com comissões.',
                subItems: [
                    { title: 'Ranking de Vendedores', text: 'Veja em tempo real o desempenho de garçons e atendentes. Configure comissões por venda ou por produto e deixe o sistema calcular tudo automaticamente.' },
                    { title: 'Análise de Produtos', text: 'Saiba exatamente quais produtos dão mais lucro. Veja o custo, a margem e o total vendido de cada item, com filtros por hora, dia ou vendedor.' }
                ]
            },
            {
                title: 'Modos Pré-Pago e Pós-Pago',
                description: 'O Klokz se adapta perfeitamente ao seu modelo de negócio, seja com comandas de consumo livre (Pós-pago) ou com tickets e fichas (Pré-pago).',
                subItems: [
                    { title: 'Pós-Pago (Gestão de Comandas)', text: 'Ideal para casas noturnas. O cliente consome e os pedidos são lançados em sua comanda. O pagamento é feito no final, com um controle de saída \'anticalote\'.' },
                    { title: 'Pré-Pago (Operação na Maquininha)', text: 'Perfeito para bares e festivais. As funções essenciais rodam direto na maquininha SmartPOS, enquanto o gestor acompanha tudo em tempo real pela plataforma web.' }
                ]
            }
        ]
    },
    {
        icon: <FaCalculator className="w-5 h-5" />,
        title: 'Fechamento de Caixa',
        description: 'Fechamento eficiente com conciliação.',
        fullDescription: 'Feche seu caixa em minutos, não em horas. O sistema faz a conciliação automática de vendas, pagamentos e sangrias, com 100% de precisão.',
        features: [
            'Ranking de produtos vendidos com análise',
            'Relatórios detalhados de múltiplos caixas',
            'Fechamento eficiente com conciliação',
            'Controle de saída de clientes para evitar calotes'
        ],
        accordionItems: [
            {
                title: 'Conciliação Eficiente',
                description: 'O operador de caixa apenas informa os valores apurados (dinheiro, PIX, cartão), e o sistema compara com o que foi registrado, mostrando qualquer diferença.',
                subItems: [
                    { title: 'Múltiplos Caixas', text: 'Gerencie e feche múltiplos caixas (caixa principal, bar da pista, bar do camarote) de forma independente ou consolidada, sem confusão.' },
                    { title: 'Sangrias e Suprimentos', text: 'Registre todas as entradas (suprimentos) e saídas (sangrias) de dinheiro do caixa com segurança, exigindo autorização de gerente para maior controle.' }
                ]
            },
            {
                title: 'Controle de Saída de Clientes (Anticalote)',
                description: 'O módulo \'anticalote\' (integrado ao Modo Pós-Pago) garante que nenhum cliente saia do estabelecimento sem quitar 100% da sua comanda.',
                subItems: [
                    { title: 'Validação na Saída', text: 'O segurança na porta lê a comanda ou QR Code do cliente, e o sistema informa instantaneamente se o pagamento foi efetuado e se a saída está liberada.' },
                    { title: 'Alerta de Pendência', text: 'Se a comanda estiver em aberto, o sistema bloqueia a saída e direciona o cliente ao caixa, eliminando perdas por clientes que \'esquecem\' de pagar.' }
                ]
            },
            {
                title: 'Relatórios Detalhados de Fechamento',
                description: 'Tenha um \'placar final\' da sua noite em uma tela. Saiba exatamente o faturamento total, o lucro, o ticket médio e os métodos de pagamento.',
                subItems: [
                    { title: 'Ranking de Produtos Vendidos', text: 'No fechamento, veja quais produtos foram os mais vendidos e os que deram mais lucro, ajudando a planejar as compras do dia seguinte.' },
                    { title: 'Auditoria de Ações Críticas', text: 'O relatório identifica todas as ações (cancelamentos, cortesias), mostrando qual usuário autorizou, garantindo total transparência na operação.' }
                ]
            },
            {
                title: 'Flexibilidade Total no Pagamento',
                description: 'Não perca uma venda por limitações de pagamento. O sistema permite que o operador quite uma única conta de diversas formas.',
                subItems: [
                    { title: 'Divisão de Contas', text: 'Permita que um grupo de clientes divida o valor total da mesa ou comanda de forma simples, seja por valor igual ou por consumo individual.' },
                    { title: 'Múltiplos Métodos', text: 'O cliente pode quitar uma conta usando vários métodos (ex: parte no PIX, parte no Crédito) ou até mesmo vários cartões diferentes para o mesmo valor.' }
                ]
            }
        ]
    },
    {
        icon: <FaCube className="w-5 h-5" />,
        title: 'Controle de Estoque',
        description: 'Gestão completa de estoque com baixa automática.',
        fullDescription: 'Saiba exatamente o que você tem, o que você usou e o que você precisa comprar. Baixa automática de insumos a cada venda.',
        features: [
            'Suporte a múltiplas unidades de medida',
            'Gestão de compras e pedidos com alertas',
            'Auditoria de estoque com identificação de perdas',
            'Baixa automática integrada às vendas'
        ],
        accordionItems: [
            {
                title: 'Ficha Técnica e Baixa por Insumo',
                description: 'Ao vender um \'Gin Tônica\', o sistema dá baixa automática do Gin (em ml) e da Tônica (em unidade), com base na sua ficha técnica (receita).',
                subItems: [
                    { title: 'Baixa Mista (Combos)', text: 'Venda um \'Combo de Vodka\' e o sistema dará baixa de 1 garrafa de vodka e 5 energéticos (de sabores específicos) de uma só vez.' },
                    { title: 'Múltiplas Unidades de Medida', text: 'O sistema entende a complexidade da operação. Gerencie uma garrafa de vodka em \'ml\' (para doses) e \'unidade\' (para combos) no mesmo estoque.' }
                ]
            },
            {
                title: 'Gestão de Compras e Alertas',
                description: 'Nunca mais seja pego de surpresa. O Klokz avisa quando seu estoque está baixo e ajuda a criar pedidos de compra para seus fornecedores.',
                subItems: [
                    { title: 'Alertas de Estoque Mínimo', text: 'Defina uma quantidade mínima para cada produto. Quando o estoque atingir esse nível, o sistema alerta visualmente na tela de estoque (\'Narnia\').' },
                    { title: 'Pedido de Compra', text: 'Gere pedidos de compra com base no que precisa ser reposto e atualize o estoque automaticamente quando a mercadoria chegar (entrada de nota).' }
                ]
            },
            {
                title: 'Auditoria de Estoque e Inventário',
                description: 'Encontre \'furos\' e perdas na sua operação. O Klokz permite fazer contagens de inventário e compara o estoque físico com o estoque do sistema.',
                subItems: [
                    { title: 'Identificação de Perdas', text: 'O relatório de auditoria mostra exatamente onde está a diferença, ajudando a identificar desperdício, consumo interno não registrado ou furtos.' },
                    { title: 'Rastreabilidade Total', text: 'Veja o histórico completo de um item (compra, venda, transferência, perda) para entender todo o fluxo do produto e identificar falhas no processo.' }
                ]
            },
            {
                title: 'Gerenciamento de Múltiplos Estoques',
                description: 'Controle estoques separados para diferentes áreas do seu estabelecimento (ex: Bar Principal, Bar Camarote, Almoxarifado) de forma centralizada.',
                subItems: [
                    { title: 'Transferência entre Estoques', text: 'Registre facilmente a transferência de produtos (ex: uma caixa de cerveja do almoxarifado para o bar da pista) e mantenha o controle preciso de cada local.' },
                    { title: 'Custo Médio', text: 'O sistema calcula o custo médio do seu produto com base nas notas de compra, garantindo que sua margem de lucro nos relatórios seja 100% correta.' }
                ]
            }
        ]
    },
    {
        icon: <FaDollarSign className="w-5 h-5" />,
        title: 'Gestão Financeira',
        description: 'Fluxo de caixa e planejamento financeiro.',
        fullDescription: 'O \'back-office\' completo do seu negócio. Saiba exatamente para onde vai seu dinheiro, o que você tem a pagar e o que precisa receber.',
        features: [
            'Fluxo de caixa com visibilidade completa',
            'Controle de múltiplas contas bancárias',
            'Projeção financeira para planejamento',
            'Relatórios gerenciais para decisões'
        ],
        accordionItems: [
            {
                title: 'Fluxo de Caixa (Visibilidade Total)',
                description: 'Tenha clareza total sobre sua saúde financeira. O Klokz centraliza todas as entradas (vendas, aportes) e saídas (compras, pagamentos) em um único lugar.',
                subItems: [
                    { title: 'Visão Diária e Futura', text: 'Veja o saldo do dia e projete o fluxo de caixa para as próximas semanas, com base nas suas contas a pagar e receber recorrentes.' },
                    { title: 'Projeção Financeira', text: 'Planeje seus investimentos. Saiba quanto você terá em caixa no futuro para tomar decisões estratégicas sobre compras ou expansões.' }
                ]
            },
            {
                title: 'Contas a Pagar e Receber',
                description: 'Nunca mais pague juros por esquecimento. O sistema gerencia seus boletos, aluguéis, salários e também o que você tem a receber de clientes ou parceiros.',
                subItems: [
                    { title: 'Alertas de Vencimento', text: 'O sistema avisa sobre contas que estão vencendo, permitindo que você se organize e evite multas, mantendo o financeiro em dia.' },
                    { title: 'Conciliação Bancária', text: 'Importe seu extrato bancário e concilie as transações do banco com os lançamentos do sistema, garantindo que nada se perca.' }
                ]
            },
            {
                title: 'Múltiplas Contas e Centro de Custo',
                description: 'Gerencie o financeiro de forma profissional, mesmo que você tenha várias contas bancárias ou diferentes unidades de negócio (centros de custo).',
                subItems: [
                    { title: 'Controle de Contas', text: 'Cadastre todas as suas contas (Conta Corrente A, Conta PIX B, \'Caixinha\' de dinheiro) e saiba exatamente o saldo de cada uma.' },
                    { title: 'Centro de Custo', text: 'Separe suas despesas por categoria (ex: Marketing, Staff, Compras de Bar) para saber exatamente onde você está gastando mais e onde pode economizar.' }
                ]
            },
            {
                title: 'Relatórios Gerenciais (DRE)',
                description: 'Relatórios que vão além do óbvio. Tenha uma DRE (Demonstração do Resultado do Exercício) simplificada para tomar decisões baseadas em lucro.',
                subItems: [
                    { title: 'Análise de Rentabilidade', text: 'Saiba o seu lucro líquido real. O sistema confronta seu faturamento total com seus custos (produtos, impostos, despesas fixas) e mostra o resultado final.' },
                    { title: 'Decisões Inteligentes', text: 'Com relatórios claros de faturamento vs. custos, você pode tomar decisões estratégicas, como ajustar preços, cortar despesas ou investir em áreas mais lucrativas.' }
                ]
            }
        ]
    }
];

export function IntegratedSolutions() {
    const [selectedSolution, setSelectedSolution] = useState<typeof solutions[0] | null>(null);

    return (
        <Section id="solucoes" className="bg-black">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Uma operação.<br className="block md:hidden" /> Um <span className="efeito-piscante-roxo" data-text="sistema.">sistema.</span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                        Da portaria ao financeiro — tudo integrado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="group p-[28px] rounded-[16px] bg-[#0A0A0C] border border-white/5 hover:border-[#10A7F1] hover:shadow-[0_0_15px_rgba(16,167,241,0.15)] transition-all duration-300 cursor-pointer flex flex-col h-full hover:scale-[1.02] relative overflow-hidden"
                            onClick={() => setSelectedSolution(solution)}
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.035)_0%,_transparent_65%)] pointer-events-none" />
                            
                            <div className="relative z-10 w-[42px] h-[42px] rounded-[10px] bg-[#10A7F1] flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform duration-300 shadow-inner">
                                {solution.icon}
                            </div>
                            <h3 className="relative z-10 text-[1.25rem] font-bold text-[#10A7F1] mb-5">{solution.title}</h3>
                            
                            <ul className="relative z-10 space-y-[14px] flex-1 mb-6">
                                {solution.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <FaCheck className="text-[#10A7F1] text-[12px] mt-[6px] shrink-0" />
                                        <span className="text-[#DCDCDC] text-[14px] leading-relaxed font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="relative z-10 mt-auto">
                                <span className="text-[#10A7F1] font-bold text-[14px] flex items-center gap-2 group-hover:brightness-110 transition-all">
                                    Explorar módulo <span className="text-sm font-normal">&gt;</span>
                                </span>
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
                    accordionItems={selectedSolution?.accordionItems}
                />
            </Container>
        </Section>
    );
}
