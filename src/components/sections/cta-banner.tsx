
import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

export function CtaBanner() {
    return (
        <Section className="relative overflow-hidden py-20 md:py-28">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#0a0a1a] to-[#0D0D0D]" />

            {/* Blue ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[120px]" />

            <Container className="relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase leading-tight">
                        30 dias grátis +
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">implementação custo zero</span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto">
                        Comece agora sem risco. Teste todas as funcionalidades do Klokz gratuitamente por 30 dias.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold h-13 px-10 uppercase tracking-wide text-sm rounded-lg">
                            Começar Agora
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 font-bold h-13 px-10 uppercase tracking-wide text-sm rounded-lg">
                            Falar com Consultor
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
