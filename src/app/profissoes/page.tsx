"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { FormatMoney } from "./formatMoney";

interface ProfessionData {
  name: string;
  category: string;
  description: string;
  salary_min: number;
  salary_max: number;
  skills: string[];
  growth: string;
  rating: number;
}

interface Profession {
  id: number;
  data: ProfessionData;
  area: number;
}

// Componente Principal
export default function ProfessionList() {
  const [search, setSearch] = useState("");
  const [category] = useState("Todas");
  const [professions, setProfessions] = useState<Profession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfessions = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/profissoes/");
        console.log("Profissões retornadas:", response.data);
  
        // Converte os campos 'salary-max' e 'salary-min' para 'salary_max' e 'salary_min'
        const formattedData = response.data.map((p: any) => ({
          ...p,
          data: {
            ...p.data,
            salary_min: p.data["salary-min"], 
            salary_max: p.data["salary-max"]  
          }
        }));
  
        setProfessions(formattedData);
      } catch (err) {
        setError("Erro ao buscar as profissões");
      } finally {
        setLoading(false);
      }
    };
    fetchProfessions();
  }, []);
  

  const filteredProfessions = professions.filter((p) =>
    (category === "Todas" || p.data.category === category) &&
    p.data.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Barra de Pesquisa */}
      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Buscar profissão..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>

      {/* Lista de Profissões */}
      <ul className="space-y-4">
        {filteredProfessions.map((p) => (
          <ProfessionItem key={p.id} profession={p} />
        ))}
      </ul>
    </div>
  );
}

// 🔹 Componente separado para cada profissão
const ProfessionItem = ({ profession }: { profession: Profession }) => {
  const [likes, setLikes] = useState(0); // Estado individual para curtidas

  return (
    <li className="p-4 border rounded-lg shadow bg-white">
      <h2 className="text-xl font-bold">{profession.data.name}</h2>
      <p className="text-sm text-gray-500">{profession.data.category}</p>
      <p className="text-gray-700 mt-2">{profession.data.description}</p>
      <p className="text-green-600 font-semibold mt-2">💰 Salário Mínimo: {FormatMoney(profession.data.salary_min)}</p>
      <p className="text-green-600 font-semibold mt-2">💰 Salário Máximo: {FormatMoney(profession.data.salary_max)}</p>

      <p className="text-blue-500">📈 Crescimento: {profession.data.growth}</p>
      <p className="mt-2"><strong>Habilidades:</strong> {profession.data.skills.join(", ")}</p>

      <RatingStars rating={profession.data.rating} />

      {/* Botão de Curtida */}
      <button
        onClick={() => setLikes(likes + 1)}
        className="mt-2 p-2 bg-blue-500 text-white rounded flex items-center gap-4 hover:bg-blue-600 transition"
      >
        Votar 👍 <span>{likes}</span>
      </button>
    </li>
  );
};

// 🔹 Componente de Estrelas
const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="mt-2">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
      ))}
    </div>
  );
};
