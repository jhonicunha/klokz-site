
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { FaInstagram } from 'react-icons/fa';

const partners = [
    { logo: 'arena.png', instagram: 'https://www.instagram.com/arenaemporioeventos/' },
    { logo: 'dfive.png', instagram: 'https://www.instagram.com/dfivearenaloungebar/' },
    { logo: 'monkey.png', instagram: 'https://www.instagram.com/monkeyloungebarcwb/' },
    { logo: 'velhojack.png', instagram: 'https://www.instagram.com/velhojackloungebar/' },
    { logo: 'glasspub.png', instagram: 'https://www.instagram.com/glasspubofc/' },
    { logo: 'marajah.png', instagram: 'https://www.instagram.com/marajah.club/' },
    { logo: 'bergamotta.png', instagram: 'https://www.instagram.com/bergamotta.bar/' },
    { logo: 'butekodukareka.png', instagram: 'https://www.instagram.com/butekodukareka/' },
    { logo: 'llum.png', instagram: 'https://www.instagram.com/espacollumcuritiba/' },
    { logo: 'botecoemporio.png', instagram: 'https://www.instagram.com/botecodaemporio/' },
    { logo: 'burley.png', instagram: 'https://www.instagram.com/burley.club/' },
    { logo: 'fourpub.png', instagram: 'https://www.instagram.com/fourpub.oficial/' },
    { logo: 'imperio.png', instagram: 'https://www.instagram.com/imperiooloungebar/' },
    { logo: 'kingsmoke.png', instagram: 'https://www.instagram.com/kingclub.cwb/' },
    { logo: 'narnia.png', instagram: 'https://www.instagram.com/narnia.lounge.bar/' },
    { logo: 'p2pub.png', instagram: 'https://www.instagram.com/p2pub/' },
    { logo: 'thepub.png', instagram: 'https://www.instagram.com/thepuboficial/' },
    { logo: 'xtremeclub.png', instagram: 'https://www.instagram.com/xtremeclubcuritiba/' },
];

export function Partners() {
    return (
        <Section className="bg-black py-16 md:py-24">
            <Container>
                {/* Top Badge */}
                <div className="flex justify-center mb-6">
                    <span className="px-4 py-1.5 rounded-full border border-[#10A7F1]/30 bg-[#10A7F1]/10 text-[#10A7F1] text-[11px] font-bold uppercase tracking-wider">
                        Nossos cases e parceiros
                    </span>
                </div>

                {/* Headers */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Onde o Klokz já{' '}
                        <span className="efeito-piscante-roxo" data-text="marcou presença">
                            marcou presença
                        </span>
                    </h2>
                    <p className="text-[#DCDCDC] text-[15px] md:text-base">
                        Clientes que transformam operação em dados e controle.
                    </p>
                </div>

                {/* Main Dark Container */}
                <div className="bg-[#111114] rounded-[24px] p-6 md:p-12 lg:p-16 border border-white/5 shadow-2xl">
                    <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-4 md:gap-y-12 md:gap-x-8 items-center justify-center">
                        {partners.map((partner, index) => (
                            <Link
                                key={index}
                                href={partner.instagram}
                                target="_blank"
                                className="group relative flex items-center justify-center p-2 animate-pulse-scale"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {/* Logo Image */}
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 grayscale brightness-0 invert opacity-50 group-hover:opacity-10 transition-opacity duration-300">
                                    <Image
                                        src={`/images/clients/${partner.logo}`}
                                        alt={partner.logo.replace('.png', '')}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                
                                {/* Instagram Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-[6px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                        <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
