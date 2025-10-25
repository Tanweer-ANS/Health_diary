'use client';
import { ChartBot } from '@/components/chart-bot';
import { TextAnalysis } from '@/components/text-analysis';
import { EntryCard } from '@/components/entry-card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  const dummyEntries = [
    { id: 1, mood: 'Happy', date: '2025-10-25', notes: 'Had a peaceful walk' },
    { id: 2, mood: 'Tired', date: '2025-10-24', notes: 'Less sleep but feeling ok' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-rose-700">Your Health Journal</h1>
        <Button
          onClick={() => router.push('/journal/new')}
          className="bg-rose-500 hover:bg-rose-600 text-white flex items-center gap-2"
        >
          <Plus className="w-5 h-5" /> New Entry
        </Button>
      </div>

      {/* Entries */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyEntries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </div>

      {/* Charts & Insights */}
      <div className="grid md:grid-cols-2 gap-6">
        <ChartBot entries={dummyEntries} />
        <TextAnalysis />
      </div>
    </div>
  );
}
