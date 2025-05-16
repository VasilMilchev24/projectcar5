interface Props {
    title: string;
    releaseYear: number;
    genre: string;
    duration: number;
}

export default function MovieHeader({
    title,
    releaseYear,
    genre,
    duration,
}: Props) {
    return (
        <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <div className="flex gap-4 text-gray-400">
                <span>{releaseYear}</span>
                <span>•</span>
                <span>{genre}</span>
                <span>•</span>
                <span>{duration} mins</span>
            </div>
        </div>
    );
}