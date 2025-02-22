import React from 'react';
import { Clock } from 'lucide-react';

interface FilterPanelProps {
  sortBy: 'name' | 'muscleGroup';
  onSortChange: (value: 'name' | 'muscleGroup') => void;
  filteredCount: number;
  totalExercises: number;
}

export function FilterPanel({
  sortBy,
  onSortChange,
  filteredCount,
  totalExercises,
}: FilterPanelProps) {
  return (
    <div className="bg-blue-700 rounded-lg p-4 mb-4">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock size={18} />
          <span className="text-sm">Ordenar por:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as 'name' | 'muscleGroup')}
            className="bg-blue-600 text-white border border-blue-400 rounded px-2 py-1"
          >
            <option value="name">Nome</option>
            <option value="muscleGroup">Grupo Muscular</option>
          </select>
        </div>
        <div className="text-sm">
          Mostrando {filteredCount} de {totalExercises} exercícios
        </div>
      </div>
    </div>
  );
}