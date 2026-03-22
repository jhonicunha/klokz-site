"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const navigation = [
  { name: "Soluções", href: "#solutions" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Depoimentos", href: "#testimonials" },
  { name: "Contato", href: "#contact" },
];

const defaultNavClass = "fixed w-full top-0 z-50 transition-all duration-300 border-b border-transparent";
const scrolledNavClass = "fixed w-full top-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? scrolledNavClass : defaultNavClass}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 lg:-ml-6">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Klokz</span>
            <Image
              src="/images/logoklokz.png"
              alt="Klokz"
              width={80}
              height={80}
              className="h-20 w-auto"
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-base font-semibold leading-6 text-gray-300 hover:text-white transition-colors">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#contact"
            className="rounded-xl bg-brand-gradient px-8 py-3 text-sm font-bold text-white shadow-sm hover:opacity-90 transition-all duration-200 uppercase tracking-wider"
          >
            TESTE GRÁTIS
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setIsOpen(false)}>
                <span className="sr-only">Klokz</span>
                <Image
                  src="/images/logoklokz.png"
                  alt="Klokz"
                  width={64}
                  height={64}
                  className="h-16 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-white/5 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-brand-gradient text-center mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    TESTE GRÁTIS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
