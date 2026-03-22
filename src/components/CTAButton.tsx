import React from 'react'
import clsx from 'clsx'

const CTAButton = ({ dark }: { dark?: boolean }) => {
  return (

    <div
      className="flex items-center justify-center min-w-[300px] px-8 h-16 rounded-lg text-white bg-brand-gradient hover:opacity-90 transition-all duration-200 cursor-pointer shadow-lg shadow-primary/20"
    >
      <div className="text-xl font-bold">
        Testar 30 dias grátis
      </div>
    </div >

  );
}

export default CTAButton