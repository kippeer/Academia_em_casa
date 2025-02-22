import React from 'react';
import { MuscleGroup } from '../types';

interface MuscleGroupSelectorProps {
  selectedMuscleGroup: MuscleGroup | 'todos';
  onMuscleGroupChange: (group: MuscleGroup | 'todos') => void;
  exerciseCountByGroup: Record<string, number>;
}

export const muscleGroups: { id: MuscleGroup | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'pernas', label: 'Pernas' },
  { id: 'bracos', label: 'Braços' },
  { id: 'costas', label: 'Costas' },
  { id: 'peito', label: 'Peito' },
  { id: 'abdomen', label: 'Abdômen' },
];

export function MuscleGroupSelector({
  selectedMuscleGroup,
  onMuscleGroupChange,
  exerciseCountByGroup,
}: MuscleGroupSelectorProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-8">
      {muscleGroups.map(group => (
        <button
          key={group.id}
          onClick={() => onMuscleGroupChange(group.id)}
          className={`px-4 py-2 rounded-lg transition-colors flex flex-col items-center ${
            selectedMuscleGroup === group.id
              ? 'bg-blue-600 text-white'
              : 'bg-white text-blue-600 hover:bg-blue-50'
          }`}
        >
          <span>{group.label}</span>
          {group.id !== 'todos' && (
            <span className="text-sm opacity-75">
              {exerciseCountByGroup[group.id] || 0} exercícios
            </span>
          )}
        </button>
      ))}
    </div>
  );
}