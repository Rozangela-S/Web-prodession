"use client"
import { useEffect, useState } from "react";
import axios from "axios";

interface ProfessionData {
  name: string;
  category: string;
  description: string;
  salary: string;
  skills: string[];
  growth: string;
  rating: number;
}

interface Profession {
  id: number;
  data: ProfessionData;
  area: number;
}

export default function ProfessionList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [professions, setProfessions] = useState<Profession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String | null>(null);

  useEffect(()=>{
    const fetchProfessions = async () =>{
      try{
        const response = await axios.get("http://127.0.0.1:8000/profissoes/");
        console.log("Dados retornados:");
        setProfessions(response.data);
      } catch (err){
        setError("Erro ao buscar as profissões");
      } finally{
        setLoading(false)
      }

    };
    fetchProfessions();
  }, []);

  const handleVote = (id:number, newRating:number) =>{
    setProfessions((prevProfessions)=>
      prevProfessions.map((p)=>
        p.id === id ? {...p, rating:(p.data.rating + newRating)/2}: p
      )
    );
  }


  const filteredProfessions = professions.filter((p) =>
    (category === "Todas" || p.data.category === category) &&
    p.data.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Barra de Pesquisa e Filtro */}
      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Buscar profissão..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded">
          <option>Todas</option>
          <option>Tecnologia</option>
          <option>Saúde</option>
          <option>Sustentabilidade</option>
        </select>
      </div>

      {/* Lista de Profissões */}
      <ul className="space-y-4">
        {filteredProfessions.map((p) => (
          <li key={p.id} className="p-4 border rounded-lg shadow bg-white">
            <h2 className="text-xl font-bold">{p.data.name}</h2>
            <p className="text-sm text-gray-500">{p.data.category}</p>
            <p className="text-gray-700 mt-2">{p.data.description}</p>
            <p className="text-green-600 font-semibold mt-2">💰 Salário: {p.data.salary}</p>
            <p className="text-blue-500">📈 Crescimento: {p.data.growth}</p>
            <p className="mt-2"><strong>Habilidades:</strong> {p.data.skills.join(", ")}</p>

            <RatingStars rating={p.data.rating} />

            {/* Botão de Votação */}
            <button
              onClick={() => handleVote(p.id, 5)}
              className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Votar 👍
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Componente de Estrelas de Avaliação
const RatingStars = ({ rating}:{rating:number}) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
  ));
  return <div className="mt-2">{stars}</div>;
};
