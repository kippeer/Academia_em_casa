import React from 'react';
import { Activity } from 'lucide-react';

interface ProgressBarProps {
  favoritesCount: number;
  totalExercises: number;
}

export function ProgressBar({ favoritesCount, totalExercises }: ProgressBarProps) {
  const progress = (favoritesCount / totalExercises) * 100;

  return (
    <>
      <div className="flex items-center gap-2 justify-center mb-2">
        <Activity size={20} />
        <div className="text-sm">
          Progresso dos Favoritos: {favoritesCount} de {totalExercises} exercícios
        </div>
      </div>
      <div className="w-full bg-blue-700 rounded-full h-2">
        <div
          className="bg-white rounded-full h-2 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
}