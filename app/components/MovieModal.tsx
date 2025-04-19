// components/MovieModal.tsx
'use client';

import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { Movie } from "../utils/movies";
import { X } from "lucide-react";

const getYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export const MovieModal = ({ movie, onClose }: { movie: Movie | null; onClose: () => void }) => {
  const [videoId, setVideoId] = useState<string | null>(null);
  
  useEffect(() => {
    if (movie?.trailerUrl) {
      const id = getYouTubeId(movie.trailerUrl);
      setVideoId(id);
    }
  }, [movie]);

  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-neutral-900 rounded-xl max-w-4xl w-full overflow-hidden">
        <div className="relative">
          {/* Close Button - Updated styling */}
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 z-50 text-white hover:text-neutral-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 flex flex-col">
              {/* Trailer/Image Section */}
              {videoId ? (
                <YouTube
                  videoId={videoId}
                  opts={{
                    width: '100%',
                    height: '360',
                    playerVars: {
                      autoplay: 0,
                      modestbranding: 1,
                      rel: 0
                    }
                  }}
                  className="youtube-container"
                />
              ) : (
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/notavbl.webp";
                  }}
                />
              )}

              {/* Cast Section */}
              {movie.cast && movie.cast.length > 0 && (
                <div className="p-4 border-t border-neutral-800">
                  <h3 className="text-lg font-semibold text-white mb-2">Starring</h3>
                  <div className="flex flex-wrap gap-2">
                    {movie.cast.map((actor, index) => (
                      <span 
                        key={index}
                        className="text-neutral-300 text-sm"
                      >
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="p-6 md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-white">{movie.title}</h2>
              <div className="flex gap-2 text-neutral-400 flex-wrap">
                <p>{movie.year}</p>
                {movie.genre && <p>{movie.genre}</p>}
                {movie.duration && <p>{movie.duration}</p>}
              </div>
              
              <p className="text-neutral-300 whitespace-pre-line">
                {movie.description || "No description available."}
              </p>

              <div className="space-y-3 mt-4">
                <button
                  onClick={() => console.log('Start watching', movie.id)}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
                >
                  Watch Full Movie
                </button>
                {movie.trailerUrl && (
                  <p className="text-neutral-400 text-sm">
                    Trailer
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};