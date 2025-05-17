// app/movie_page/[id]/page.tsx
import { prisma } from '@/app/lib/prisma';
import MoviePlayer from '@/app/components/movie_page/MoviePlayer';
import MovieDetails from '@/app/components/movie_page/MovieDetails';
import MovieHeader from '@/app/components/movie_page/MovieHeader';

interface PageProps {
    params: {
        id: string  // Must be string type for Next.js dynamic route
    };
}

export default async function MoviePage({ params }: PageProps) {
    const { id } = await params;
    // Convert string ID to number for database query
    const numericId = Number(id);

    // Fetch movie with relations
    const movie = await prisma.media.findUnique({
        where: { ID: numericId },
        include: {
            GENRE: true,
            ACTORS: true
        }
    });

    // Handle missing movie
    if (!movie) {
        return (
            <div className="text-center py-20">
                Movie not found
            </div>
        );
    }


    return (
        <main className="min-h-screen bg-gray-900"> {/* Added background */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2">
                        <MoviePlayer url={movie.TRAILER_URL} />
                        <MovieHeader
                            title={movie.NAME}
                            releaseYear={movie.RELEASE_YEAR}
                            genre={movie.GENRE.NAME}
                            duration={movie.DURATION}
                        />
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-1">
                        <MovieDetails
                            description={movie.DESCRIPTION}
                            cast={movie.ACTORS.map(actor => actor.NAME)}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

// Static generation paths
export async function generateStaticParams() {
    const movies = await prisma.media.findMany();

    return movies.map((movie) => ({
        id: movie.ID.toString() // Must return string values
    }));
}