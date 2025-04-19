// components/MovieCard.tsx
'use client';

import { useState } from 'react';
import { Movie } from "../utils/movies";
import { MovieModal } from "./MovieModal"; // Make sure to create this component

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="flex-shrink-0 w-48 hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg">
          <img
            src={movie.imageUrl}
            alt={`${movie.title} poster`}
            className="w-full h-64 object-cover"
            onError={(e) => {
              e.currentTarget.src = "/notavbl.webp";
            }}
          />
          <div className="p-3 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white font-medium truncate">{movie.title}</h3>
            <p className="text-neutral-400 text-sm mt-1">{movie.year}</p>
          </div>
        </div>
      </div>

      {/* Movie Modal */}
      {isModalOpen && (
        <MovieModal
          movie={movie}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};