
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { FaChevronDown } from 'react-icons/fa';

const tipoOptions = [
    { value: 'bar', label: 'Bar' },
    { value: 'balada', label: 'Balada' },
    { value: 'evento', label: 'Evento' },
];

export function CtaBanner() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedTipo, setSelectedTipo] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <Section id="contato" className="bg-black py-20 md:py-32">
            <Container>
                {/* Header Sequence */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-[52px] font-extrabold text-white mb-6 uppercase leading-[1.1] tracking-tight flex flex-col items-center">
                        <span>30 dias grátis +</span>
                        <div className="mt-1 flex flex-col items-center">
                            <span className="efeito-piscante-roxo" data-text="implementação custo">implementação custo</span>
                            <span className="efeito-piscante-roxo" data-text="zero">zero</span>
                        </div>
                    </h2>
                    <p className="text-[#DCDCDC] text-[15px] sm:text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
                        Preencha o formulário que um de nossos especialistas entrará em contato para ativar sua operação 100% grátis na prática.
                    </p>
                </div>

                {/* Form Container */}
                <div className="max-w-2xl mx-auto w-full">
                    <div className="bg-[#111114] rounded-[24px] p-6 sm:p-8 md:p-10 border border-white/5 shadow-2xl">
                        <form className="flex flex-col gap-3">
                            {/* Nome */}
                            <input
                                type="text"
                                placeholder="Nome"
                                className="w-full h-10 sm:h-11 bg-[#0a0a0c] border border-white/5 rounded-[10px] px-5 text-[14px] text-white placeholder-white/60 focus:outline-none focus:border-[#10A7F1]/50 transition-colors"
                            />

                            {/* WhatsApp */}
                            <input
                                type="tel"
                                placeholder="WhatsApp"
                                className="w-full h-10 sm:h-11 bg-[#0a0a0c] border border-white/5 rounded-[10px] px-5 text-[14px] text-white placeholder-white/60 focus:outline-none focus:border-[#10A7F1]/50 transition-colors"
                            />

                            {/* Estabelecimento */}
                            <input
                                type="text"
                                placeholder="Nome do Estabelecimento"
                                className="w-full h-10 sm:h-11 bg-[#0a0a0c] border border-white/5 rounded-[10px] px-5 text-[14px] text-white placeholder-white/60 focus:outline-none focus:border-[#10A7F1]/50 transition-colors"
                            />

                            {/* Custom Dropdown */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    type="button"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className={`w-full h-10 sm:h-11 bg-[#0a0a0c] border rounded-[10px] px-5 pr-10 text-[14px] text-left focus:outline-none transition-colors cursor-pointer ${
                                        dropdownOpen ? 'border-[#10A7F1]/50' : 'border-white/5'
                                    } ${selectedTipo ? 'text-white' : 'text-white/60'}`}
                                >
                                    {selectedTipo ? tipoOptions.find(o => o.value === selectedTipo)?.label : 'Tipo'}
                                </button>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/60">
                                    <FaChevronDown size={12} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                                </div>

                                {/* Dropdown Menu */}
                                {dropdownOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-1 bg-[#111114] border border-white/10 rounded-[10px] overflow-hidden z-50 shadow-xl animate-fade-in">
                                        {tipoOptions.map((option) => (
                                            <button
                                                key={option.value}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedTipo(option.value);
                                                    setDropdownOpen(false);
                                                }}
                                                className={`w-full text-left px-5 py-2.5 text-[14px] transition-colors cursor-pointer ${
                                                    selectedTipo === option.value
                                                        ? 'bg-[#10A7F1] text-white'
                                                        : 'text-white hover:bg-[#10A7F1] hover:text-white'
                                                }`}
                                            >
                                                {option.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <Button 
                                type="button" 
                                className="w-full h-10 sm:h-11 mt-2 bg-brand-gradient hover:opacity-90 transition-opacity text-white font-extrabold text-[14px] uppercase tracking-wide rounded-[10px] border-0"
                            >
                                Quero Testar 30 Dias
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
