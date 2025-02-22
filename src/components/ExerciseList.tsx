import React from 'react';
import { ExerciseCard } from './ExerciseCard';
import { Exercise } from '../types';

interface ExerciseListProps {
  exercises: Exercise[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export function ExerciseList({ exercises, favorites, onToggleFavorite }: ExerciseListProps) {
  if (exercises.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-xl text-gray-600">
          Nenhum exercício encontrado para os filtros selecionados.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {exercises.map(exercise => (
        <ExerciseCard
          key={exercise.id}
          exercise={exercise}
          isFavorite={favorites.includes(exercise.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}