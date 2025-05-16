// components/movie_page/MoviePlayer.tsx
'use client';

import { useEffect, useRef } from 'react';

interface Props {
    url: string;
}

export default function MoviePlayer({ url }: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                videoRef.current?.paused
                    ? videoRef.current.play()
                    : videoRef.current?.pause();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    return (
        <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-xl relative group">
            <video
                ref={videoRef}
                controls
                className="w-full h-full object-cover"
                src={url}
                poster="/placeholder.jpg"
            >
                <track kind="captions" srcLang="en" label="English" />
            </video>

            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        </div>
    );
}