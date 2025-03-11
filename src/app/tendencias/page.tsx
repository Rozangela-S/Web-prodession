"use client";
import React from "react";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend,
  ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";

const futureTrendsData = [
  { year: "2024", IA: 100, Cybersecurity: 95, Cloud: 110, Blockchain: 55, IoT: 85, VR: 55 },
  { year: "2025", IA: 125, Cybersecurity: 111, Cloud: 130, Blockchain: 66, IoT: 99, VR: 67 },
  { year: "2026", IA: 156, Cybersecurity: 130, Cloud: 153, Blockchain: 79, IoT: 115, VR: 82 },
  { year: "2027", IA: 195, Cybersecurity: 152, Cloud: 181, Blockchain: 95, IoT: 133, VR: 100 },
  { year: "2028", IA: 244, Cybersecurity: 178, Cloud: 214, Blockchain: 114, IoT: 154, VR: 122 },
  { year: "2029", IA: 305, Cybersecurity: 208, Cloud: 253, Blockchain: 137, IoT: 179, VR: 149 },
  { year: "2030", IA: 381, Cybersecurity: 243, Cloud: 298, Blockchain: 164, IoT: 208, VR: 182 },
];

const marketShareData = [
  { name: "IA", value: 30 },
  { name: "Cibersegurança", value: 20 },
  { name: "Cloud", value: 25 },
  { name: "Blockchain", value: 10 },
  { name: "CD", value: 10 },
  { name: "VR/AR", value: 5 },
];

const COLORS = ["#1f15db", "#29c264", "#eba925", "#d85b1d", "#6c0ac7", "#d61073"];


export default function TendenciasGraficos() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">📊 Crescimento de Profissionais na Tecnologia</h2>

      {/* Gráfico de Barras */}
      <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2 text-center">📈 Projeção de Demanda de Profissionais</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={futureTrendsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis label={{ value: "Milhares de Profissionais", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="IA" fill="#1f15db" name="Inteligência Artificial" />
            <Bar dataKey="Cybersecurity" fill="#29c264" name="Cibersegurança" />
            <Bar dataKey="Cloud" fill="#eba925" name="Computação em Nuvem" />
            <Bar dataKey="Blockchain" fill="#d85b1d" name="Blockchain" />
            <Bar dataKey="IoT" fill="#6c0ac7" name="Ciência de dados" />
            <Bar dataKey="VR" fill="#d61073" name="Realidade Virtual/Aumentada" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de Linha */}
      <div className="mb-8">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={futureTrendsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis label={{ value: "Milhares de Profissionais", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="IA" stroke="#1f15db" name="Inteligência Artificial" />
            <Line type="monotone" dataKey="Cybersecurity" stroke="#29c264" name="Cibersegurança" />
            <Line type="monotone" dataKey="Cloud" stroke="#eba925" name="Computação em Nuvem" />
            <Line type="monotone" dataKey="Blockchain" stroke="#ff8042" name="Blockchain" />
            <Line type="monotone" dataKey="IoT" stroke="#6c0ac7" name="Ciência de Dados" />
            <Line type="monotone" dataKey="VR" stroke="#d61073" name="Realidade Virtual/Aumentada" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de Pizza */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-center">🌍 Participação de Mercado em 2024</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={marketShareData} cx="50%" cy="50%" label outerRadius={100} fill="#1f15db" dataKey="value">
              {marketShareData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
