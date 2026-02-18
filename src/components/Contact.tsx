import React from "react";

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        30 DIAS GRÁTIS + IMPLEMENTAÇÃO CUSTO ZERO
                    </h2>
                    <p className="text-lg text-gray-400">
                        Preencha o formulário que um de nossos especialistas entrará em contato para ativar sua operação 100% grátis na prática.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto bg-card-bg border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="seu@email.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Telefone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="(00) 00000-0000"
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Nome do Estabelecimento</label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Nome do seu negócio"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="employees" className="block text-sm font-medium text-gray-400 mb-2">Número de colaboradores</label>
                                <select
                                    id="employees"
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Selecione...</option>
                                    <option value="1-5">1-5</option>
                                    <option value="6-10">6-10</option>
                                    <option value="11-50">11-50</option>
                                    <option value="50+">50+</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="revenue" className="block text-sm font-medium text-gray-400 mb-2">Faturamento por evento</label>
                                <select
                                    id="revenue"
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Selecione...</option>
                                    <option value="ate-10k">Até R$ 10k</option>
                                    <option value="10k-50k">R$ 10k - R$ 50k</option>
                                    <option value="50k-100k">R$ 50k - R$ 100k</option>
                                    <option value="100k+">Acima de R$ 100k</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                placeholder="Conte um pouco sobre sua operação..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transform transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-primary/25"
                        >
                            ENVIAR MENSAGEM
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
