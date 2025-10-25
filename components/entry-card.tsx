'use client';
export const EntryCard = ({ entry }: any) => (
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-rose-100">
    <h3 className="text-lg font-semibold text-rose-700">{entry.mood}</h3>
    <p className="text-slate-600 text-sm mt-1">{entry.date}</p>
    <p className="mt-3 text-slate-700">{entry.notes}</p>
  </div>
);
