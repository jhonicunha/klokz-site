
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
    { name: 'Soluções', href: '#solutions' },
    { name: 'Diferenciais', href: '#features' }, // Mapped to features if integrated solutions is #solutions
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent border-transparent'
                } py-2`}
        >
            <Container>
                <div className="flex items-center justify-between h-14 md:h-16 transition-all duration-300">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 w-32">
                        <div className="relative w-8 h-8">
                            <span className="text-3xl font-black text-[#2563EB]">K</span>
                            {/* Using text logo to match screenshot 'K' momentarily or use image if preferred */}
                        </div>
                    </Link>

                    {/* Desktop Navigation - Centered */}
                    <nav className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4 w-auto justify-end">
                        <div className="hidden md:block">
                            <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-sm h-10 px-6 uppercase whitespace-nowrap">
                                Teste Grátis
                            </Button>
                        </div>

                        <button
                            className="md:hidden text-gray-300 hover:text-white p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0D0D0D] border-b border-white/10">
                    <Container className="py-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block text-base font-bold text-gray-300 hover:text-white uppercase"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Button className="w-full bg-[#0BB6FF] font-bold uppercase">Teste Grátis</Button>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}
