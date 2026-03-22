
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
    { name: 'Soluções', href: '#solutions' },
    { name: 'Diferenciais', href: '#features' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
                }`}
        >
            <Container>
                <div className="flex items-center justify-between h-[80px]">
                    {/* Logo K */}
                    <Link href="/" className="flex items-center">
                        <div className="relative w-28 h-8">
                            <Image
                                src="/images/logoklokz.png"
                                alt="Klokz Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation - Centered */}
                    <nav className="hidden md:flex items-center gap-[40px] absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[14px] font-bold tracking-wide text-[#E4E4E7] hover:text-[#00B4D8] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center text-[11px] font-bold text-white uppercase tracking-wider px-[22px] py-[10px] rounded-[6px] transition-all duration-200 hover:brightness-110"
                                style={{
                                    background: 'linear-gradient(90deg, #00B4D8 0%, #8B5CF6 100%)',
                                }}
                            >
                                TESTE GRÁTIS
                            </Link>
                        </div>

                        <button
                            className="md:hidden text-white hover:text-[#00B4D8] p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0D0D0D] border-b border-white/10">
                    <Container className="py-6 space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block text-lg font-bold text-white hover:text-[#00B4D8]"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Link
                                href="#"
                                className="flex justify-center w-full text-[12px] font-bold text-white uppercase tracking-wider px-6 py-4 rounded-[6px]"
                                style={{
                                    background: 'linear-gradient(90deg, #00B4D8 0%, #8B5CF6 100%)',
                                }}
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
