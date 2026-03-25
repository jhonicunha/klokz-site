import React, { Fragment } from 'react';
import { Dialog, Transition, Disclosure } from '@headlessui/react';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';

export interface AccordionSubItem {
    title: string;
    text: string;
}

export interface AccordionItem {
    title: string;
    description?: string;
    subItems?: AccordionSubItem[];
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    icon?: React.ReactNode;
    features?: string[];
    accordionItems?: AccordionItem[];
}

export function DescriptionModal({ isOpen, onClose, title, description, icon, features, accordionItems }: ModalProps) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50 text-left" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-[800px] transform overflow-hidden rounded-[16px] bg-[#151518] border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all flex flex-col max-h-[90vh]">

                                {/* Header */}
                                <div className="relative p-6 md:px-8 md:pt-8 md:pb-6 border-b border-white/5 bg-transparent">
                                    <button
                                        onClick={onClose}
                                        className="absolute top-4 right-4 p-[10px] text-gray-300 hover:text-white bg-[#111111] hover:bg-[#222222] rounded-full transition-colors z-10"
                                    >
                                        <FaTimes className="w-[14px] h-[14px]" />
                                    </button>

                                    <div className="flex flex-col md:flex-row gap-5 items-start">
                                        {icon && (
                                            <div className="flex-shrink-0 w-[52px] h-[52px] rounded-[12px] bg-[#1A2634] border border-[#2B3A4A] flex items-center justify-center text-white">
                                                {icon}
                                            </div>
                                        )}
                                        <div className="space-y-[6px] pr-8 pt-1">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-[24px] font-bold leading-tight text-[#10A7F1]"
                                            >
                                                {title}
                                            </Dialog.Title>
                                            <p className="text-[#DCDCDC] leading-relaxed text-[14px]">
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Body - Scrollable */}
                                <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-[14px]">
                                    {accordionItems ? (
                                        accordionItems.map((item, idx) => (
                                            <Disclosure as="div" key={idx} className="bg-transparent border border-white/5 rounded-[12px] overflow-hidden">
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button className="flex w-full justify-between items-center px-6 py-5 text-left text-white hover:bg-white/5 transition-colors focus:outline-none">
                                                            <span className="font-bold text-[15px]">{item.title}</span>
                                                            {open ? (
                                                                <FaMinus className="w-4 h-4 text-[#10A7F1] transition-transform duration-200" />
                                                            ) : (
                                                                <FaPlus className="w-4 h-4 text-[#882FE3] transition-transform duration-200" />
                                                            )}
                                                        </Disclosure.Button>
                                                        <Disclosure.Panel className="px-6 pb-6">
                                                            {item.description && (
                                                                <p className="text-[14px] text-white leading-relaxed mb-5">
                                                                    {item.description}
                                                                </p>
                                                            )}
                                                            {item.subItems && item.subItems.length > 0 && (
                                                                <div className="space-y-[18px]">
                                                                    {item.subItems.map((sub, sIdx) => (
                                                                        <div key={sIdx} className="border-l-[2px] border-[#10A7F1] pl-[14px]">
                                                                            <h4 className="text-[#10A7F1] font-bold text-[14px] mb-1">{sub.title}</h4>
                                                                            <p className="text-[#DCDCDC] text-[13px] leading-relaxed">{sub.text}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))
                                    ) : (
                                        features?.map((feature, idx) => (
                                            <Disclosure as="div" key={idx} className="bg-transparent border border-white/5 rounded-[12px] overflow-hidden">
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button className="flex w-full justify-between items-center px-6 py-5 text-left text-white hover:bg-white/5 transition-colors focus:outline-none">
                                                            <span className="font-bold text-[15px]">{feature}</span>
                                                            {open ? (
                                                                <FaMinus className="w-4 h-4 text-[#10A7F1] transition-transform duration-200" />
                                                            ) : (
                                                                <FaPlus className="w-4 h-4 text-[#882FE3] transition-transform duration-200" />
                                                            )}
                                                        </Disclosure.Button>
                                                        <Disclosure.Panel className="px-6 pb-5 text-[14px] text-[#DCDCDC]">
                                                            (Conteúdo da sanfona aguardando envio...)
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="px-6 md:px-8 py-6 border-t border-white/5 bg-transparent">
                                    <a
                                        href="#contato"
                                        className="flex items-center justify-center w-full rounded-[10px] bg-gradient-to-r from-[#10A7F1] to-[#882FE3] hover:brightness-110 py-[16px] text-[13px] font-bold text-white uppercase tracking-[1px] transition-all shadow-[0_4px_20px_rgba(16,167,241,0.25)] cursor-pointer"
                                        onClick={onClose}
                                    >
                                        Entre em Contato
                                    </a>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
