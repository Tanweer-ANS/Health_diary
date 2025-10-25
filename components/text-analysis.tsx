'use client';
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export const TextAnalysis = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const analyze = () => {
    setResult('✨ You’re showing a positive, mindful tone today. Keep it up!');
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold mb-2 text-rose-700">AI Journal Insight</h3>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your thoughts..."
        className="mb-3"
      />
      <Button onClick={analyze} className="bg-rose-500 hover:bg-rose-600 text-white w-full">
        Analyze
      </Button>
      {result && <p className="mt-4 text-slate-700">{result}</p>}
    </div>
  );
};
