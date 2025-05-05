
// Когато се добавя някаква медиа (филм, сериал или шоу) да се спазят следните неща:
// 1. Добавя се медиата аналогично на останалите като се взима темплейта, който е най-отдолу
// 2. Важни полета са MEDIA_TYPE и GENRE - трябва да са от съществуващите стойности в базата от таблиците
//    и да няма правописни грешки. Таблиците са: MEDIA_TYPES и GENRES. Ако не се спази, записът няма да се добави.

export const mediaArray = [
    {
        NAME: 'The Fast and the Furious'
        , DESCRIPTION: 'Street racer Dominic Toretto lives life a quarter mile at a time, leading a crew that hijacks trucks to fund their adrenaline-fueled lifestyle. When undercover cop Brian O’Conner infiltrates the gang, he finds himself torn between duty and loyalty. As the engines roar and trust is tested, the line between right and wrong begins to blur.'
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2001
        , GENRE: 'Action'
        , ACTORS: [
            'Vin Diesel'
            , 'Paul Walker'
            , 'Jordana Brewster'
            , 'Michelle Rodriguez'
            , 'Ludacris'
        ]
        , DURATION: 106
        , THUMBNAIL_URL: 'https://i.ibb.co/Df3X32fV/Fast_One_Poster.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=ZsJz2TJAPjw'
        , IS_TRENDING_NOW: true
    },
    {
        NAME: 'Gunslingers'
        , DESCRIPTION: 'In the lawless town of Redemption, reformed gunslinger Thomas Keller seeks peace, but his violent past—and a vengeful brother—ignite a deadly showdown. With a bloodthirsty mob closing in, bullets fly and loyalties are tested. Starring Nicolas Cage, Stephen Dorff, and Heather Graham, Gunslingers delivers a high-stakes tale of justice and survival in the Wild West.'
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2025
        , GENRE: 'Adventure'
        , ACTORS: [
            'Nicolas Cage'
            , 'Stephen Dorff'
            , 'Heather Graham'
            , 'Danny Trejo'
            , 'Michael Madsen'
        ]
        , DURATION: 104
        , THUMBNAIL_URL: 'https://i.ibb.co/j927Z3XF/Gunslingers.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=G4hVWe4GOrk'
        , IS_TRENDING_NOW: true
    },
    {
        NAME: 'Warfare'
        , DESCRIPTION: "In the war-torn streets of Ramadi, 2006, a Navy SEAL platoon occupies an Iraqi family's home, transforming it into a surveillance post amid escalating insurgent threats. As tensions rise, the soldiers face an intense ambush, leading to a harrowing battle that tests their limits and bonds. Directed by Ray Mendoza and Alex Garland, this real-time depiction draws from Mendoza's own experiences, offering an unflinching look at the chaos and camaraderie of modern warfare."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2025
        , GENRE: 'Action'
        , ACTORS: [
            'Ray Mendoza'
            , 'Alex Garland'
            , 'Michael Peña'
            , 'John Cena'
            , 'Jessica Chastain'
        ]
        , DURATION: 105
        , THUMBNAIL_URL: 'https://i.ibb.co/nNK1XV0q/Warfare.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=JER0Fkyy3tw'
        , IS_TRENDING_NOW: true
    },
    {
        NAME: 'Friday'
        , DESCRIPTION: "It’s Friday in South Central L.A., and Craig and Smokey are just trying to chill—but things don’t go as planned. With no job and plenty of drama, the two friends must dodge a neighborhood bully, angry girlfriends, and a drug dealer by sundown. Packed with laughs, weed, and wild moments, Friday is a cult classic that defined ‘90s comedy."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 1995
        , GENRE: 'Comedy'
        , ACTORS: [
            'Ice Cube'
            , 'Chris Tucker'
            , 'Nia Long'
            , 'Tiny Lister'
            , 'John Witherspoon'
        ]
        , DURATION: 90
        , THUMBNAIL_URL: 'https://i.ibb.co/VYvR2ftJ/Friday.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=umvFBoLOOgo'
        , IS_TRENDING_NOW: true
    },
    {
        NAME: 'Interstellar'
        , DESCRIPTION: "With Earth on the brink of collapse, a former NASA pilot joins a secret mission to find a new home for humanity beyond the stars. Traveling through a wormhole near Saturn, the crew faces black holes, time distortion, and the weight of sacrifice. Interstellar blends emotional depth with mind-bending science in a journey across space and love."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2014
        , GENRE: 'Sci-Fi'
        , ACTORS: [
            'Matthew McConaughey'
            , 'Anne Hathaway'
            , 'Jessica Chastain'
            , 'Michael Caine'
            , 'Matt Damon'
        ]
        , DURATION: 169
        , THUMBNAIL_URL: 'https://i.ibb.co/jPL5cPkr/Interstellar.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=zSWdZVtXT7E'
        , IS_TRENDING_NOW: true
    },
    {
        NAME: 'Snow White'
        , DESCRIPTION: "When the Evil Queen's magic mirror names Snow White the fairest of them all, jealousy sparks a deadly plan. Forced to flee, Snow White finds refuge with seven lovable dwarfs in the forest. But danger returns with a poisoned apple, and only true love’s kiss can break the curse."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2025
        , GENRE: 'Fantasy'
        , ACTORS: [
            'Rachel Zegler'
            , 'Gal Gadot'
            , 'Tom Cruise'
            , 'Peter Dinklage'
            , 'Michelle Rodriguez'
        ]
        , DURATION: 109
        , THUMBNAIL_URL: 'https://i.ibb.co/jPVVWKzC/SnowWhite.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=iV46TJKL8cU'
        , IS_TRENDING_NOW: true
    },
    {
        NAME: 'John Wick'
        , DESCRIPTION: "Retired hitman John Wick is dragged back into the underworld after a mobster’s son steals his car and kills his beloved dog—his last gift from his late wife. Fueled by vengeance, Wick unleashes a relentless assault on the Russian mafia. With sleek action, brutal fights, and a legendary assassin’s code, John Wick redefines revenge."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2014
        , GENRE: 'Triller'
        , ACTORS: [
            'Keanu Reeves'
            , 'Michael Nyqvist'
            , 'Alfie Allen'
            , 'Willem Dafoe'
            , 'Ian McShane'
        ]
        , DURATION: 101
        , THUMBNAIL_URL: 'https://i.ibb.co/tM9q85p0/JohnWick.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=2AUmvWm5ZDQ'
        , IS_TRENDING_NOW: true
    },
    {
        NAME: '8 Mile'
        , DESCRIPTION: "Struggling to make his mark in Detroit’s gritty hip-hop scene, Jimmy 'B-Rabbit' Smith uses rap battles to escape a tough life. Facing poverty, self-doubt, and family drama, he fights to prove he has what it takes to rise above it all. 8 Mile delivers raw emotion, powerful performances, and an unforgettable final freestyle that made history."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2002
        , GENRE: 'Musical'
        , ACTORS: [
            'Eminem'
            , 'Brittany Murphy'
            , 'Mekhi Phifer'
            , 'Evan Ross'
            , 'Kim Basinger'
        ]
        , DURATION: 110
        , THUMBNAIL_URL: 'https://i.ibb.co/bR35b5wN/8mile.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=axGVrfwm9L4'
        , IS_TRENDING_NOW: true
    },
    {
        NAME: "Watch out we're mad"
        , DESCRIPTION: "When two rival racers—Ben and Kid—win a dune buggy in a tie and then lose it to a gang of thugs, all bets are off. What starts as a simple argument turns into an all-out brawl involving clowns, car chases, and chaotic bar fights. Packed with slapstick action and classic Terence Hill & Bud Spencer charm, Watch Out, We’re Mad is a wild ride of revenge and laughs."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 1974
        , GENRE: 'Comedy'
        , ACTORS: [
            'Terence Hill'
            , 'Bud Spencer'
            , 'Marisa Merlini'
            , 'Riccardo Pizzuti'
            , 'Gianfranco Parolini'
        ]
        , DURATION: 101
        , THUMBNAIL_URL: 'https://i.ibb.co/5WZK9L9C/WOWRM.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=1K-a1wsmPLw'
        , IS_TRENDING_NOW: true
    },
];

////////////////// 
// TEMPLATE
//////////////////

// {
//     NAME: ''
//     , DESCRIPTION: ""
//     , MEDIA_TYPE: 
//     , RELEASE_YEAR:
//     , GENRE: 
//     , ACTORS: [
//         ''
//         , ''
//         , ''
//         , ''
//         , ''
//     ]
//     , DURATION: 
//     , THUMBNAIL_URL: ''
//     , TRAILER_URL: ''
//     , IS_TRENDING_NOW: true
// },