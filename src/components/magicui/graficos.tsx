"use client";  // <--- Adicione isso no início do arquivo

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const jobGrowthData = [
  { year: 2025, IA: 20, Biohacking: 10, Sustentabilidade: 15 },
  { year: 2030, IA: 40, Biohacking: 30, Sustentabilidade: 35 },
  { year: 2035, IA: 60, Biohacking: 55, Sustentabilidade: 50 },
  { year: 2040, IA: 80, Biohacking: 75, Sustentabilidade: 65 },
];

export default function TendenciasGraficos() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">📊 Crescimento das Profissões do Futuro</h2>
      
      {/* Gráfico de Linhas */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={jobGrowthData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis label={{ value: "Crescimento (%)", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="IA" stroke="#8884d8" name="Especialista em IA" />
          <Line type="monotone" dataKey="Biohacking" stroke="#82ca9d" name="Biohacking" />
          <Line type="monotone" dataKey="Sustentabilidade" stroke="#ffc658" name="Sustentabilidade" />
        </LineChart>
      </ResponsiveContainer>

      {/* Gráfico de Barras */}
      <h2 className="text-2xl font-bold mt-6 mb-4">📈 Profissões Emergentes</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={jobGrowthData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="IA" fill="#8884d8" name="Especialista em IA" />
          <Bar dataKey="Biohacking" fill="#82ca9d" name="Biohacking" />
          <Bar dataKey="Sustentabilidade" fill="#ffc658" name="Sustentabilidade" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
