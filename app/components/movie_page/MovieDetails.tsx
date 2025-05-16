// app/components/MoviePage/MovieDetails.tsx
interface Props {
    description: string;
    cast: string[];
    director: string;
    rating: string;
}

export default function MovieDetails({
    description,
    cast,
    director,
    rating,
}: Props) {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <div className="flex justify-between items-center mb-4">
                <div className="badge badge-accent p-4">{rating} Rating</div>
                <div className="text-sm text-gray-400">
                    Directed by {director}
                </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

            <div className="border-t border-gray-700 pt-4">
                <h3 className="text-lg font-bold mb-3">Starring</h3>
                <div className="flex flex-wrap gap-2">
                    {cast.map((actor) => (
                        <span
                            key={actor}
                            className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                            {actor}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}