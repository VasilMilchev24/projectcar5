
"use client"

import React from "react";
import { MovieCategorySection } from '../components/main_page/MovieCategorySection';
//import { TRENDING_MOVIES} from '../utils/movieData';
import SearchBar from '@/app/components/welcome_page/searchbar/SearchBar';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/app/lib/session/SessionContext";
import { useAllMedia } from "@/app/(root)/hooks/useAllMedia";

const Home:React.FC =()=> {

  const router = useRouter();
  const { session, loading } = useSession();
  const { media, mediaLoading, error } = useAllMedia();

  useEffect(() => {
    if (!loading && session?.isLoggedIn) {
      router.push("/main_page");
    }
  }, [session, loading, router]);

  if (loading || mediaLoading)     
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 gap-4">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <span className="text-white text-lg">Loading your experience...</span>
      </div>
    );

  return (
    <main className="bg-gray-900 min-h-screen">
      <div className="pt-16 bg-gray-900"> {/* Added padding for navbar */}
        <SearchBar />
        <MovieCategorySection
        title="Trending Now"
        movies={media.filter((movie) => movie.is_trending_now)}
      />      
      </div>
    </main>
  )
};

export default Home;

