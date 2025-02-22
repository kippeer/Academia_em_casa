import React from 'react';
import { Heart, Clock, BarChart2 } from 'lucide-react';
import { Exercise } from '../types';

interface ExerciseCardProps {
  exercise: Exercise;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function ExerciseCard({
  exercise,
  isFavorite,
  onToggleFavorite,
}: ExerciseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img
          src={exercise.image}
          alt={exercise.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => onToggleFavorite(exercise.id)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-red-500 hover:text-red-600 transition-colors"
          aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          <Heart className={isFavorite ? "fill-current" : ""} size={24} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{exercise.name}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4 text-gray-600">
          <Clock size={18} />
          <span>{exercise.repetitions}</span>
        </div>
        
        <div className="relative mb-6 pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
            src={exercise.videoUrl}
            title={`Vídeo: ${exercise.name}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-2 text-blue-600 flex items-center gap-2">
              <BarChart2 size={18} />
              Instruções:
            </h4>
            <ol className="list-decimal list-inside space-y-2">
              {exercise.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-700">{instruction}</li>
              ))}
            </ol>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2 text-blue-600">Dicas de Segurança:</h4>
            <ul className="list-disc list-inside space-y-2">
              {exercise.safetyTips.map((tip, index) => (
                <li key={index} className="text-gray-700">{tip}</li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-lg text-blue-600">Repetições Recomendadas:</h4>
            <p className="text-gray-700 mt-1">{exercise.repetitions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}