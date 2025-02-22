import React, { useState, useEffect } from 'react';
import { Dumbbell, Search, Star, StarOff, Activity, Filter, Clock } from 'lucide-react';
import { ExerciseCard } from './components/ExerciseCard';
import { exercises } from './data/exercises';
import { MuscleGroup } from './types';

function App() {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<MuscleGroup | 'todos'>('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [sortBy, setSortBy] = useState<'name' | 'muscleGroup'>('name');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const muscleGroups: { id: MuscleGroup | 'todos'; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'pernas', label: 'Pernas' },
    { id: 'bracos', label: 'Braços' },
    { id: 'costas', label: 'Costas' },
    { id: 'peito', label: 'Peito' },
    { id: 'abdomen', label: 'Abdômen' },
  ];

  const exerciseCountByGroup = exercises.reduce((acc, exercise) => {
    acc[exercise.muscleGroup] = (acc[exercise.muscleGroup] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const filteredExercises = exercises
    .filter(exercise => 
      selectedMuscleGroup === 'todos' || exercise.muscleGroup === selectedMuscleGroup
    )
    .filter(exercise =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(exercise =>
      !showOnlyFavorites || favorites.includes(exercise.id)
    )
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return a.muscleGroup.localeCompare(b.muscleGroup);
      }
    });

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  const favoritesProgress = (favorites.length / exercises.length) * 100;
  const totalExercises = exercises.length;
  const filteredCount = filteredExercises.length;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Dumbbell size={32} />
            <h1 className="text-3xl font-bold">Treino em Casa</h1>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar exercícios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-400 transition-colors"
              >
                {showOnlyFavorites ? <StarOff size={20} /> : <Star size={20} />}
                {showOnlyFavorites ? 'Mostrar Todos' : 'Mostrar Favoritos'}
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-400 transition-colors"
              >
                <Filter size={20} />
                Filtros
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="bg-blue-700 rounded-lg p-4 mb-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span className="text-sm">Ordenar por:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'name' | 'muscleGroup')}
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
          )}

          <div className="flex items-center gap-2 justify-center mb-2">
            <Activity size={20} />
            <div className="text-sm">
              Progresso dos Favoritos: {favorites.length} de {exercises.length} exercícios
            </div>
          </div>
          <div className="w-full bg-blue-700 rounded-full h-2">
            <div
              className="bg-white rounded-full h-2 transition-all duration-300"
              style={{ width: `${favoritesProgress}%` }}
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-8">
          {muscleGroups.map(group => (
            <button
              key={group.id}
              onClick={() => setSelectedMuscleGroup(group.id)}
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

        {filteredExercises.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-xl text-gray-600">
              Nenhum exercício encontrado para os filtros selecionados.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExercises.map(exercise => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                isFavorite={favorites.includes(exercise.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;