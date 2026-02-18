
import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { FaQuestionCircle } from 'react-icons/fa';

export function ProblemStatement() {
    return (
        <Section className="relative pt-[10px] pb-20 bg-[#0D0D0D]">
            <Container className="flex flex-col items-center text-center gap-8">

                {/* Glass Cards - Relocated & Resized */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center text-center gap-3 hover:bg-white/10 transition-colors group h-auto min-h-[140px]">
                        <FaQuestionCircle className="text-blue-600 text-2xl mb-1 group-hover:scale-110 transition-transform" />
                        <p className="text-gray-300 font-medium text-base">Você sabe onde perde dinheiro?</p>
                    </div>
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center text-center gap-3 hover:bg-white/10 transition-colors group h-auto min-h-[140px]">
                        <FaQuestionCircle className="text-blue-600 text-2xl mb-1 group-hover:scale-110 transition-transform" />
                        <p className="text-gray-300 font-medium text-base">Você controla cortesias em tempo real?</p>
                    </div>
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center text-center gap-3 hover:bg-white/10 transition-colors group h-auto min-h-[140px]">
                        <FaQuestionCircle className="text-blue-600 text-2xl mb-1 group-hover:scale-110 transition-transform" />
                        <p className="text-gray-300 font-medium text-base">Você depende de alguém te contar o que aconteceu?</p>
                    </div>
                </div>

                {/* Resolution Badge - Relocated */}
                <div className="bg-blue-900/30 border border-blue-500/30 text-blue-400 px-8 py-3 rounded-xl font-bold text-lg w-full max-w-md backdrop-blur-md animate-pulse">
                    O Klokz resolve isso.
                </div>

            </Container>
        </Section>
    );
}
