"use client";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend,
  ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area
} from "recharts";

const techTrendsData = [
  { year: "2019", IA: 20, Cybersecurity: 25, Cloud: 30, Blockchain: 10, IoT: 15, VR: 5 },
  { year: "2020", IA: 35, Cybersecurity: 40, Cloud: 45, Blockchain: 15, IoT: 25, VR: 10 },
  { year: "2021", IA: 50, Cybersecurity: 55, Cloud: 60, Blockchain: 25, IoT: 40, VR: 20 },
  { year: "2022", IA: 70, Cybersecurity: 65, Cloud: 80, Blockchain: 35, IoT: 55, VR: 30 },
  { year: "2023", IA: 90, Cybersecurity: 85, Cloud: 100, Blockchain: 50, IoT: 75, VR: 45 },
];

const futureTrendsData = [
  { year: "2024", IA: 100, Cybersecurity: 95, Cloud: 110, Blockchain: 55, IoT: 85, VR: 55 },
  { year: "2025", IA: 120, Cybersecurity: 110, Cloud: 130, Blockchain: 65, IoT: 100, VR: 70 },
  { year: "2026", IA: 150, Cybersecurity: 130, Cloud: 160, Blockchain: 80, IoT: 120, VR: 90 },
  { year: "2027", IA: 180, Cybersecurity: 150, Cloud: 190, Blockchain: 100, IoT: 140, VR: 110 },
];

const marketShareData = [
  { name: "IA", value: 30 },
  { name: "Cibersegurança", value: 20 },
  { name: "Cloud", value: 25 },
  { name: "Blockchain", value: 10 },
  { name: "IoT", value: 10 },
  { name: "VR/AR", value: 5 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8a2be2", "#ff69b4"];

export default function TendenciasGraficos() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">📊 Crescimento de Áreas Tecnológicas</h2>

      {/* Gráfico de Barras */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-center">🚀 Crescimento Anual</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={techTrendsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="IA" fill="#8884d8" name="Inteligência Artificial" />
            <Bar dataKey="Cybersecurity" fill="#82ca9d" name="Cibersegurança" />
            <Bar dataKey="Cloud" fill="#ffc658" name="Computação em Nuvem" />
            <Bar dataKey="Blockchain" fill="#ff8042" name="Blockchain" />
            <Bar dataKey="IoT" fill="#8a2be2" name="Internet das Coisas" />
            <Bar dataKey="VR" fill="#ff69b4" name="Realidade Virtual/Aumentada" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de Linha */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-center">📈 Projeção de Demanda</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={futureTrendsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="IA" stroke="#8884d8" name="Inteligência Artificial" />
            <Line type="monotone" dataKey="Cybersecurity" stroke="#82ca9d" name="Cibersegurança" />
            <Line type="monotone" dataKey="Cloud" stroke="#ffc658" name="Computação em Nuvem" />
            <Line type="monotone" dataKey="Blockchain" stroke="#ff8042" name="Blockchain" />
            <Line type="monotone" dataKey="IoT" stroke="#8a2be2" name="Internet das Coisas" />
            <Line type="monotone" dataKey="VR" stroke="#ff69b4" name="Realidade Virtual/Aumentada" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de Pizza */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-center">🌍 Participação de Mercado em 2024</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={marketShareData} cx="50%" cy="50%" label outerRadius={100} fill="#8884d8" dataKey="value">
              {marketShareData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de Área */}
      <div>
        <h3 className="text-xl font-semibold mb-2 text-center">📊 Crescimento Acumulado das Tecnologias</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={futureTrendsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="IA" stroke="#8884d8" fill="#8884d8" name="Inteligência Artificial" />
            <Area type="monotone" dataKey="Cybersecurity" stroke="#82ca9d" fill="#82ca9d" name="Cibersegurança" />
            <Area type="monotone" dataKey="Cloud" stroke="#ffc658" fill="#ffc658" name="Computação em Nuvem" />
            <Area type="monotone" dataKey="Blockchain" stroke="#ff8042" fill="#ff8042" name="Blockchain" />
            <Area type="monotone" dataKey="IoT" stroke="#8a2be2" fill="#8a2be2" name="Internet das Coisas" />
            <Area type="monotone" dataKey="VR" stroke="#ff69b4" fill="#ff69b4" name="Realidade Virtual/Aumentada" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
