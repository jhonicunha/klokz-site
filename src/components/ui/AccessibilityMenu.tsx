"use client";

import React, { useState, useEffect } from "react";
import { FaWheelchair, FaMinus, FaPlus, FaTimes } from "react-icons/fa";

export function AccessibilityMenu() {
    const [isOpen, setIsOpen] = useState(false);
    
    // Accessibility States
    const [textSize, setTextSize] = useState(100);
    const [highContrast, setHighContrast] = useState(false);
    
    // Apply Settings
    useEffect(() => {
        // Apply Text Size by modifying html root font size percentage
        document.documentElement.style.fontSize = `${textSize}%`;
        
        // Apply High Contrast class to html root
        if (highContrast) {
            document.documentElement.classList.add('high-contrast');
        } else {
            document.documentElement.classList.remove('high-contrast');
        }
    }, [textSize, highContrast]);

    const increaseText = () => setTextSize((prev) => Math.min(prev + 10, 150));
    const decreaseText = () => setTextSize((prev) => Math.max(prev - 10, 80));
    const toggleContrast = () => setHighContrast((prev) => !prev);
    
    const resetSettings = () => {
        setTextSize(100);
        setHighContrast(false);
    };

    return (
        <div className="fixed left-0 bottom-6 z-[100] flex items-center">
            
            {/* The Tab / Flag */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    w-10 h-11 bg-gradient-to-br from-[#10A7F1] to-[#882FE3] 
                    rounded-r-xl flex items-center justify-center
                    shadow-lg hover:w-14 transition-all duration-300
                    ${isOpen ? '-translate-x-full' : 'translate-x-0'}
                `}
                aria-label="Menu de Acessibilidade"
            >
                <FaWheelchair className="text-white text-lg" />
            </button>

            {/* The Panel */}
            <div 
                className={`
                    absolute left-0 bottom-0 ml-4 mb-1
                    w-[280px] bg-[#111114] border border-white/10 rounded-2xl shadow-2xl
                    p-5 transition-all duration-300 transform origin-bottom-left
                    ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}
                `}
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-white font-bold text-[16px]">Acessibilidade</h3>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Fechar"
                    >
                        <FaTimes size={18} />
                    </button>
                </div>

                {/* Text Size Control */}
                <div className="mb-6">
                    <p className="text-white text-[14px] font-semibold mb-3">Tamanho do texto</p>
                    <div className="flex items-center justify-between bg-[#0a0a0c] border border-white/5 rounded-xl p-1">
                        <button 
                            onClick={decreaseText}
                            className="w-10 h-10 flex items-center justify-center bg-[#1c1c21] hover:bg-[#25252b] rounded-lg text-white transition-colors"
                            aria-label="Diminuir texto"
                        >
                            <FaMinus size={14} />
                        </button>
                        <span className="text-white font-bold text-[14px] w-12 text-center">
                            {textSize}%
                        </span>
                        <button 
                            onClick={increaseText}
                            className="w-10 h-10 flex items-center justify-center bg-[#1c1c21] hover:bg-[#25252b] rounded-lg text-white transition-colors"
                            aria-label="Aumentar texto"
                        >
                            <FaPlus size={14} />
                        </button>
                    </div>
                </div>

                {/* High Contrast Control */}
                <div className="mb-6">
                    <p className="text-white text-[14px] font-semibold mb-3">Alto contraste</p>
                    <button 
                        onClick={toggleContrast}
                        className={`
                            w-full h-12 rounded-xl text-[14px] font-bold transition-all duration-200
                            ${highContrast 
                                ? 'bg-white text-black hover:bg-gray-200' 
                                : 'bg-[#1c1c21] text-white hover:bg-[#25252b]'
                            }
                        `}
                    >
                        {highContrast ? 'Ativado' : 'Desativado'}
                    </button>
                </div>

                {/* Reset Button */}
                <button 
                    onClick={resetSettings}
                    className="w-full h-12 bg-[#2a1315] hover:bg-[#3d1a1e] text-[#ff4c4c] rounded-xl text-[14px] font-medium transition-colors"
                >
                    Resetar configurações
                </button>
            </div>
            
        </div>
    );
}
