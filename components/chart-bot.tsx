'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const ChartBot = ({ entries }: any) => {
  const data = entries.map((e: any) => ({ date: e.date, mood: e.mood.length }));

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-rose-700">Mood Trends</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="mood" fill="#f43f5e" radius={8} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
