import React from 'react';
import { Dumbbell } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <Dumbbell size={32} />
      <h1 className="text-3xl font-bold">Treino em Casa</h1>
    </div>
  );
}