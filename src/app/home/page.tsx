import { AnimatedListDemo } from "@/components/anima";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Contêiner da Imagem */}
      <div className="relative w-full h-screen">
        <Image
           src="/img.png"
           alt="Imagem"
           width={1000}
           height={1000}
           className="w-full h-full "
        />
      </div>
      <div className="w-full">
        <AnimatedListDemo />
      </div>
    </main>
  );
}
