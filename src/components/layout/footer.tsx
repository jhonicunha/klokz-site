
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="bg-black py-12 md:py-16 border-t border-white/10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="relative w-32 h-10">
                            <Image
                                src="/images/logo.png"
                                alt="Klokz Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-400 text-sm">
                            Sistema completo de gestão para bares, casas noturnas e eventos.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaInstagram size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedin size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaWhatsapp size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Produto</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Funcionalidades</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Para Bares</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Para Baladas</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Para Produtores</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Empresa</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Sobre nós</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Carreiras</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Contato</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Suporte</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Central de Ajuda</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Termos de Uso</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Política de Privacidade</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Klokz Sistemas LTDA. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-4 text-sm text-gray-500">
                        <span>Feito com ❤️ no Brasil</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
