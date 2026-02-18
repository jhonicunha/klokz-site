
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
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
    {
        name: 'Ana P.',
        role: 'Proprietária Bar do Zé',
        image: '/images/testimonial-1.webp',
        content: 'Simples, intuitivo e completo. O cardápio digital aumentou nosso ticket médio em 20% logo no primeiro mês de uso.'
    }
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) >= testimonials.length ? 0 : prev + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1) < 0 ? testimonials.length - 1 : prev - 1);
    };

    // Logic to show 3 cards (desktop) or 1 (mobile)
    // For simplicity in this iteration, we slide one by one but show a window of 3

    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(testimonials[(currentIndex + i) % testimonials.length]);
        }
        return visible;
    };

    return (
        <Section className="bg-[#0f0f11] py-20 overflow-hidden">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
                        O que nossos <span className="text-primary">clientes dizem</span>
                    </h2>
                    <p className="text-gray-400">
                        Junte-se a mais de 1000 casas noturnas que confiam no Klokz.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors disabled:opacity-50"
                    >
                        <FaChevronLeft />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors disabled:opacity-50"
                    >
                        <FaChevronRight />
                    </button>

                    {/* Slider Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden px-12">
                        {getVisibleTestimonials().map((testimonial, index) => (
                            <motion.div
                                key={`${testimonial.name}-${index}`}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="bg-[#18181b] border border-white/5 rounded-2xl p-8 flex flex-col h-full relative"
                            >
                                <FaQuoteLeft className="text-primary/20 text-4xl absolute top-6 left-6" />
                                <p className="text-gray-300 italic mb-8 mt-8 leading-relaxed z-10 relative">
                                    "{testimonial.content}"
                                </p>
                                <div className="mt-auto flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                                        <p className="text-primary text-xs uppercase tracking-wider">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Pagination Indicators */}
                    <div className="flex justify-center mt-8 gap-2">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-primary w-6' : 'bg-white/20'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
