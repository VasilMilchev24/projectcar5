import { Movie } from './types';
  // NOTICE: Since I am doing the front end part of the project, I will use dummy data for now, 
 // and later I will replace it with the data from the backend.
 export const TOP_COMEDY_MOVIES: Movie[] = [
    { id: 1, title: 'The Fast and the Furious', year: '2001',
      imageUrl: "https://i.ibb.co/Df3X32fV/Fast_One_Poster.webp", genre: 'Action',  
      duration: '1h 46m', description: "Street racer Dominic Toretto lives life a quarter mile at a time, leading a crew that hijacks trucks to fund their adrenaline-fueled lifestyle. When undercover cop Brian O’Conner infiltrates the gang, he finds himself torn between duty and loyalty. As the engines roar and trust is tested, the line between right and wrong begins to blur.",
      trailerUrl: "https://www.youtube.com/watch?v=ZsJz2TJAPjw",
      cast: ["Paul Walker", "Vin Diesel", "Jordana Brewster", "Michelle Rodriguez", "Ludacris"]},
      
      
    { id: 2, title: 'Gunslingers', year: '2025', 
      imageUrl: "https://i.ibb.co/j927Z3XF/Gunslingers.webp", genre: 'Adventure',  
      duration: '1h 44m', description: "In the lawless town of Redemption, reformed gunslinger Thomas Keller seeks peace, but his violent past—and a vengeful brother—ignite a deadly showdown. With a bloodthirsty mob closing in, bullets fly and loyalties are tested. Starring Nicolas Cage, Stephen Dorff, and Heather Graham, Gunslingers delivers a high-stakes tale of justice and survival in the Wild West.",
      trailerUrl:"https://www.youtube.com/watch?v=G4hVWe4GOrk",
      cast: ["Nicolas Cage", "Stephen Dorff", "Heather Graham", "Danny Trejo", "Michael Madsen"]},

    { id: 3, title: 'Warfare', year: '2025', imageUrl: "https://i.ibb.co/nNK1XV0q/Warfare.webp", genre: 'Military',  
      duration: '1h 35m', description:"In the war-torn streets of Ramadi, 2006, a Navy SEAL platoon occupies an Iraqi family's home, transforming it into a surveillance post amid escalating insurgent threats. As tensions rise, the soldiers face an intense ambush, leading to a harrowing battle that tests their limits and bonds. Directed by Ray Mendoza and Alex Garland, this real-time depiction draws from Mendoza's own experiences, offering an unflinching look at the chaos and camaraderie of modern warfare. ",
      trailerUrl:"https://www.youtube.com/watch?v=JER0Fkyy3tw",
      cast: ["Ray Mendoza", "Alex Garland", "Michael Peña", "John Cena", "Jessica Chastain"]},

    { id: 4, title: 'Friday', year: '1995', imageUrl: "https://i.ibb.co/VYvR2ftJ/Friday.webp", genre: 'Comedy',  
      duration: '1h 30m', description:"It’s Friday in South Central L.A., and Craig and Smokey are just trying to chill—but things don’t go as planned. With no job and plenty of drama, the two friends must dodge a neighborhood bully, angry girlfriends, and a drug dealer by sundown. Packed with laughs, weed, and wild moments, Friday is a cult classic that defined ‘90s comedy.",
      trailerUrl:"https://www.youtube.com/watch?v=umvFBoLOOgo",
      cast: ["Ice Cube", "Chris Tucker", "Nia Long", "Tiny Lister", "John Witherspoon"]},

    { id: 5, title: 'Interstellar', year: '2014', imageUrl: "https://i.ibb.co/jPL5cPkr/Interstellar.webp" , genre: 'Si-FI',  
      duration: '2h 49m', description:"With Earth on the brink of collapse, a former NASA pilot joins a secret mission to find a new home for humanity beyond the stars. Traveling through a wormhole near Saturn, the crew faces black holes, time distortion, and the weight of sacrifice. Interstellar blends emotional depth with mind-bending science in a journey across space and love.",
      trailerUrl:"https://www.youtube.com/watch?v=zSWdZVtXT7E",
      cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine", "Matt Damon"]},

    { id: 6, title: 'Snow White', year: '2025', imageUrl: "https://i.ibb.co/jPVVWKzC/SnowWhite.webp", genre: 'Fantasy',  
      duration: '1h 49m', description:"When the Evil Queen's magic mirror names Snow White the fairest of them all, jealousy sparks a deadly plan. Forced to flee, Snow White finds refuge with seven lovable dwarfs in the forest. But danger returns with a poisoned apple, and only true love’s kiss can break the curse",
      trailerUrl:"https://www.youtube.com/watch?v=iV46TJKL8cU",
      cast: ["Rachel Zegler", "Gal Gadot", "Tom Cruise", "Peter Dinklage", "Michelle Rodriguez"]},

    { id: 7, title: 'John Wick', year: '2014', imageUrl: "https://i.ibb.co/tM9q85p0/JohnWick.webp", genre: 'Triller',  
      duration: '1h 41m', description:"Retired hitman John Wick is dragged back into the underworld after a mobster’s son steals his car and kills his beloved dog—his last gift from his late wife. Fueled by vengeance, Wick unleashes a relentless assault on the Russian mafia. With sleek action, brutal fights, and a legendary assassin’s code, John Wick redefines revenge." ,
      trailerUrl:"https://www.youtube.com/watch?v=2AUmvWm5ZDQ",
      cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen", "Willem Dafoe", "Ian McShane"]},

    { id: 8, title: '8 Mile', year: '2002', imageUrl: "https://i.ibb.co/bR35b5wN/8mile.webp", genre: 'Musical',  
      duration: '1h 50m', description:"Struggling to make his mark in Detroit’s gritty hip-hop scene, Jimmy 'B-Rabbit' Smith uses rap battles to escape a tough life. Facing poverty, self-doubt, and family drama, he fights to prove he has what it takes to rise above it all. 8 Mile delivers raw emotion, powerful performances, and an unforgettable final freestyle that made history." ,
      trailerUrl:"https://www.youtube.com/watch?v=axGVrfwm9L4",
      cast: ["Eminem", "Brittany Murphy", "Mekhi Phifer", "Evan Ross", "Kim Basinger"]},

    { id: 9, title: "Watch out we're mad ", year: '1974', imageUrl: "https://i.ibb.co/5WZK9L9C/WOWRM.webp" , genre: 'Comedy',  
      duration: '1h 41m', description:"When two rival racers—Ben and Kid—win a dune buggy in a tie and then lose it to a gang of thugs, all bets are off. What starts as a simple argument turns into an all-out brawl involving clowns, car chases, and chaotic bar fights. Packed with slapstick action and classic Terence Hill & Bud Spencer charm, Watch Out, We’re Mad is a wild ride of revenge and laughs.",
      trailerUrl:"https://www.youtube.com/watch?v=1K-a1wsmPLw",
      cast: ["Terence Hill", "Bud Spencer", "Marisa Merlini", "Riccardo Pizzuti", "Gianfranco Parolini"]},
  ];