// app/(root)/movie_page/[id]/error.tsx
'use client';

export default function ErrorBoundary({ error }: { error: Error }) {
    return (
        <div className="container mx-auto px-4 py-8 text-red-500">
            <h2 className="text-2xl font-bold">Movie Loading Failed</h2>
            <p className="mt-4">{error.message}</p>
            <p className="mt-2">Please try refreshing the page</p>
        </div>
    );
}