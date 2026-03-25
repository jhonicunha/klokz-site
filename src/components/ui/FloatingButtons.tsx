"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AccessibilityMenu } from "./AccessibilityMenu";

export function FloatingButtons() {
    const [bottomOffset, setBottomOffset] = useState(24); // default 24px (bottom-6)

    useEffect(() => {
        const handleScroll = () => {
            // Only apply footer-aware logic on mobile
            if (window.innerWidth >= 768) {
                setBottomOffset(24);
                return;
            }

            const copyrightEl = document.getElementById("footer-copyright");
            if (!copyrightEl) {
                setBottomOffset(24);
                return;
            }

            const rect = copyrightEl.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // If the copyright bar is visible in the viewport
            if (rect.top < viewportHeight) {
                // Push buttons above the copyright bar
                const overlap = viewportHeight - rect.top;
                setBottomOffset(Math.max(24, overlap + 8));
            } else {
                setBottomOffset(24);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <>
            {/* Accessibility Menu */}
            <div
                className="fixed left-0 z-[100] transition-all duration-200"
                style={{ bottom: `${bottomOffset}px` }}
            >
                <AccessibilityMenu embedded />
            </div>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/5541999988288"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed right-6 z-[100] w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200"
                style={{ bottom: `${bottomOffset}px` }}
                aria-label="Falar no WhatsApp"
            >
                <FaWhatsapp className="text-white" size={20} />
            </a>
        </>
    );
}
