import Navbar from '@/app/components/navbar/Navbar';
import { MovieCategorySection } from '../../components/main_page/MovieCategorySection';
import { TRENDING_MOVIES, TOP_ACTION_MOVIES, TOP_ADVENTURE_MOVIES, TOP_COMEDY_MOVIES, TOP_SCI_FI_MOVIES } from '../../utils/movieData';
import SearchBar from '@/app/components/welcome_page/searchbar/SearchBar';

export default function MainPage() {
  return (
    <div className="bg-gray-900 min-h-screen">

      
      <SearchBar />
      {/* Your header components */}
      
      <MovieCategorySection
        title="Trending Now"
        movies={TRENDING_MOVIES}
      />
      
      <MovieCategorySection
        title="Top Action Movies"
        movies={TOP_ACTION_MOVIES}
        variant="compact"
      />

      <MovieCategorySection
        title="Top Action Movies"
        movies={TOP_ADVENTURE_MOVIES}
        variant="compact"
      />

      <MovieCategorySection
        title="Top Action Movies"
        movies={TOP_COMEDY_MOVIES}
        variant="compact"
      />

      <MovieCategorySection
        title="Top Action Movies"
        movies={TOP_SCI_FI_MOVIES}
        variant="compact"
      />
    </div>
  );
}