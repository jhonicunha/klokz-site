
import React from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { FaPlay, FaQuestionCircle } from 'react-icons/fa';

export function Hero() {
    return (
        <Section className="relative min-h-screen flex items-center justify-center pt-20 pb-0 overflow-hidden">

            {/* Background & Overlay Images */}
            <div className="absolute inset-0 pointer-events-none">
                {/* 1. Base Background: bghero.jpg */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/images/bghero.jpg)' }}
                />

                {/* 1.1 EXTRA DARK LAYER FOR BGHERO ONLY (Emphasis for devices.png) */}
                <div className="absolute inset-0 bg-black/60" />

                {/* 3. Shared Dark Opacity Layer (Covers both) */}
                <div className="absolute inset-0 bg-[#0D0D0D]/80" />

                {/* Ambient Light Effects */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-30" />
            </div>

            <Container className="relative z-10 flex flex-col items-center text-center h-full justify-center">

                {/* Preserved Badge - Pushed down slightly */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 mt-12 animate-fade-in-up">
                    <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="text-sm font-medium text-gray-300">Nova versão com Recepção Automática e Emissão de NFC-e.</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 max-w-4xl mx-auto leading-tight">
                    Toda gestão do seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">evento</span> em um só <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">sistema</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto text-balance">
                    Controle total da sua operação em um só lugar — simples, rápido e inteligente.
                </p>

                {/* CTA Section */}
                <div className="flex flex-col items-center gap-8 w-full max-w-4xl pb-12 z-20">
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <Button size="lg" className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold h-12 w-full sm:w-auto px-6 uppercase tracking-wide text-sm">
                            Teste Grátis por 30 dias
                        </Button>
                        <Button size="lg" variant="outline" className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/10 font-bold h-12 w-full sm:w-auto px-6 uppercase tracking-wide flex items-center justify-center gap-2 text-sm">
                            <FaPlay size={12} /> Agende uma Demo
                        </Button>
                    </div>

                    {/* Devices Image - Relocated below CTA */}
                    <div className="relative w-full max-w-4xl mt-8 -mb-32 md:-mb-40 pointer-events-none">
                        <img
                            src="/images/devices.png"
                            alt="Klokz Dashboard Devices"
                            className="w-full h-auto object-contain drop-shadow-2xl"
                        />
                        {/* Ambient Glow for Devices */}
                        <div className="absolute inset-0 bg-blue-600/20 blur-[100px] -z-10 rounded-full" />
                    </div>
                </div>

            </Container>
        </Section>
    );
}
