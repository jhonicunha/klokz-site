import React, { Fragment } from 'react';
import { Dialog, Transition, Disclosure } from '@headlessui/react';
import { FaTimes, FaChevronDown, FaPlus } from 'react-icons/fa';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    icon?: React.ReactNode;
    features?: string[];
}

export function DescriptionModal({ isOpen, onClose, title, description, icon, features }: ModalProps) {
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
                            <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-[#18181b] border border-white/10 shadow-2xl transition-all flex flex-col max-h-[90vh]">

                                {/* Header */}
                                <div className="relative p-6 md:p-8 border-b border-white/10 bg-[#1f1f23]">
                                    <button
                                        onClick={onClose}
                                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
                                    >
                                        <FaTimes />
                                    </button>

                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        {icon && (
                                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary text-3xl">
                                                {icon}
                                            </div>
                                        )}
                                        <div className="space-y-2 pr-8">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-2xl font-bold leading-6 text-primary"
                                            >
                                                {title}
                                            </Dialog.Title>
                                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Body - Scrollable */}
                                <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-3">
                                    {features?.map((feature, idx) => (
                                        <div key={idx} className="bg-white/5 rounded-xl border border-white/5 overflow-hidden">
                                            <div className="w-full px-4 py-4 flex justify-between items-center text-left">
                                                <span className="font-bold text-white text-sm md:text-base">{feature}</span>
                                                <FaPlus className="text-primary w-3 h-3" />
                                            </div>
                                            {/* Note: User image showed items with '+' icons. Assuming simplified accordion look or just list items implies capability. 
                                                If real accordion functionality is needed for sub-content, we'd use Disclosure. 
                                                For now matching the visual 'list with plus' look from the description/inference. 
                                                If it needs to expand, we need content FOR the expansion. 
                                                I will leave it as a static list item that LOOKS like the referenced accordion headers 
                                                unless I invent sub-content. 
                                                
                                                Wait, user said "change the modal template to look as this image"
                                                The image shows "Controle de Espaço [+]" etc.
                                                It implies they might be expandable OR just purely visual indicators of features.
                                                Since I don't have sub-content, I'll make them standard list items styled like the accordion headers in the image.
                                            */}
                                        </div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="p-6 md:p-8 pt-4 border-t border-white/10 bg-[#1f1f23]">
                                    <button
                                        type="button"
                                        className="w-full rounded-xl bg-primary hover:bg-primary/90 py-4 text-base font-bold text-white uppercase tracking-wider transition-colors shadow-lg shadow-primary/20"
                                        onClick={onClose}
                                    >
                                        Entre em Contato
                                    </button>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
