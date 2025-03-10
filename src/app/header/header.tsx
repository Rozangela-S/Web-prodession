import Link from "next/link";

export default function Header() {
  return(
    <header className="w-full bg-green-500 text-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <nav className="hidden md:flex items-center justify-between gap-6 text-xl">
          <Link href="/" >Home</Link>
          <Link href="/profissoes">Profissões</Link>
          <Link href="/tendencias">Tendências</Link>
        </nav>
      </div>
    </header>
  )
}
