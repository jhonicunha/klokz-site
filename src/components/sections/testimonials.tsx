
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        initials: 'HM',
        name: 'Hugo Marin',
        role: 'Espaço LLum',
        content: 'O Klokz transformou completamente a nossa forma de operar eventos. Conseguimos acompanhar o consumo e o faturamento ao vivo, direto do celular, e isso muda tudo na tomada de decisão. Além disso, o sistema pré e pós-pago nos deu liberdade para personalizar a experiência de cada cliente — é tecnologia que entende a vida noturna.'
    },
    {
        initials: 'AW',
        name: 'Aline Wandziuk',
        role: 'Bergamotta Bar',
        content: 'Antes do Klokz, a gente se virava com planilhas e mensagens soltas. Hoje tudo está conectado: reservas, comandas e caixa em tempo real. O sistema é rápido, intuitivo e o suporte realmente faz diferença — é como ter uma equipe de tecnologia dentro do bar. A operação ficou leve e finalmente temos controle total do que entra e sai.'
    }
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const nextSlide = useCallback(() => {
        if (currentIndex === testimonials.length) return; // Prevent clicking while jumping
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    }, [currentIndex]);

    const prevSlide = () => {
        if (currentIndex === 0) {
            setIsTransitioning(false);
            setCurrentIndex(testimonials.length);
            // Wait for DOM to update without transition, then slide
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsTransitioning(true);
                    setCurrentIndex(testimonials.length - 1);
                });
            });
        } else {
            setIsTransitioning(true);
            setCurrentIndex((prev) => prev - 1);
        }
    };

    // Auto-slide loop
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 8000); // 8 seconds auto-slide
        return () => clearInterval(timer);
    }, [nextSlide]);

    // Handle jump back to real first slide seamlessly
    useEffect(() => {
        if (currentIndex === testimonials.length) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 700); // Matches the 700ms transition-duration
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    // Re-enable transition after jump
    useEffect(() => {
        if (!isTransitioning && currentIndex === 0) {
            const raf = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsTransitioning(true);
                });
            });
            return () => cancelAnimationFrame(raf);
        }
    }, [isTransitioning, currentIndex]);

    // Duplicate the first testimonial to the end for the seamless loop
    const extendedTestimonials = [...testimonials, testimonials[0]];

    return (
        <Section id="depoimentos" className="bg-black">
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-[44px] font-extrabold text-white mb-5 uppercase leading-tight tracking-tight">
                        O Que Nossos <span className="efeito-piscante-roxo" data-text="Clientes Dizem">Clientes Dizem</span>
                    </h2>
                    <p className="text-[#DCDCDC] text-[15px] md:text-[16px]">
                        Junte-se a mais de 500 estabelecimentos que já transformaram seus negócios
                    </p>
                </div>

                {/* Carousel Wrapper */}
                <div className="relative max-w-5xl mx-auto px-0 md:px-14">
                    {/* The overflowing window where cards slide */}
                    <div className="overflow-hidden p-2 -m-2">
                        {/* The sliding track */}
                        <div 
                            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {extendedTestimonials.map((testimonial, idx) => (
                                <div key={idx} className="w-full flex-shrink-0 px-2 sm:px-4">
                                    {/* Gradient Border Card */}
                                    <div className="rounded-[16px] p-[1px] bg-gradient-to-r from-[#10A7F1] to-[#882FE3] h-full">
                                        {/* Inner Dark Card */}
                                        <div className="bg-[#111114] rounded-[15px] p-8 md:p-12 relative flex flex-col h-full min-h-[280px]">
                                            {/* Quote Icon with Animated Glowing Gradient */}
                                            <div className="relative mb-6 w-max flex-shrink-0">
                                                {/* Base Cyan Icon */}
                                                <FaQuoteLeft className="text-[#10A7F1] text-4xl sm:text-5xl" />
                                                
                                                {/* SVG Gradient Definition */}
                                                <svg width="0" height="0" className="absolute pointer-events-none">
                                                    <linearGradient id={`quoteGlow-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="rgba(136, 47, 227, 0)" />
                                                        <stop offset="60%" stopColor="rgba(136, 47, 227, 0.85)" />
                                                        <stop offset="100%" stopColor="rgba(136, 47, 227, 1)" />
                                                    </linearGradient>
                                                </svg>
                                                
                                                {/* Animated Purple Overlay */}
                                                <div className="absolute inset-0 pointer-events-none" style={{ animation: 'blink-purple 6s ease-in-out infinite' }}>
                                                    <FaQuoteLeft className="text-4xl sm:text-5xl" style={{ fill: `url(#quoteGlow-${idx})` }} />
                                                </div>
                                            </div>

                                            {/* Testimonial Text */}
                                            <p className="text-[#DCDCDC] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed italic mb-10 flex-grow pr-4">
                                                "{testimonial.content}"
                                            </p>

                                            {/* Author Info */}
                                            <div className="flex items-center gap-4 mt-auto">
                                                <div className="flex flex-col">
                                                    <h4 className="text-white font-bold text-[16px] leading-tight mb-1">{testimonial.name}</h4>
                                                    <p className="text-[#DCDCDC] text-[13px] leading-tight">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#10A7F1] text-white items-center justify-center hover:scale-110 hover:bg-[#008DD1] transition-all shadow-lg z-10 focus:outline-none"
                        aria-label="Previous testimonial"
                    >
                        <FaChevronLeft size={16} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#10A7F1] text-white items-center justify-center hover:scale-110 hover:bg-[#008DD1] transition-all shadow-lg z-10 focus:outline-none"
                        aria-label="Next testimonial"
                    >
                        <FaChevronRight size={16} />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, idx) => {
                            const isActive = currentIndex === idx || (currentIndex === testimonials.length && idx === 0);
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setIsTransitioning(true);
                                        setCurrentIndex(idx);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${isActive ? 'bg-[#404040] w-6' : 'bg-[#202020] hover:bg-[#303030] w-2'
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            );
                        })}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
