// app/movie/[id]/page.tsx
import { prisma } from '@/lib/prisma';
import MoviePlayer from '@/components/movie_page/MoviePlayer';
import MovieDetails from '@/components/movie_page/MovieDetails';
import MovieHeader from '@/components/movie_page/MovieHeader';

interface PageProps {
    params: { id: string };
}

export default async function MoviePage({ params }: PageProps) {
    const movie = await prisma.movie.findUnique({
        where: { id: params.id },
    });

    if (!movie) {
        return <div className="text-center py-20">Movie not found</div>;
    }

    return (
        <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2">
                    <MovieHeader
                        title={movie.title}
                        releaseYear={movie.releaseYear}
                        genre={movie.genre}
                        duration={movie.duration}
                    />
                    <MoviePlayer url={movie.videoUrl} />
                </div>

                {/* Right Column */}
                <div className="lg:col-span-1">
                    <MovieDetails
                        description={movie.description}
                        cast={movie.cast}
                        director={movie.director}
                        rating={movie.rating}
                    />
                </div>
            </div>
        </main>
    );
}

// Optional: For static generation
export async function generateStaticParams() {
    const movies = await prisma.movie.findMany();
    return movies.map((movie) => ({ id: movie.id }));
}