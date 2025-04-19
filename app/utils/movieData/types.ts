export interface Movie {
    id: number;
    title: string;
    year: string;
    imageUrl: string;
    genre?: string;
    duration?: string;
    description?: string;
    trailerUrl?: string;
    cast?: string[];
  }