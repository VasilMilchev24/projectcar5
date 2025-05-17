export interface Movie {
    id                : number;
    title             : string;
    year              : string;
    imageUrl          : string;
    genre?            : string;
    rating            : number;
    duration?         : string;
    description?      : string;
    trailerUrl?       : string;
    hostUrl?          : string;
    cast?             : string[];
    is_trending_now   : boolean;
  }