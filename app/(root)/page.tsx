import React from "react";

import { MovieCategorySection } from '../components/main_page/MovieCategorySection';
import { TRENDING_MOVIES} from '../utils/movieData';
import SearchBar from '@/app/components/welcome_page/searchbar/SearchBar';

const Home:React.FC =()=> {
  return (
    <main className="bg-gray-900 min-h-screen">
      <div className="pt-16 bg-gray-900"> {/* Added padding for navbar */}
        <SearchBar />
        <MovieCategorySection
        title="Trending Now"
        movies={TRENDING_MOVIES}
      />      
      </div>
    </main>
  )
};

export default Home;

