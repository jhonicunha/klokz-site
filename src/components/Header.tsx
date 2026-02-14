"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";

import Container from "./Container";
import { menuItems } from "@/data/menuItems";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent align-top-0 left-0 right-0 md:absolute w-full">
      {/* Barrinha de anúncio */}
      <section className="flex text-center bg-primary text-white">
        <div className="text-center text-sm mx-auto whitespace-nowrap animate-pulse">
          Nova versão com Recepção Automática e Emissão de NFC-e &#129395;
        </div>
      </section>
      <Container className="!px-0">
        <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex items-center py-2 px-5 md:py-5">
          <div className="w-1/4 lg:pl-[50px]">
            {/* Logo */}
            <Link href="/" className="">
              <Image
                src="/images/logo.png"
                alt="Logo Klokz"
                width={100}
                height={50}
              />
            </Link>
          </div>
          <div className="w-2/4">
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 justify-center">
              {menuItems.map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.url}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/4 pl-[50px]">
            <Link
              href="#cta"
              className="whitespace-nowrap max-md:hidden text-white hover:text-white bg-primary hover:bg-primary-accent px-7 py-2 rounded-full transition-colors"
            >
              Teste por 30 dias
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-primary text-white focus:outline-none rounded-md w-10 h-10 flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-foreground hover:text-primary block"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#cta"
                className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit"
                onClick={toggleMenu}
              >
                Teste por 30 dias
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
