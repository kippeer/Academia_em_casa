import { useState, useMemo } from 'react';
import { Exercise, MuscleGroup } from '../types';

interface ExerciseFilters {
  selectedMuscleGroup: MuscleGroup | 'todos';
  searchTerm: string;
  showOnlyFavorites: boolean;
  sortBy: 'name' | 'muscleGroup';
}

export function useExerciseFilters(exercises: Exercise[], favorites: string[]) {
  const [filters, setFilters] = useState<ExerciseFilters>({
    selectedMuscleGroup: 'todos',
    searchTerm: '',
    showOnlyFavorites: false,
    sortBy: 'name',
  });

  const exerciseCountByGroup = useMemo(() => {
    return exercises.reduce((acc, exercise) => {
      acc[exercise.muscleGroup] = (acc[exercise.muscleGroup] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [exercises]);

  const filteredExercises = useMemo(() => {
    return exercises
      .filter(exercise => 
        filters.selectedMuscleGroup === 'todos' || exercise.muscleGroup === filters.selectedMuscleGroup
      )
      .filter(exercise =>
        exercise.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
      )
      .filter(exercise =>
        !filters.showOnlyFavorites || favorites.includes(exercise.id)
      )
      .sort((a, b) => {
        if (filters.sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else {
          return a.muscleGroup.localeCompare(b.muscleGroup);
        }
      });
  }, [exercises, favorites, filters]);

  return {
    filters,
    setSelectedMuscleGroup: (group: MuscleGroup | 'todos') => 
      setFilters(prev => ({ ...prev, selectedMuscleGroup: group })),
    setSearchTerm: (term: string) => 
      setFilters(prev => ({ ...prev, searchTerm: term })),
    setShowOnlyFavorites: (show: boolean) => 
      setFilters(prev => ({ ...prev, showOnlyFavorites: show })),
    setSortBy: (sort: 'name' | 'muscleGroup') => 
      setFilters(prev => ({ ...prev, sortBy: sort })),
    filteredExercises,
    exerciseCountByGroup,
  };
}