import TendenciasGraficos from "@/components/magicui/graficos";

export default function TendenciasPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🔮 Tendências do Mercado de Trabalho</h1>
      
      {/* Seção de Gráficos */}
      <TendenciasGraficos />

      {/* Seção de Entrevistas */}
      <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">🎙️ Entrevistas com Especialistas</h2>
        <InterviewCard 
          name="Dr. Roberto Silva" 
          role="Especialista em Inteligência Artificial"
          text="A inteligência artificial será uma das áreas de maior crescimento, impactando diversos setores, desde a saúde até a indústria."
        />
        <InterviewCard 
          name="Dra. Fernanda Costa" 
          role="Pesquisadora em Biohacking"
          text="Tecnologias de biohacking e aprimoramento humano estão se tornando cada vez mais populares e acessíveis, criando novas oportunidades."
        />
      </div>
    </div>
  );
}
interface props {
  name: string;
  role: string;
  text: string;
}
// Componente de Card para Entrevistas
const InterviewCard = ({ name, role, text }:props) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{role}</p>
      <p className="mt-2">{text}</p>
    </div>
  );
};
