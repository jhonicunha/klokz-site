import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
            {/* Background gradient/blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
                        O QUE NOSSOS CLIENTES DIZEM
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto">
                        Junte-se a mais de 500 estabelecimentos que já transformaram seus negócios
                    </h3>
                </div>

                <div className="bg-card-bg border border-white/5 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto relative shadow-2xl">
                    <FaQuoteLeft className="absolute top-8 left-8 text-4xl text-primary/20" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <p className="text-xl md:text-2xl text-gray-200 italic leading-relaxed mb-8">
                            "A Klokz é mais que um sistema, é uma parceira estratégica. Com ela, acabaram os erros de caixa e as confusões na portaria. As listas, reservas e vendas online ficaram automáticas e integradas - economizamos tempo e aumentamos as vendas em mais de 30%. Hoje não imagino operar sem a plataforma."
                        </p>

                        <div className="bg-white/5 px-6 py-2 rounded-full border border-white/10">
                            <span className="text-primary font-bold">Eduardo Oliveira</span>
                            <span className="text-gray-500 mx-2">|</span>
                            <span className="text-gray-400">The Pub</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
