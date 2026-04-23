"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useCta } from '@/components/providers/cta-provider';

export function Footer() {
    const { link: ctaLink } = useCta();
    return (
        <footer className="bg-black pt-16 pb-8 border-t border-[#10A7F1]/30">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 px-4 md:px-0">
                    
                    {/* Column 1: Brand & Social */}
                    <div className="flex flex-col gap-5">
                        <div className="relative w-20 h-20 mb-2">
                            <Image
                                src="/images/logoklokz.png"
                                alt="Klokz Logo"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-white text-[15px] font-medium leading-relaxed max-w-[280px]">
                            Soluções Inteligentes para Bares, Baladas e Eventos
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a href="https://www.instagram.com/klokz.erp/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" aria-label="Instagram">
                                <FaInstagram size={22} className="stroke-1" />
                            </a>
                            <a href="https://www.linkedin.com/company/klokz" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" aria-label="LinkedIn">
                                <FaLinkedin size={22} className="stroke-1" />
                            </a>
                            <a                 href="https://wa.me/5541999988288?text=Ol%C3%A1!%20Vi%20o%20site%20e%20estou%20buscando%20um%20sistema%20de%20gest%C3%A3o%20para%20bares%20e%20eventos.%20Gostaria%20de%20saber%20mais%20sobre%20o%20Klokz." target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" aria-label="WhatsApp">
                                <FaWhatsapp size={22} className="stroke-1" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Links Rápidos */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-white text-[16px] mb-2">Links Rápidos</h3>
                        <ul className="space-y-4">
                            <li><Link href="#solucoes" className="text-[#DCDCDC] hover:text-white transition-colors text-[14px] font-medium">Soluções</Link></li>
                            <li><Link href="#diferenciais" className="text-[#DCDCDC] hover:text-white transition-colors text-[14px] font-medium">Diferenciais</Link></li>
                            <li><Link href="#depoimentos" className="text-[#DCDCDC] hover:text-white transition-colors text-[14px] font-medium">Depoimentos</Link></li>
                            <li><Link href={ctaLink} className="text-[#DCDCDC] hover:text-white transition-colors text-[14px] font-medium">Contato</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contato */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-white text-[16px] mb-2">Contato</h3>
                        <div className="flex flex-col gap-4">
                            <a                 href="https://wa.me/5541999988288?text=Ol%C3%A1!%20Vi%20o%20site%20e%20estou%20buscando%20um%20sistema%20de%20gest%C3%A3o%20para%20bares%20e%20eventos.%20Gostaria%20de%20saber%20mais%20sobre%20o%20Klokz." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#DCDCDC] hover:text-white transition-colors text-[14px] font-medium">
                                <FaWhatsapp size={18} />
                                <span>(41) 99998-8288</span>
                            </a>
                            <a href="mailto:admin@klokz.com.br" className="flex items-center gap-3 text-[#DCDCDC] hover:text-white transition-colors text-[14px] font-medium">
                                <FaEnvelope size={18} />
                                <span>admin@klokz.com.br</span>
                            </a>
                        </div>
                        {/* Partner Logos */}
                        <div className="mt-4 flex items-center gap-4">
                            <div className="relative w-[112px] h-[45px] md:w-[140px] md:h-14">
                                <Image
                                    src="/images/stonepartner.png"
                                    alt="Stone Official Partner"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-contain object-left"
                                />
                            </div>
                            <div className="relative w-[112px] h-[45px] md:w-[140px] md:h-14">
                                <Image
                                    src="/images/logogetnet.png"
                                    alt="Getnet"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div id="footer-copyright" className="pt-8 border-t border-white/10 flex justify-center items-center">
                    <p className="text-[#DCDCDC] text-[13px] text-center w-full font-medium">
                        © {new Date().getFullYear()} KLOKZ SISTEMAS LTDA. Todos os direitos reservados.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
