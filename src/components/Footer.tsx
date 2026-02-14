import Link from 'next/link';
import React from 'react';

import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-foreground  text-white">
            <section className="top-0 left-0 right-0 bg-secondary text-secondary">
               .
            </section>
            <div className="max-w-7xl w-full mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="">
                        <Image
                            src="/images/logo.png"
                            alt="Logo Klokz"
                            width={100}
                            height={50}
                        />
                    </Link>
                    <p className="mt-3.5 text-white">
                        Tudo em um sistema!
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-white">Acesso Rápido</h4>
                    <ul className="text-white">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="hover:text-foreground">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>

                    {footerDetails.email && <a href={`mailto:${footerDetails.email}`}  className="block hover:text-foreground">Email: {footerDetails.email}</a>}

                    {footerDetails.telephone && <a href={`tel:${footerDetails.telephone}`} className="block hover:text-foreground">Fone: {footerDetails.telephone}</a>}
                    Atendimento das 14h à 00h.
                    {footerDetails.socials && (
                        <div className="mt-5 flex items-center gap-5 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-8 md:text-center py-3">
                <p> &copy; {new Date().getFullYear()} Klokz Sistemas Ltda. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
