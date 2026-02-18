
import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';

const partners = [
    'bergamotta.png',
    'dfive.png',
    'imperiolounge.png',
    'kingsmoke.png',
    'llum.png',
    'monkey.png',
    'narnialounge.png',
    'p2pub.png',
    'velhojack.png'
];

export function Partners() {
    return (
        <Section className="bg-background py-16">
            <Container>
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        CONFIANÇA
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                        Onde a Klokz já <span className="text-primary">marcou presença</span>
                    </h2>
                    <p className="text-gray-400 mt-2 text-sm">
                        O sistema de gestão que agita nossos clientes
                    </p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 items-center justify-center opacity-80">
                    {partners.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center p-4">
                            <div className="relative w-24 h-24 sm:w-32 sm:h-32 grayscale brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-500 animate-pulse">
                                <Image
                                    src={`/images/clients/${logo}`}
                                    alt="Partner logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
