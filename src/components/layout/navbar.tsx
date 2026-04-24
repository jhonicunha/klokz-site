
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { HiMenu, HiX, HiArrowLeft } from 'react-icons/hi';
import { useCta } from '@/components/providers/cta-provider';

const navLinks = [
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
];

interface NavbarProps {
    backOnly?: boolean;
}

export function Navbar({ backOnly }: NavbarProps = {}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { link: ctaLink, isWhatsapp } = useCta();

    const resolvedNavLinks = navLinks.map(link => 
        link.href === '#contato' ? { ...link, href: ctaLink } : link
    );

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Glass Background layer */}
            <div 
                className={`absolute inset-0 backdrop-blur-md transition-all duration-300 transform-gpu ${
                    isScrolled ? 'bg-[#0D0D0D]/90' : 'bg-transparent opacity-0 pointer-events-none'
                }`}
            />
            
            {/* Separate Bottom Border Line to avoid Safari rendering glitches */}
            <div 
                className={`absolute bottom-0 left-0 right-0 h-[1px] transition-all duration-300 transform-gpu ${
                    isScrolled ? 'bg-white/5' : 'bg-transparent opacity-0 pointer-events-none'
                }`}
            />
            
            {/* Content layer */}
            <div className="relative z-10">
                <Container>
                    <div className="flex items-center justify-between h-[80px]">
                        {/* Logo K */}
                        <Link href="/" className="flex items-center">
                            <div className="relative w-[202px] h-[58px]">
                                <Image
                                    src="/images/logoklokz.png"
                                    alt="Klokz Logo"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation - Centered */}
                        <nav className="hidden md:flex items-center gap-[40px] absolute left-1/2 -translate-x-1/2">
                            {backOnly ? (
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 text-[14px] font-bold tracking-wide text-[#E4E4E7] hover:text-[#10A7F1] transition-colors group"
                                >
                                    <HiArrowLeft size={18} />
                                    Voltar para o Início
                                    <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full bg-gradient-to-r from-[#10A7F1] to-[#882FE3]" />
                                </Link>
                            ) : (
                                resolvedNavLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="relative text-[14px] font-bold tracking-wide text-[#E4E4E7] hover:text-[#10A7F1] transition-colors group"
                                    >
                                        {link.name}
                                        <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full bg-gradient-to-r from-[#10A7F1] to-[#882FE3]" />
                                    </Link>
                                ))
                            )}
                        </nav>

                        {/* CTA & Mobile Toggle */}
                        <div className="flex items-center gap-4">
                            <div className="hidden md:block">
                                <Link
                                    href={ctaLink}
                                    className="inline-flex items-center justify-center text-[11px] font-bold text-white uppercase tracking-wider px-[22px] py-[10px] rounded-[6px] transition-all duration-200 hover:brightness-110 shadow-lg hover:shadow-xl"
                                    style={{
                                        background: 'linear-gradient(90deg, #10A7F1 0%, #882FE3 100%)',
                                    }}
                                >
                                    TESTE GRÁTIS
                                </Link>
                            </div>

                            <button
                                className="md:hidden text-white hover:text-[#10A7F1] p-2"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Mobile Menu - Full screen glass overlay */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-[#0D0D0D]/70 backdrop-blur-2xl z-[60] animate-fade-in">
                    {/* Header inside overlay */}
                    <Container>
                        <div className="flex items-center justify-between h-[80px]">
                            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                                <div className="relative w-[202px] h-[58px]">
                                    <Image
                                        src="/images/logoklokz.png"
                                        alt="Klokz Logo"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-contain object-left"
                                    />
                                </div>
                            </Link>
                            <button
                                className="text-white hover:text-[#10A7F1] p-2"
                                onClick={() => setIsOpen(false)}
                                aria-label="Fechar menu"
                            >
                                <HiX size={28} />
                            </button>
                        </div>
                    </Container>

                    {/* Menu items */}
                    <Container className="pt-2">
                        {/* Top Separator Line */}
                        <div className="h-[1px] bg-white/10 mb-2" />
                        
                        {backOnly ? (
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-[16px] font-normal text-white hover:text-[#10A7F1] transition-colors py-3"
                                onClick={() => setIsOpen(false)}
                            >
                                <HiArrowLeft size={18} />
                                Voltar para o Início
                            </Link>
                        ) : (
                            resolvedNavLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-[16px] font-normal text-white hover:text-[#10A7F1] transition-colors py-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))
                        )}

                        {/* Bottom Separator Line */}
                        <div className="h-[1px] bg-white/10 mt-2 mb-6" />

                        <div className="pb-2">
                            <Link
                                href={ctaLink}
                                className="flex justify-center w-full text-[14px] font-bold text-white uppercase tracking-wider px-6 py-3 rounded-[8px] shadow-lg hover:shadow-xl"
                                style={{
                                    background: 'linear-gradient(90deg, #10A7F1 0%, #882FE3 100%)',
                                }}
                                onClick={() => setIsOpen(false)}
                            >
                                TESTE GRÁTIS
                            </Link>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}
