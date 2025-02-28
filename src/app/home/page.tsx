import { MarqueeDemoVertical } from "@/components/magicui/maqueevertical";

export default function HomePage() {
  return (
    <>
      <main className="flex items-center justify-center min-h-screen ">
        {/* Contêiner ocupando toda a altura */}
        <div className="flex w-full min-h-screen">
          {/* Lado direito com MarqueeDemo */}
          <div className="w-1/2 flex items-center justify-center p-4">
            <MarqueeDemoVertical />
          </div>

           {/* Lado esquerdo (ocupa metade da tela) */}
           <div className="w-1/2 flex items-center justify-center">
            <h1 className="text-xl text-black">Conteúdo direito</h1>
          </div>

        </div>
      </main>
    </>
  );
}
