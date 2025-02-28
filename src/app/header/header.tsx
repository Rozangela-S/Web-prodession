import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function Header() {
  return(
    <div className="w-full h-32 bg-gray-100 ">
      <header className="flex justify-end">
        <nav className="flex gap-4">
          <ShimmerButton>Sobre nós</ShimmerButton>
          <ShimmerButton>Quiz</ShimmerButton>
          <ShimmerButton>saida</ShimmerButton>
        </nav>
      </header>
    </div>
    
  )
}