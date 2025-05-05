
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from "@/app/lib/prisma";

export async function GET(req: NextRequest) {

  try {
    
    const media = await prisma.media.findMany({
      include: {
        GENRE: true,  
        ACTORS: true,
      },
    });

    const mappedMedia = media.map(item => ({
      id                : item.ID,
      title             : item.NAME,
      year              : item.RELEASE_YEAR.toString(),
      imageUrl          : item.THUMBNAIL_URL,
      genre             : item.GENRE?.NAME ?? 'Unknown',
      duration          : `${Math.floor(item.DURATION / 60)}h ${item.DURATION % 60}m`,
      description       : item.DESCRIPTION,
      trailerUrl        : item.TRAILER_URL,
      cast              : item.ACTORS.map(actor => actor.NAME),
      is_trending_now   : item.IS_TRENDING_NOW
    }));

    return NextResponse.json(mappedMedia, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Unexpected server error."}, { status: 500 });
  }
}