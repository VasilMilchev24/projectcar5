// app/(root)/movie_page/[id]/loading.tsx
// a loading skeleton while the movie data is being fetched
export default function Loading() {
    return (
        <div className="animate-pulse container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    <div className="aspect-video bg-gray-800 rounded-xl" />
                    <div className="h-8 bg-gray-800 rounded w-3/4" />
                    <div className="h-4 bg-gray-800 rounded w-1/2" />
                </div>
                <div className="lg:col-span-1">
                    <div className="h-96 bg-gray-800 rounded-xl" />
                </div>
            </div>
        </div>
    );
}