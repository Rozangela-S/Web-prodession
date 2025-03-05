"use client"
import { useState } from "react";

const professionsData = [
  {
    id: 1,
    name: "Especialista em IA",
    category: "Tecnologia",
    description: "Profissional responsável por desenvolver e aprimorar sistemas de Inteligência Artificial.",
    salary: "R$ 15.000 - R$ 30.000",
    skills: ["Machine Learning", "Python", "Big Data", "Redes Neurais"],
    growth: "Alta",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Designer de Experiências Virtuais",
    category: "Tecnologia",
    description: "Cria ambientes imersivos para VR/AR, usados em games, educação e treinamentos.",
    salary: "R$ 10.000 - R$ 25.000",
    skills: ["UX/UI", "3D Modeling", "Unity", "Realidade Virtual"],
    growth: "Média",
    rating: 4.0,
  },
  {
    id: 3,
    name: "Engenheiro de Nanotecnologia",
    category: "Saúde",
    description: "Desenvolve materiais e dispositivos em nanoescala, aplicados na medicina e eletrônica.",
    salary: "R$ 18.000 - R$ 35.000",
    skills: ["Nanomateriais", "Química", "Bioengenharia", "Microscopia"],
    growth: "Alta",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Consultor de Sustentabilidade",
    category: "Sustentabilidade",
    description: "Ajuda empresas a implementar práticas sustentáveis e reduzir impacto ambiental.",
    salary: "R$ 12.000 - R$ 22.000",
    skills: ["ESG", "Gestão Ambiental", "Políticas Públicas", "Recursos Renováveis"],
    growth: "Alta",
    rating: 4.2,
  },
  {
    id: 5,
    name: "Desenvolvedor de Biohacking",
    category: "Saúde",
    description: "Pesquisa e desenvolve tecnologias para aprimorar o corpo humano biologicamente.",
    salary: "R$ 14.000 - R$ 28.000",
    skills: ["Biotecnologia", "Neurociência", "Genética", "Wearables"],
    growth: "Média",
    rating: 4.6,
  },
];

export default function ProfessionList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [professions, setProfessions] = useState(professionsData);

  const handleVote = (id:number, newRating:number) => {
    setProfessions((prevProfessions) =>
      prevProfessions.map((p) =>
        p.id === id ? { ...p, rating: (p.rating + newRating) / 2 } : p
      )
    );
  };

  const filteredProfessions = professions.filter((p) =>
    (category === "Todas" || p.category === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
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
            <h2 className="text-xl font-bold">{p.name}</h2>
            <p className="text-sm text-gray-500">{p.category}</p>
            <p className="text-gray-700 mt-2">{p.description}</p>
            <p className="text-green-600 font-semibold mt-2">💰 Salário: {p.salary}</p>
            <p className="text-blue-500">📈 Crescimento: {p.growth}</p>
            <p className="mt-2"><strong>Habilidades:</strong> {p.skills.join(", ")}</p>

            <RatingStars rating={p.rating} />

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
const RatingStars = ({ rating}) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
  ));
  return <div className="mt-2">{stars}</div>;
};
