
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
        , RATING: 6.8
        , THUMBNAIL_URL: 'https://i.ibb.co/Df3X32fV/Fast_One_Poster.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=ZsJz2TJAPjw'
        , HOST_URL: ''
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
        , RATING: 3.6
        , THUMBNAIL_URL: 'https://i.ibb.co/j927Z3XF/Gunslingers.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=G4hVWe4GOrk'
        , HOST_URL: ''
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
        , RATING: 7.4
        , THUMBNAIL_URL: 'https://i.ibb.co/nNK1XV0q/Warfare.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=JER0Fkyy3tw'
        , HOST_URL: ''
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
        , RATING: 7.2
        , THUMBNAIL_URL: 'https://i.ibb.co/VYvR2ftJ/Friday.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=umvFBoLOOgo'
        , HOST_URL: ''
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
        , RATING: 8.7
        , THUMBNAIL_URL: 'https://i.ibb.co/jPL5cPkr/Interstellar.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=zSWdZVtXT7E'
        , HOST_URL: ''
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
        , RATING: 1.7
        , THUMBNAIL_URL: 'https://i.ibb.co/jPVVWKzC/SnowWhite.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=iV46TJKL8cU'
        , HOST_URL: ''
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
        , RATING: 7.5
        , THUMBNAIL_URL: 'https://i.ibb.co/tM9q85p0/JohnWick.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=2AUmvWm5ZDQ'
        , HOST_URL: ''
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
        , RATING: 7.2
        , THUMBNAIL_URL: 'https://i.ibb.co/bR35b5wN/8mile.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=axGVrfwm9L4'
        , HOST_URL: ''
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
        , RATING: 7.3
        , THUMBNAIL_URL: 'https://i.ibb.co/5WZK9L9C/WOWRM.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=1K-a1wsmPLw'
        , HOST_URL: ''
        , IS_TRENDING_NOW: true
    },
    {
        NAME: 'Deadpool'
        , DESCRIPTION: "A wisecracking mercenary gets experimented on and becomes immortal yet hideously scarred, and sets out to track down the man who ruined his looks."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2016
        , GENRE: 'Action'
        , ACTORS: [
            'Ryan Reynolds'
            , 'Karan Soni'
            , 'Ed Skrein'
            , 'Michael Benyaer'
            , 'Stefan Kapicic'
        ]
        , DURATION: 108
        , RATING: 8.0
        , THUMBNAIL_URL: 'https://i.ibb.co/21QPv5tw/Deadpool-1.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=Xithigfg7dA'
        , HOST_URL: ''
        , IS_TRENDING_NOW: false
    },
    {
        NAME: 'Die Hard'
        , DESCRIPTION: "A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 1988
        , GENRE: 'Action'
        , ACTORS: [
            'Bruce Willis'
            , 'Bonnie Bedelia'
            , 'Reginald VelJohnson'
            , 'Paul Gleason'
            , "De'voreaux White"
        ]
        , DURATION: 132
        , RATING: 8.2
        , THUMBNAIL_URL: 'https://i.ibb.co/RGRHgz6q/DieHard.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=jaJuwKCmJbY'
        , HOST_URL: ''
        , IS_TRENDING_NOW: false
    },
    {
        NAME: 'Gladiator'
        , DESCRIPTION: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2000
        , GENRE: 'Action'
        , ACTORS: [
            'Russell Crowe'
            , 'Joaquin Phoenix'
            , 'Connie Nielsen'
            , 'Oliver Reed'
            , 'Richard Harris'
        ]
        , DURATION: 155
        , RATING: 8.5
        , THUMBNAIL_URL: 'https://i.ibb.co/yFG7VPPX/Gladiator-I.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=P5ieIbInFpg'
        , HOST_URL: ''
        , IS_TRENDING_NOW: false
    },
    {
        NAME: 'Skyfall'
        , DESCRIPTION: "James Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2012
        , GENRE: 'Action'
        , ACTORS: [
            'Daniel Craig'
            , 'Judi Dench'
            , 'Javier Bardem'
            , 'Ralph Fiennes'
            , 'Naomie Harris'
        ]
        , DURATION: 143
        , RATING: 7.8
        , THUMBNAIL_URL: 'https://i.ibb.co/p6N2kQ5V/James-Bond-Skyfall.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=6kw1UVovByw'
        , HOST_URL: ''
        , IS_TRENDING_NOW: false
    },
    {
        NAME: 'Mad Max'
        , DESCRIPTION: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshipper and a drifter named Max."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2015
        , GENRE: 'Action'
        , ACTORS: [
            'Tom Hardy'
            , 'Charlize Theron'
            , 'Nicholas Hoult'
            , 'Hugh Keays-Byrne'
            , 'Josh Helman'
        ]
        , DURATION: 120
        , RATING: 8.1
        , THUMBNAIL_URL: 'https://i.ibb.co/qF9HJzKq/Mad-Max-1.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=hEJnMQG9ev8'
        , HOST_URL: ''
        , IS_TRENDING_NOW: false
    },
    {
        NAME: 'Cast Away'
        , DESCRIPTION: "A FedEx executive undergoes a physical and emotional transformation after crash landing on a deserted island."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2000
        , GENRE: 'Adventure'
        , ACTORS: [
            'Paul Sanchez'
            , 'Lari White'
            , 'Leonid Citer'
            , 'David Allen Brooks'
            , 'Yelena Popovic'
        ]
        , DURATION: 143
        , RATING: 7.8
        , THUMBNAIL_URL: 'https://i.ibb.co/sJWsXdk4/Cast-Away.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=qGuOZPwLayY'
        , HOST_URL: ''
        , IS_TRENDING_NOW: false
    },
    {
        NAME: 'Journey 2: The Mysterious Island'
        , DESCRIPTION: "Sean Anderson partners with his mom's husband on a mission to find his grandfather, who is thought to be missing on a mythical island."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2012
        , GENRE: 'Adventure'
        , ACTORS: [
            'Dwayne Johnson'
            , 'Michael Caine'
            , 'Josh Hutcherson'
            , 'Luis Guzmán'
            , 'Vanessa Hudgens'
        ]
        , DURATION: 94
        , RATING: 5.7
        , THUMBNAIL_URL: 'https://i.ibb.co/0y2FjC30/Journey-2-The-Mysterious-Island.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=qdFCjwcK8IE'
        , HOST_URL: ''
        , IS_TRENDING_NOW: false
    },
    {
        NAME: 'Journey to the Center of the Earth'
        , DESCRIPTION: "On a quest to find out what happened to his missing brother, a scientist, his nephew and their mountain guide discover a fantastic and dangerous lost world in the center of the earth."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2008
        , GENRE: 'Adventure'
        , ACTORS: [
            'Brendan Fraser'
            , 'Josh Hutcherson'
            , 'Aníta Briem'
            , 'Seth Meyers'
            , 'Jean Michel Paré'
        ]
        , DURATION: 93
        , RATING: 5.8
        , THUMBNAIL_URL: 'https://i.ibb.co/bRJg9XTr/Journey-to-the-Center-of-the-Earth.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=GKq7QlNz3CA'
        , HOST_URL: ''
        , IS_TRENDING_NOW: false
    },
    {
        NAME: 'Jumanji: Welcome to the Jungle'
        , DESCRIPTION: "Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2017
        , GENRE: 'Adventure'
        , ACTORS: [
            'Dwayne Johnson'
            , 'Kevin Hart'
            , 'Jack Black'
            , 'Karen Gillan'
            , 'Rhys Darby'
        ]
        , DURATION: 119
        , RATING: 7.0
        , THUMBNAIL_URL: 'https://i.ibb.co/6JDQ9MHf/jumanji-welcome-to-the-jungle.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=2QKg5SZ_35I'
        , HOST_URL: ''
        , IS_TRENDING_NOW: false
    },
    {
        NAME: 'Jurassic World'
        , DESCRIPTION: "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2015
        , GENRE: 'Adventure'
        , ACTORS: [
            'Chris Pratt'
            , 'Bryce Dallas Howard'
            , 'Irrfan Khan'
            , "Vincent D'Onofrio"
            , 'Ty Simpkins'
        ]
        , DURATION: 124
        , RATING: 6.9
        , THUMBNAIL_URL: 'https://i.ibb.co/spmhKTNh/Jurassic-World-1.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=RFinNxS5KN4'
        , HOST_URL: ''
        , IS_TRENDING_NOW: false
    },
    {
        NAME: 'Taxi'
        , DESCRIPTION: "To work off his tarnished driving record, a hip taxi driver must chauffeur a loser police inspector on the trail of German bank robbers."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 1998
        , GENRE: 'Comedy'
        , ACTORS: [
            'Samy Naceri'
            , 'Frédéric Diefenthal'
            , 'Marion Cotillard'
            , 'Manuela Gourary'
            , 'Emma Wiklund'
        ]
        , DURATION: 89
        , RATING: 7.0
        , THUMBNAIL_URL: 'https://i.ibb.co/DHSWJXg0/Taxi-1.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=qYBNjVnbtFg'
        , HOST_URL: ''
        , IS_TRENDING_NOW: false
    },
    {
        NAME: 'The Pink Panther'
        , DESCRIPTION: "Bumbling Inspector Clouseau must solve the murder of a famous soccer coach and find out who stole the infamous Pink Panther diamond."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2006
        , GENRE: 'Comedy'
        , ACTORS: [
            'Steve Martin'
            , 'Kevin Kline'
            , 'Jean Reno'
            , 'Emily Mortimer'
            , 'Henry Czerny'
        ]
        , DURATION: 93
        , RATING: 5.7
        , THUMBNAIL_URL: 'https://i.ibb.co/Q7sTvsxm/Pink-Panter.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=er7sxi-ur1A'
        , HOST_URL: ''
        , IS_TRENDING_NOW: false
    },
    {
        NAME: 'Police Academy'
        , DESCRIPTION: "The mayor declares that anyone can enroll in the police academy irrespective of their physical condition or education level, and many misfits descend on the academy, including a young troublemaker who's forced to apply or go to jail."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 1984
        , GENRE: 'Comedy'
        , ACTORS: [
            'Steve Guttenberg'
            , 'Kim Cattrall'
            , 'G.W. Bailey'
            , 'Bubba Smith'
            , 'Donovan Scott'
        ]
        , DURATION: 96
        , RATING: 6.7
        , THUMBNAIL_URL: 'https://i.ibb.co/C5yFHTj7/Police-Academy-1.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=4NT4C1F_HZE'
        , HOST_URL: ''
        , IS_TRENDING_NOW: false
    },
    {
        NAME: 'Rush Hour'
        , DESCRIPTION: "A loyal and dedicated Hong Kong Inspector teams up with a reckless and loudmouthed L.A.P.D. detective to rescue the Chinese Consul's kidnapped daughter, while trying to arrest a dangerous crime lord along the way."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 1998
        , GENRE: 'Comedy'
        , ACTORS: [
            'Ken Leung'
            , 'Jackie Chan'
            , 'Tom Wilkinson'
            , 'Tzi Ma'
            , 'Robert Littman'
        ]
        , DURATION: 98
        , RATING: 7.0
        , THUMBNAIL_URL: 'https://i.ibb.co/9P4wjF1/Rush-Hour-1.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=JMiFsFQcFLE'
        , HOST_URL: ''
        , IS_TRENDING_NOW: false
    },
    {
        NAME: 'Yolki 1914'
        , DESCRIPTION: "100 years ago, the Russian Empire Christmas Eve. December traffic jams, festive festivities, luxurious balls and modest holidays, titled nobles and ordinary peasants, progressive poets, everything was different, except for the holiday."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2014
        , GENRE: 'Comedy'
        , ACTORS: [
            'Sergey Svetlakov'
            , 'Ivan Urgant'
            , 'Leonid Arkhangelskiy'
            , 'Dato Bakhtadze'
            , 'Anton Bogdanov'
        ]
        , DURATION: 90
        , RATING: 6.2
        , THUMBNAIL_URL: 'https://i.ibb.co/1y8W1N4/Yolki-1914-Or-Also-Know-As-Six-Degrees-of-Celebration.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=MP2B6T-6LLY'
        , HOST_URL: ''
        , IS_TRENDING_NOW: false
    },
    {
        NAME: 'Dracula Untold'
        , DESCRIPTION: "As his kingdom is being threatened by the Turks, young prince Vlad Tepes must become a monster feared by his own people in order to obtain the power needed to protect his own family, and the families of his kingdom."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2014
        , GENRE: 'Fantasy'
        , ACTORS: [
            'Luke Evans'
            , 'Sarah Gadon'
            , 'Dominic Cooper'
            , 'Art Parkinson'
            , 'Charles Dance'
        ]
        , DURATION: 92
        , RATING: 6.2
        , THUMBNAIL_URL: 'https://i.ibb.co/XfVjD6cT/Dracula-Untold.webp'
        , TRAILER_URL: 'https://www.youtube.com/watch?v=_2aWqecTTuE'
        , HOST_URL: ""
        , IS_TRENDING_NOW: false
    },
    {
        NAME: "Harry Potter and the Sorcerer's Stone"
        , DESCRIPTION: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2001
        , GENRE: 'Fantasy'
        , ACTORS: [
            "Daniel Radcliffe"
            , "Richard Harris"
            , "Maggie Smith"
            , "Robbie Coltrane"
            , "Saunders Triplets"
        ]
        , DURATION: 152
        , RATING: 7.7
        , THUMBNAIL_URL: "https://i.ibb.co/k68qRzVv/Harry-Potter-and-the-Philosopher-s-Stone.webp"
        , TRAILER_URL: "https://www.youtube.com/watch?v=VyHV0BRtdxo"
        , HOST_URL: ""
        , IS_TRENDING_NOW: false
    },
    {
        NAME: "Hellboy"
        , DESCRIPTION: "Caught between the worlds of the supernatural and human, Hellboy battles an ancient sorceress bent on revenge."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2019
        , GENRE: 'Fantasy'
        , ACTORS: [
            "Mark Stanley"
            , "Brian Gleeson"
            , "Nadya Keranova"
            , "Maria Tepavicharova"
            , "Ana Tabakova"
        ]
        , DURATION: 120
        , RATING: 5.3
        , THUMBNAIL_URL: "https://i.ibb.co/bg01dySC/Hellboy.webp"
        , TRAILER_URL: "https://www.youtube.com/watch?v=dt5g5_1cKVk"
        , HOST_URL: ""
        , IS_TRENDING_NOW: false
    },
    {
        NAME: "Highlander"
        , DESCRIPTION: "An immortal Scottish swordsman must confront the last of his immortal opponents, a murderously brutal barbarian who lusts for the fabled 'Prize'."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 1986
        , GENRE: 'Fantasy'
        , ACTORS: [
            "Christopher Lambert"
            , "Roxanne Hart"
            , "Clancy Brown"
            , "Sean Connery"
            , "Beatie Edney"
        ]
        , DURATION: 116
        , RATING: 7.0
        , THUMBNAIL_URL: "https://i.ibb.co/sdWg5xG0/Highlander.webp"
        , TRAILER_URL: "https://www.youtube.com/watch?v=omOZyLmNMJs"
        , HOST_URL: ""
        , IS_TRENDING_NOW: false
    },
    {
        NAME: "The Hobbit: The Desolation of Smaug"
        , DESCRIPTION: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim the Lonely Mountain, their homeland, from the dragon Smaug."
        , MEDIA_TYPE: 'Movie'
        , RELEASE_YEAR: 2013
        , GENRE: 'Fantasy'
        , ACTORS: [
            "Ian McKellen"
            , "Martin Freeman"
            , "Richard Armitage"
            , "Ken Stott"
            , "Graham McTavish"
        ]
        , DURATION: 161
        , RATING: 7.8
        , THUMBNAIL_URL: "https://i.ibb.co/cXghcjw2/The-Hobbit-The-Desolation-of-Smaug.webp"
        , TRAILER_URL: "https://www.youtube.com/watch?v=OPVWy1tFXuc"
        , HOST_URL: ""
        , IS_TRENDING_NOW: false
    },
];

////////////////// 
// TEMPLATE
//////////////////

// {
//     NAME: ""
//     , DESCRIPTION: ""
//     , MEDIA_TYPE: 
//     , RELEASE_YEAR:
//     , GENRE: 
//     , ACTORS: [
//         ""
//         , ""
//         , ""
//         , ""
//         , ""
//     ]
//     , DURATION: 
//     , RATING:
//     , THUMBNAIL_URL: ""
//     , TRAILER_URL: ""
//     , HOST_URL: ""
//     , IS_TRENDING_NOW: false
// },