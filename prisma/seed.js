
import { PrismaClient } from '@prisma/client';
import { mediaArray } from './mediaData.js';

const prisma = new PrismaClient();

async function initMainTables() 
{
    await prisma.mediaTypes.createMany({
        data: [
            { NAME: 'Movie' },
            { NAME: 'TV Series' },
            { NAME: 'TV Show' },
        ],
        });

    await prisma.genres.createMany({
        data: [
            { NAME: 'Action' },
            { NAME: 'Adventure' },
            { NAME: 'Comedy' },
            { NAME: 'Sci-Fi' },
            { NAME: 'Fantasy' },
            { NAME: 'Triller' },
            { NAME: 'Musical' },
        ],
        });
}

async function initTableMedia() 
{
    if (mediaArray && mediaArray.length > 0)
    {
        for (const media of mediaArray)
        { 
            if(!media)
              continue;

            const mediaType = await prisma.mediaTypes.findFirst({
                where: { NAME: media.MEDIA_TYPE },
            });

            const genre = await prisma.genres.findFirst({
                where: { NAME: media.GENRE },
            });
    
            if(!mediaType || !genre)
                continue;

            await createMedia(mediaType, genre, media);
        }
    }
}

async function createMedia(mediaType, genre, media) 
{
    const createdMedia = await prisma.media.create({
        data: {
          NAME:             media.NAME,
          DESCRIPTION:      media.DESCRIPTION,
          MEDIA_TYPE_ID:    mediaType.ID,
          GENRE_ID:         genre.ID,
          RELEASE_YEAR:     media.RELEASE_YEAR,
          DURATION:         media.DURATION,
          THUMBNAIL_URL:    media.THUMBNAIL_URL,
          TRAILER_URL:      media.TRAILER_URL,
          IS_TRENDING_NOW:  true,
        },
      });

      if (media.ACTORS && media.ACTORS.length > 0) {
        for (const actor of media.ACTORS) {
          await prisma.actors.create({
            data: {
              NAME: actor,
              MEDIA_ID: createdMedia.ID,
            },
          });
        }
      }
}

async function main() {

    await initMainTables();
    await initTableMedia();

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });