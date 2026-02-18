import React from 'react'
import clsx from 'clsx'

const CTAButton = ({ dark }: { dark?: boolean }) => {
  return (

    <div
      className="flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit text-white bg-primary hover:bg-primary/90"
    >
      <div>
        <div className="text-xs">Implementação sem Custo</div>
        <div className="-mt-1 font-sans text-xl font-semibold">
          Teste Grátis por 30 dias
        </div>
      </div>
    </div >

  );
}

export default CTAButton