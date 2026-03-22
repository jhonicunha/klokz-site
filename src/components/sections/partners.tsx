
import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';

const partners = [
    'arena.png',
    'bergamotta.png',
    'botecoemporio.png',
    'burley.png',
    'butekodukareka.png',
    'dfive.png',
    'fourpub.png',
    'glasspub.png',
    'imperio.png',
    'kingsmoke.png',
    'llum.png',
    'marajah.png',
    'monkey.png',
    'narnia.png',
    'p2pub.png',
    'thepub.png',
    'velhojack.png',
    'xtremeclub.png',
];

export function Partners() {
    return (
        <Section className="bg-background py-16 md:py-20">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                        Onde o Klokz já <span className="text-primary italic">marcou presença</span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">
                        O sistema de gestão que agita nossos clientes
                    </p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8 items-center justify-center">
                    {partners.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center p-3">
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 grayscale brightness-0 invert opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src={`/images/clients/${logo}`}
                                    alt={logo.replace('.png', '')}
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
