import Image from "next/image";

const clients = [
  "bergamotta.png",
  "dfive.png",
  "imperiolounge.png",
  "kingsmoke.png",
  "llum.png",
  "monkey.png",
  "narnialounge.png",
  "p2pub.png",
  "velhojack.png",
];

const Logos: React.FC = () => {
  return (
    <section id="logos" className="py-10 bg-background border-b border-white/5">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-sm font-semibold text-center text-gray-500 uppercase tracking-widest">
          Usado e Aprovado por
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-loop-scroll whitespace-nowrap hover:paused py-4 items-center">
          {[...clients, ...clients].map((client, index) => (
            <div key={`${client}-${index}`} className="flex items-center justify-center mx-8 min-w-[120px]">
              <div className="relative h-12 w-32 transition-all duration-300 opacity-50 hover:opacity-100" style={{ filter: "brightness(0) invert(1)" }}>
                <Image
                  src={`/images/clients/${client}`}
                  alt={client.replace(".png", "")}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex animate-loop-scroll whitespace-nowrap hover:paused py-4 absolute top-0 left-full items-center">
          {[...clients, ...clients].map((client, index) => (
            <div key={`${client}-${index}-dup`} className="flex items-center justify-center mx-8 min-w-[120px]">
              <div className="relative h-12 w-32 transition-all duration-300 opacity-50 hover:opacity-100" style={{ filter: "brightness(0) invert(1)" }}>
                <Image
                  src={`/images/clients/${client}`}
                  alt={client.replace(".png", "")}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;