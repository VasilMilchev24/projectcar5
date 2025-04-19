// components/MovieModal.tsx
'use client';

import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { Movie } from '../../utils/movieData/types';
import { X } from "lucide-react";

interface MovieModalProps {
  movie: Movie;
  isOpen: boolean;
  onClose: () => void;
}

const getYouTubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export const MovieModal = ({ movie, isOpen, onClose }: MovieModalProps) => {
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    if (movie.trailerUrl) {
      const id = getYouTubeId(movie.trailerUrl);
      setVideoId(id);
    }
  }, [movie]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-neutral-900 rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl">
        <div className="relative">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 z-50 text-white hover:text-neutral-300 transition-colors"
            aria-label="Close movie details"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="flex flex-col md:flex-row">
            {/* Left Column - Media & Cast */}
            <div className="md:w-1/2 flex flex-col">
              {/* Trailer or Poster */}
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
                    const target = e.target as HTMLImageElement;
                    target.src = "/notavbl.webp";
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
                        className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300"
                      >
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Details */}
            <div className="p-6 md:w-1/2 space-y-4 overflow-y-auto max-h-[80vh]">
              <h2 className="text-3xl font-bold text-white">{movie.title}</h2>
              
              {/* Metadata */}
              <div className="flex gap-2 text-neutral-400 flex-wrap">
                {movie.year && <p>{movie.year}</p>}
                {movie.genre && <p>• {movie.genre}</p>}
                {movie.duration && <p>• {movie.duration}</p>}
              </div>

              {/* Description */}
              <p className="text-neutral-300 whitespace-pre-line">
                {movie.description || "No description available."}
              </p>

              {/* Action Buttons */}
              <div className="space-y-3 mt-4">
                <button
                  onClick={() => console.log('Watch full movie:', movie.id)}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
                >
                  Watch Full Movie
                </button>
                
                {movie.trailerUrl && (
                  <button
                    onClick={() => window.open(movie.trailerUrl, '_blank')}
                    className="w-full py-2 border border-neutral-600 text-neutral-300 hover:border-neutral-400 hover:text-white rounded-lg transition-colors"
                  >
                    Watch Trailer
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};