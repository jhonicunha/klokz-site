
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="bg-[#080808] py-12 md:py-16 border-t border-white/5">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="relative w-28 h-10">
                            <Image
                                src="/images/logoklokz.png"
                                alt="Klokz Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Sistema completo de gestão para bares, casas noturnas e eventos.
                        </p>
                        <div className="flex gap-3">
                            <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                                <FaInstagram size={18} />
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                                <FaLinkedin size={18} />
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                                <FaWhatsapp size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Produto</h3>
                        <ul className="space-y-2">
                            <li><Link href="#solutions" className="text-gray-500 hover:text-primary transition-colors text-sm">Funcionalidades</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Para Bares</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Para Baladas</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Para Produtores</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Empresa</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Sobre nós</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Blog</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Carreiras</Link></li>
                            <li><Link href="#contact" className="text-gray-500 hover:text-primary transition-colors text-sm">Contato</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Suporte</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Central de Ajuda</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Termos de Uso</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Política de Privacidade</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs">
                        © {new Date().getFullYear()} Klokz Sistemas LTDA. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-4 text-xs text-gray-600">
                        <span>Feito com ❤️ no Brasil</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
