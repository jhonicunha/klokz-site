import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-background border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white tracking-tighter">Klokz</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Soluções Inteligentes para Bares, Baladas e Eventos. Simplifique sua gestão e maximize seus lucros.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all text-lg">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all text-lg">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Navegação</h3>
                        <ul className="space-y-4">
                            <li><Link href="#solutions" className="text-gray-400 hover:text-primary transition-colors">Soluções</Link></li>
                            <li><Link href="#diferenciais" className="text-gray-400 hover:text-primary transition-colors">Diferenciais</Link></li>
                            <li><Link href="#testimonials" className="text-gray-400 hover:text-primary transition-colors">Depoimentos</Link></li>
                            <li><Link href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contato</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Contato</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <span>(41) 99998-8288</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <span>admin@klockz.com.br</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 KLOKZ SISTEMAS LTDA. Todos os direitos reservados.
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        Feito com inteligência por <a href="https://pushtecnologia.com.br" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">pushtecnologia.com.br</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
