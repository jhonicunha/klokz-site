import Image from "next/image";

const Logos: React.FC = () => {
  return (
    <section id="logos" className="py-32 px-5 bg-background">
      <p className="text-lg font-medium text-center pb-10">
        Usado e Aprovado por
      </p>
      <div className="flex overflow-hidden space-x-16">
        {/* PRIMEIRO CONJUNTO DE IMAGENS NA ANIMAÇÃO */}
        <div className="flex flex-shrink-0 space-x-16 animate-loop-scroll">
          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/bergamotta.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="Bergamotta logo"
            />
          </div>

          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/dfive.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="Dfive logo"
            />
          </div>

          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/imperiolounge.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="Imperio Lounge logo"
            />
          </div>

          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/kingsmoke.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="Kingsmoke logo"
            />
          </div>

          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/llum.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="llum logo"
            />
          </div>

          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/monkey.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="Monkey logo"
            />
          </div>

          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/narnialounge.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="Narnia logo"
            />
          </div>

          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/p2pub.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="P2Pub logo"
            />
          </div>
          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/velhojack.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="Velho Jack logo"
            />
          </div>
        </div>

        {/* SEGUNDO CONJUNTO PARA O LOOP INFINITO */}
        <div
          className="flex flex-shrink-0 space-x-16 animate-loop-scroll"
          aria-hidden="true"
        >
          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/bergamotta.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="Bergamotta logo"
            />
          </div>

          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/dfive.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="Dfive logo"
            />
          </div>

          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/imperiolounge.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="Imperio Lounge logo"
            />
          </div>

          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/kingsmoke.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="Kingsmoke logo"
            />
          </div>

          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/llum.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="llum logo"
            />
          </div>

          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/monkey.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="Monkey logo"
            />
          </div>

          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/narnialounge.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="Narnia logo"
            />
          </div>

          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/p2pub.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="P2Pub logo"
            />
          </div>
          <div className="h-16 w-auto flex items-center">
            <Image
              loading="lazy"
              src="/images/clients/velhojack.png"
              className="h-full w-auto object-contain"
              width={100}
              height={50}
              alt="Velho Jack logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;