export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  image: string;
  videoUrl: string;
  instructions: string[];
  safetyTips: string[];
  repetitions: string;
  duration?: string;
}

export type MuscleGroup = 
  | 'pernas'
  | 'bracos'
  | 'costas'
  | 'peito'
  | 'abdomen';