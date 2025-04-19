import React from 'react';
// components/SideScrollBar.tsx
import { TRENDING_MOVIES } from "../../../utils/movies_tredning_now";
import { MovieCard } from "./MovieCard";

export const TrendingNowBar = () => {
  return (
    <section className="mt-6 px-4">
      <h2 className="text-2xl font-bold text-white mb-4">Trending now</h2>
      
      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
        {TRENDING_MOVIES.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default TrendingNowBar;