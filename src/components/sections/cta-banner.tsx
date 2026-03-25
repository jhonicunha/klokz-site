
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
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        establishment: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        if (name === 'whatsapp') {
            // Remove tudo que não é dígito
            const numbers = value.replace(/\D/g, '').substring(0, 11);
            
            // Aplica a máscara (XX) XXXXX-XXXX
            let masked = numbers;
            if (numbers.length > 2) {
                masked = `(${numbers.substring(0, 2)}) ${numbers.substring(2)}`;
            }
            if (numbers.length > 7) {
                masked = `(${numbers.substring(0, 2)}) ${numbers.substring(2, 7)}-${numbers.substring(7)}`;
            }
            
            setFormData(prev => ({ ...prev, [name]: masked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.name || !formData.whatsapp || !formData.establishment || !selectedTipo) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    whatsapp: formData.whatsapp,
                    establishment: formData.establishment,
                    type: selectedTipo,
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', whatsapp: '', establishment: '' });
                setSelectedTipo('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

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
                        {status === 'success' ? (
                            <div className="text-center py-8 animate-fade-in">
                                <h3 className="text-2xl font-bold text-white mb-4">🚀 Recebemos seu contato!</h3>
                                <p className="text-[#DCDCDC] mb-6">Em breve um de nossos especialistas entrará em contato com você via WhatsApp.</p>
                                <Button 
                                    onClick={() => setStatus('idle')}
                                    className="bg-[#10A7F1] hover:bg-[#10A7F1]/80 text-white font-bold px-8"
                                >
                                    Enviar outra mensagem
                                </Button>
                            </div>
                        ) : (
                            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                                {/* Nome */}
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Nome"
                                    required
                                    className="w-full h-10 sm:h-11 bg-[#0a0a0c] border border-white/5 rounded-[10px] px-5 text-[14px] text-white placeholder-white/60 focus:outline-none focus:border-[#10A7F1]/50 transition-colors"
                                />

                                {/* WhatsApp */}
                                <input
                                    type="tel"
                                    name="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    placeholder="WhatsApp"
                                    required
                                    className="w-full h-10 sm:h-11 bg-[#0a0a0c] border border-white/5 rounded-[10px] px-5 text-[14px] text-white placeholder-white/60 focus:outline-none focus:border-[#10A7F1]/50 transition-colors"
                                />

                                {/* Estabelecimento */}
                                <input
                                    type="text"
                                    name="establishment"
                                    value={formData.establishment}
                                    onChange={handleChange}
                                    placeholder="Nome do Estabelecimento"
                                    required
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
                                    type="submit" 
                                    disabled={status === 'loading'}
                                    className="w-full h-10 sm:h-11 mt-2 bg-brand-gradient hover:opacity-90 transition-opacity text-white font-extrabold text-[14px] uppercase tracking-wide rounded-[10px] border-0"
                                >
                                    {status === 'loading' ? 'Enviando...' : 'Quero Testar 30 Dias'}
                                </Button>

                                {status === 'error' && (
                                    <p className="text-red-500 text-center text-sm mt-2 animate-shake">Erro ao enviar. Tente novamente ou chame no WhatsApp.</p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
