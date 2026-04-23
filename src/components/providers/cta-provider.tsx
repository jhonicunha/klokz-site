"use client";

import React, { createContext, useContext } from 'react';

type CtaContextType = {
  link: string;
  isWhatsapp: boolean;
};

const CtaContext = createContext<CtaContextType>({ 
  link: '#contato',
  isWhatsapp: false,
});

export function CtaProvider({ 
  children, 
  link,
  isWhatsapp = false
}: { 
  children: React.ReactNode;
  link?: string;
  isWhatsapp?: boolean;
}) {
  return (
    <CtaContext.Provider value={{ 
      link: link || '#contato',
      isWhatsapp: isWhatsapp
    }}>
      {children}
    </CtaContext.Provider>
  );
}

export function useCta() {
  return useContext(CtaContext);
}
