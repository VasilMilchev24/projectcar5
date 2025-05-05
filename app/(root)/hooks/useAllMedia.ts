
"use client"

import { useEffect, useState } from "react";
import { Movie } from "@/app/utils/movieData/types"

export const useAllMedia = () => {

  const [media, setMedia]               = useState<Movie[]>([]);
  const [mediaLoading, setMediaLoading] = useState(false);
  const [error, setError]               = useState<string | null>(null);

  useEffect(() => {

    const fetchAllMedia = async () => {

      setMediaLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/get-all-media", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const responseData = await response.json();

        if(!response.ok)
        {
            setError(responseData.error);
            return;
        }

        const mediaData : Movie[] = responseData;
        setMedia(mediaData);

      } catch (err: any) {
        setError("Something went wrong.");
      } finally {
        setMediaLoading(false);
      }
    };

     fetchAllMedia();
   }, []);

  return { media, mediaLoading, error };
};