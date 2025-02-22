import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { FilterPanel } from './components/FilterPanel';
import { ProgressBar } from './components/ProgressBar';
import { MuscleGroupSelector } from './components/MuscleGroupSelector';
import { ExerciseList } from './components/ExerciseList';
import { exercises } from './data/exercises';
import { useFavorites } from './hooks/useFavorites';
import { useExerciseFilters } from './hooks/useExerciseFilters';

function App() {
  const [showFilters, setShowFilters] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();
  const {
    filters,
    setSelectedMuscleGroup,
    setSearchTerm,
    setShowOnlyFavorites,
    setSortBy,
    filteredExercises,
    exerciseCountByGroup,
  } = useExerciseFilters(exercises, favorites);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <Header />
          
          <SearchBar
            searchTerm={filters.searchTerm}
            onSearchChange={setSearchTerm}
            showOnlyFavorites={filters.showOnlyFavorites}
            onToggleFavorites={() => setShowOnlyFavorites(!filters.showOnlyFavorites)}
            showFilters={showFilters}
            onToggleFilters={() => setShowFilters(!showFilters)}
          />

          {showFilters && (
            <FilterPanel
              sortBy={filters.sortBy}
              onSortChange={setSortBy}
              filteredCount={filteredExercises.length}
              totalExercises={exercises.length}
            />
          )}

          <ProgressBar
            favoritesCount={favorites.length}
            totalExercises={exercises.length}
          />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <MuscleGroupSelector
          selectedMuscleGroup={filters.selectedMuscleGroup}
          onMuscleGroupChange={setSelectedMuscleGroup}
          exerciseCountByGroup={exerciseCountByGroup}
        />

        <ExerciseList
          exercises={filteredExercises}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </main>
    </div>
  );
}

export default App;