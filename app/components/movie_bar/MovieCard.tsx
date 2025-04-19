// components/MovieCard.tsx
'use client';

import { useState } from 'react';
import { Movie } from '../../utils/movieData/types';
import { MovieModal } from './MovieModal';

interface MovieCardProps {
  movie: Movie;
  variant?: 'default' | 'compact';
}

export const MovieCard = ({ movie, variant = 'default' }: MovieCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className={`flex-shrink-0 ${
          variant === 'compact' ? 'w-40' : 'w-48'
        } hover:scale-105 transition-transform duration-300 cursor-pointer`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg">
          <img
            src={movie.imageUrl}
            alt={`${movie.title} poster`}
            className={`w-full ${
              variant === 'compact' ? 'h-48' : 'h-64'
            } object-cover`}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/notavbl.webp";
            }}
          />
          <div className="p-3 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white font-medium truncate">{movie.title}</h3>
            <p className="text-neutral-400 text-sm mt-1">{movie.year}</p>
          </div>
        </div>
      </div>

      <MovieModal
        movie={movie}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};