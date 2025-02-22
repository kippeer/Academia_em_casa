import React from 'react';
import { Search, Star, StarOff, Filter } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  showOnlyFavorites: boolean;
  onToggleFavorites: () => void;
  showFilters: boolean;
  onToggleFilters: () => void;
}

export function SearchBar({
  searchTerm,
  onSearchChange,
  showOnlyFavorites,
  onToggleFavorites,
  showFilters,
  onToggleFilters,
}: SearchBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-4">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Buscar exercícios..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={onToggleFavorites}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-400 transition-colors"
        >
          {showOnlyFavorites ? <StarOff size={20} /> : <Star size={20} />}
          {showOnlyFavorites ? 'Mostrar Todos' : 'Mostrar Favoritos'}
        </button>
        <button
          onClick={onToggleFilters}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-400 transition-colors"
        >
          <Filter size={20} />
          Filtros
        </button>
      </div>
    </div>
  );
}