import Image from "next/image";

export default function Product(){
  return(
   <main className="flex gap-12 w-full max-w-[cal(100vw-((100vw-1180px)/2))] ml-32 min-h-[456px] mt-60">
    <div className="flex flex-col">
      <a href="#" className="bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg p-1 cursor-pointer relative overflow-hidden flex items-center justify-center">
        <Image src="/camisa01.png" alt="camisa" width={400} height={400} className="object-cover" />
      </a>
      <footer 
        className="absolute bottom-40 p-8 bg-[rgba(0,0,0,0.6)] rounded-md flex items-center justify-between">
        <strong className="text-lg">Camisa01</strong>
        <span className="text-xl font-bold text-green-300">78,36</span>
      </footer>
    </div>
  
      <a href="#" className="bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg p-1 cursor-pointer relative overflow-hidden flex items-center justify-center">
        <Image src="/camisa02.png" alt="" width={400} height={400} />
      </a>
      <footer>
        <strong>Camisa01</strong>
        <span>78,36</span>
      </footer>
   </main>
  )
}