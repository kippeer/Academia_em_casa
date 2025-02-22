export type MuscleGroup = 'pernas' | 'bracos' | 'costas' | 'peito' | 'abdomen' | 'corpo inteiro' | 'cardio' | 'glúteos' | 'abdômen oblíquo';

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  image: string;
  videoUrl: string;
  instructions: string[];
  safetyTips: string[];
  repetitions: string;
}