import React from "react";
import Image from "next/image";

const clients = [
    "bergamotta.png",
    "dfive.png",
    "imperiolounge.png",
    "kingsmoke.png",
    "llum.png",
    "monkey.png",
    "narnialounge.png",
    "p2pub.png",
    "velhojack.png",
];

const SocialProof: React.FC = () => {
    return (
        <section id="social-proof" className="py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
                        NOSSOS CASES E PARCEIROS
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto">
                        Onde a Klokz já marcou presença. Clientes que transformam operação em dados e controle.
                    </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
                    {[...clients, ...clients].slice(0, 15).map((client, index) => (
                        <div key={`${client}-${index}`} className="group flex items-center justify-center p-6 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:bg-white/10 w-full aspect-video relative">
                            <div className="relative w-full h-full transition-all duration-300 opacity-50 group-hover:opacity-100" style={{ filter: "brightness(0) invert(1)" }}>
                                <Image
                                    src={`/images/clients/${client}`}
                                    alt={client.replace(".png", "")}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
