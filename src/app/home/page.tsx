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
      <div className="flex flex-col">
        <h2>
        "A tecnologia é um mecanismo de liberação de recursos. Ela pode tornar abundante o que antes era escasso."
        </h2>
        <p className="text-right text-gray-800">
        Peter Diamandis.
        </p>
      </div>
      <div className="w-full h-full">
        <AnimatedListDemo />
      </div>
    </main>
  );
}
