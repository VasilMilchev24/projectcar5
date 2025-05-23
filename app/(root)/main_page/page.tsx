
"use client"

import { MovieCategorySection } from '../../components/main_page/MovieCategorySection';
//import { TRENDING_MOVIES, TOP_ACTION_MOVIES, TOP_ADVENTURE_MOVIES, TOP_COMEDY_MOVIES, TOP_SCI_FI_MOVIES } from '../../utils/movieData';
import SearchBar from '@/app/components/welcome_page/searchbar/SearchBar';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/app/lib/session/SessionContext";
import { useAllMedia } from "@/app/(root)/hooks/useAllMedia";

export default function MainPage() {

  const { session, loading } = useSession();
  const router = useRouter();
  const { media, mediaLoading, error } = useAllMedia();

  useEffect(() => {
    if (!loading && !session?.isLoggedIn) {
      router.push("/"); 
    }
  }, [session, loading, router]);

  if (loading || !session?.isLoggedIn || mediaLoading) 
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 gap-4">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <span className="text-white text-lg">Loading your experience...</span>
      </div>
    );

  return (
    <div className="bg-gray-900 min-h-screen">

      
      <SearchBar />
      {/* Your header components */}
      
      <MovieCategorySection
        title="Trending Now"
        movies={media.filter((movie) => movie.is_trending_now)}
      />
      
      <MovieCategorySection
        title="Top Action Movies"
        movies={media.filter((movie) => movie.genre === 'Action').sort((a, b) => b.rating - a.rating).slice(0, 10)}
        variant="compact"
      />

      <MovieCategorySection
        title="Top Adventure Movies"
        movies={media.filter((movie) => movie.genre === 'Adventure').sort((a, b) => b.rating - a.rating).slice(0, 10)}
        variant="compact"
      />

      <MovieCategorySection
        title="Top Comedy Movies"
        movies={media.filter((movie) => movie.genre === 'Comedy').sort((a, b) => b.rating - a.rating).slice(0, 10)}
        variant="compact"
      />

      <MovieCategorySection
        title="Top Fantasy Movies"
        movies={media.filter((movie) => movie.genre === 'Fantasy').sort((a, b) => b.rating - a.rating).slice(0, 10)}
        variant="compact"
      />
    </div>
  );
}