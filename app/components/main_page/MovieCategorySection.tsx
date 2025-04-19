// components/MovieCategorySection.tsx
import React from 'react';
import { Movie } from '../../utils/movieData/types';
import { MovieCard } from '../movie_bar/MovieCard';

interface MovieCategorySectionProps {
  title: string;
  movies: Movie[];
  variant?: 'default' | 'compact';
}

export const MovieCategorySection = ({ 
  title, 
  movies,
  variant = 'default' 
}: MovieCategorySectionProps) => {
  return (
    <section className={`mt-6 px-4 ${variant === 'compact' ? 'mb-8' : 'mb-12'}`}>
      <h2 className={`${variant === 'compact' ? 'text-xl' : 'text-2xl'} font-bold text-white mb-4`}>
        {title}
      </h2>
      
      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie}
            variant={variant}
          />
        ))}
      </div>
    </section>
  );
};