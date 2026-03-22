
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Gabriel F.',
        role: 'Sócio-proprietário Garden Pub',
        image: '/images/testimonial-1.webp',
        content: 'O sistema transformou nossa governança. Antes perdíamos muito tempo com fechamento de caixa e controle de estoque manual. Hoje temos tudo na palma da mão em tempo real.'
    },
    {
        name: 'Mariana S.',
        role: 'Gerente Geral Club Vibe',
        image: '/images/testimonial-2.webp',
        content: 'A integração com as listas de promoters facilitou demais nossa portaria. As filas diminuíram drasticamente e o controle de comissionamento ficou transparente.'
    },
    {
        name: 'Carlos E.',
        role: 'Produtor de Eventos',
        image: '/images/testimonial-3.webp',
        content: 'Já usei diversos sistemas, mas o Klokz é o único que realmente entende a dinâmica de uma balada. O suporte é incrível e as funcionalidades são pensadas para o nosso dia a dia.'
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) >= testimonials.length ? 0 : prev + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1) < 0 ? testimonials.length - 1 : prev - 1);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <Section id="testimonials" className="bg-[#0D0D0D] py-20">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">
                        O que nossos <span className="text-primary">clientes dizem</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        Conheça os relatos de quem já revolucionou a gestão do seu estabelecimento com o Klokz.
                    </p>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Featured Testimonial Card */}
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600/20 via-blue-700/10 to-transparent border border-blue-500/20 p-8 md:p-12">
                        {/* Quote icon */}
                        <FaQuoteLeft className="text-blue-500/20 text-5xl absolute top-6 left-6" />

                        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 relative z-10 italic">
                            &ldquo;{currentTestimonial.content}&rdquo;
                        </p>

                        <div className="flex items-center gap-4 relative z-10">
                            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/50 shrink-0">
                                <Image
                                    src={currentTestimonial.image}
                                    alt={currentTestimonial.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-base">{currentTestimonial.name}</h4>
                                <p className="text-primary text-xs uppercase tracking-wider">{currentTestimonial.role}</p>
                            </div>
                        </div>

                        {/* Ambient blue glow */}
                        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-600/10 rounded-full blur-[80px]" />
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                        >
                            <FaChevronLeft size={14} />
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary w-6' : 'bg-white/20 hover:bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                        >
                            <FaChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
