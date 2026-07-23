const { pool } = require("./database");

const deleteAllData = async () => {
  await pool.query(
    `TRUNCATE TABLE movies, genres, studios RESTART IDENTITY CASCADE;`,
  );
};

const insertDefaultStudiosData = async () => {
  const populateTableQuery = `INSERT INTO studios(name,description, img_url) VALUES
        ('Pixar','Pixar Animation Studios, is an American animation studio based in Emeryville, California, known for it''s commercially successful computer-animated feature films. Pixar is a subsidiary of Walt Disney Studios.','https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Paramount_Pictures_with_Skydance_byline.svg/250px-Paramount_Pictures_with_Skydance_byline.svg.png'),
        ('Universal Pictures','Universal is an American film production and distribution company headquartered in Universal City, California.It''s most commercially successful film franchises include Fast & Furious, Jurassic Park, and Despicable Me','https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Universal-Pictures-Logo.svg/250px-Universal-Pictures-Logo.svg.png'),
        ('Paramount Pictures','Paramount Pictures is an American film production company, It''s most commercially successful film franchises include Star Trek, Indiana Jones, Top Gun, Mission: Impossible, and Transformers.','https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Paramount_Pictures_2022_%28Blue%29.svg/250px-Paramount_Pictures_2022_%28Blue%29.svg.png'),
        ('Warner Bros. Pictures','Warner Bros. Pictures is an American film studio. It''s highest grossing films include Barbie, Harry Potter, Aquaman and The Dark Knight.','https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Warner_Bros._logo_2023.svg/250px-Warner_Bros._logo_2023.svg.png'),
        ('Walt Disney Animation Studios','Walt Disney Animation Studios (WDAS), sometimes shortened to Disney Animation, is an American animation studio which produces animated feature films and short films for the Walt Disney Company. The studio''s current production logo features a scene from its first synchronized sound cartoon, Steamboat Willie (1928). Founded on October 16, 1923, by brothers Walt and Roy O. Disney after the closure of Laugh-O-Gram Studio,[1] it is the longest-running animation studio in the world. It is currently organized as a division of Walt Disney Studios and is headquartered at the Roy E. Disney Animation Building at the Walt Disney Studios lot in Burbank, California.','https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/The_Walt_Disney_company_logo.svg/250px-The_Walt_Disney_company_logo.svg.png'),
        ('Lucasfilm','Lucasfilm Ltd. LLC is an American film and television production company founded by filmmaker George Lucas on December 10, 1971, in Marin County, California, in the city of San Rafael, and later moved to San Francisco in 2005.[2] It is best known for creating and producing the Star Wars and Indiana Jones franchises, as well as its leadership in developing special effects, sound, and computer animation for films. Since 2012, Lucasfilm has been a subsidiary of The Walt Disney Studios, who also owns former Lucasfilm subsidiary Pixar.','https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Lucasfilm_2015.svg/250px-Lucasfilm_2015.svg.png')
        ;`;
  await pool.query(populateTableQuery);
};

const insertDefaultMoviesData = async () => {
  const populateTableQuery = `
      INSERT INTO movies (name, description, genre_id, studio_id, img_url)
      VALUES (
        'Toy Story 1',
        'Toy Story is a 1995 American animated adventure comedy film directed by John Lasseter and written by Joss Whedon, Andrew Stanton, Joel Cohen, and Alec Sokolow. The first entirely computer-animated feature film, as well as the first feature film produced by Pixar Animation Studios, it stars the voices of Tom Hanks, Tim Allen, Annie Potts, John Ratzenberger, Don Rickles, Wallace Shawn, and Jim Varney. Set in a world where toys come to life, Toy Story follows an old-fashioned cowboy doll named Woody (Hanks), who becomes jealous that a space cadet action figure, Buzz Lightyear (Allen), is replacing him as the favorite toy of their owner Andy.',
        2,
        1,
        'https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg'
      ),
      (
        'Transformers',
        'Transformers is a 2007 American science fiction action film based on Hasbro’s toy line of the same name. Directed by Michael Bay from a screenplay by Roberto Orci and Alex Kurtzman, it is the first installment of the Transformers film series. The film stars Shia LaBeouf as Sam Witwicky, a teenager who gets caught up in a war between the heroic Autobots and the evil Decepticons, two factions of shape-shifting alien robots. The Autobots and Decepticons both seek a powerful artifact called the AllSpark, to win the war that has devastated their home planet of Cybertron.',
        1,
        3,
        'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Transformers07.jpg/250px-Transformers07.jpg'
      ),
      (
        'Jurassic Park',
        'Jurassic Park is a 1993 American science fiction adventure film directed by Steven Spielberg and written by Michael Crichton and David Koepp, based on Crichton’s 1990 novel. Starring Sam Neill, Laura Dern, Jeff Goldblum, and Richard Attenborough, the film is set on the fictional island of Isla Nublar near Costa Rica, where wealthy businessman John Hammond (Attenborough) and a team of genetic scientists have created a wildlife park of de-extinct dinosaurs. When industrial sabotage leads to a catastrophic shutdown of the park’s power facilities and security precautions, a small group of visitors struggle to survive and escape the now perilous island.',
        10,
        2,
        'https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg'
      ),
      (
        'Barbie',
        'Barbie is a 2023 satirical fantasy comedy film directed by Greta Gerwig from a screenplay she wrote with her husband, Noah Baumbach. Based on the fashion dolls by Mattel, it is the first live-action Barbie film after numerous animated films and specials. Starring Margot Robbie as the title character and Ryan Gosling as Ken, the film follows them on a journey of self-discovery through Barbieland and the real world following an existential crisis. The supporting cast includes America Ferrera, Michael Cera, Kate McKinnon, Issa Rae, Rhea Perlman, and Will Ferrell.',
        3,
        4,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Barbie_%282023_movie_logo%29.png/330px-Barbie_%282023_movie_logo%29.png'
      ),
      (
        'Sherlock Homes',
        'Sherlock Holmes is a 2009 period mystery action film starring Robert Downey Jr. as the character of the same name created by Sir Arthur Conan Doyle. The film was directed by Guy Ritchie and produced by Joel Silver, Lionel Wigram, Susan Downey, and Dan Lin. The screenplay written by Michael Robert Johnson, Anthony Peckham, and Simon Kinberg was developed from a story they conceived with Marc Smith, Kristen Anderson-Lopez, and Robert Lopez. In addition to Downey as Holmes, Jude Law portrays Dr. John Watson. The film, set in 1890, follows eccentric detective Holmes and his companion Watson investigating the crimes of Lord Blackwood, a mysticist who has seemingly risen from the dead. Rachel McAdams stars as Holmes''s former adversary Irene Adler and Mark Strong portrays villain Lord Henry Blackwood.',
        4,
        4,
        'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Sherlock_holmes_ver5.jpg/250px-Sherlock_holmes_ver5.jpg'
      ),
      (
        'Frozen 2',
        'Frozen 2 (stylized as Frozen II) is a 2019 American animated musical fantasy film produced by Walt Disney Animation Studios. The second film in the Frozen franchise, following the 2013 film, it was directed by Chris Buck and Jennifer Lee and written by Lee, from a story they conceived with Marc Smith, Kristen Anderson-Lopez, and Robert Lopez. It stars the voices of Kristen Bell, Idina Menzel, Josh Gad, and Jonathan Groff. Set three years after the events of the first film, Frozen 2 follows sisters Anna and Elsa, and their companions Kristoff, Sven, and Olaf as they travel to an enchanted forest to unravel the origin of Elsa''s magical power.',
        5,
        5,
        'https://upload.wikimedia.org/wikipedia/en/8/89/Frozen_II_%282019_animated_film%29.jpg'
      ),
      (
        'Oppenheimer',
        'Oppenheimer is a 2023 epic biographical thriller film written, co-produced, and directed by Christopher Nolan.[6] It follows the life of J. Robert Oppenheimer, the American theoretical physicist who helped develop the first nuclear weapons during World War II. Based on the 2005 biography American Prometheus by Kai Bird and Martin J. Sherwin, the film dramatizes Oppenheimer''s studies, his direction of the Los Alamos Laboratory and his 1954 security hearing. Cillian Murphy stars as Oppenheimer, alongside Robert Downey Jr. as the United States Atomic Energy Commission member Lewis Strauss. The ensemble supporting cast includes Emily Blunt, Matt Damon, Florence Pugh, Josh Hartnett, Casey Affleck, Rami Malek, Kenneth Branagh.',
        6,
        2,
        'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/250px-Oppenheimer_%28film%29.jpg'
      ),
      (
        'Titanic',
        'Titanic is a 1997 American epic historical romance film written and directed by James Cameron. Incorporating both historical and fictional aspects, it is based on accounts of the sinking of RMS Titanic in 1912. Leonardo DiCaprio and Kate Winslet star as members of different social classes who fall in love during the ship''s ill-fated maiden voyage. The ensemble cast includes Billy Zane, Kathy Bates, Frances Fisher, Bernard Hill, Jonathan Hyde, Danny Nucci, David Warner and Bill Paxton.',
        8,
        3,
        'https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Titanic_%281997_film%29_poster.png/250px-Titanic_%281997_film%29_poster.png'
      ),
      (
        'Star Wars: The Force Awakens',
        'Star Wars: The Force Awakens, also known as Star Wars: Episode VII – The Force Awakens, is a 2015 American epic space opera film produced, co-written, and directed by J. J. Abrams. The sequel to Return of the Jedi (1983), it is the first installment of the Star Wars sequel trilogy and chronologically the seventh film of the ''Skywalker Saga''. Set thirty years after Return of the Jedi, The Force Awakens follows Rey, Finn, Poe Dameron, and Han Solo''s search for Luke Skywalker and their fight in the Resistance, led by General Leia Organa and veterans of the Rebel Alliance, against Kylo Ren and the First Order, a successor to the Galactic Empire. The film stars Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Lupita Nyong''o, Andy Serkis, Domhnall Gleeson, Anthony Daniels, Peter Mayhew, and Max von Sydow.',
        9,
        6,
        'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg'
      );
    `;
  await pool.query(populateTableQuery);
};

const insertDefaultGenresData = async () => {
  const populateTableQuery = `INSERT INTO genres (name,description) VALUES
        ('Action','An action story is similar to adventure, and the protagonist usually takes a risky turn, which leads to desperate situations (including explosions, fight scenes, daring escapes, etc.). Action and adventure are usually categorized together (sometimes even as "action-adventure") because they have much in common, and many stories fall under both genres simultaneously (for instance, the James Bond series can be classified as both).'),
        ('Adventure','An adventure story is about a protagonist who journeys to epic or distant places to accomplish something. It can have many other genre elements included within it, because it is a very open genre. The protagonist has a mission and faces obstacles to get to their destination. Also, adventure stories usually include unknown settings and characters with prized properties or features.'),
        ('Comedy','Comedy is a story intended to amuse the audience. It is a very open genre, and thus crosses over with many other genres on a frequent basis.'),
        ('Crime and Mystery','A crime story is often about a crime that is being committed or was committed, but can also be an account of a criminal''s life. A mystery story follows an investigator as they attempt to solve a puzzle (often a crime). The details and clues are presented as the story continues and the protagonist discovers them and by the end of the story the mystery is solved. '),
        ('Fantasy','A fantasy story is about magic or supernatural forces, as opposed to technology as seen in science fiction. Depending on the extent of these other elements, the story may or may not be considered to be a "hybrid genre" series; for instance, even though the Harry Potter series canon includes the requirement of a particular gene to be a wizard, it is referred to only as a fantasy series.'),
        ('Historical','A story about a real person or event. There are also some fiction works that purport to be the "memoirs" of fictional characters as well, done in a similar style, however, these are in a separate genre. Often, they are written in a text book format, which may or may not focus on solely that.'),
        ('Horror','A horror story is told to deliberately scare or frighten the audience, through suspense, violence or shock. H. P. Lovecraft distinguishes two primary varieties in the "Introduction" to Supernatural Horror in Literature: 1) Physical Fear or the "mundanely gruesome;" and 2) the true Supernatural Horror story or the "Weird Tale". The supernatural variety is occasionally called "dark fantasy", since the laws of nature must be violated in some way, thus qualifying the story as "fantastic".'),
        ('Romance','The term romance has multiple meanings; for example, historical romances like those of Walter Scott would use the term to mean "a fictitious narrative in prose or verse; the interest of which turns upon marvellous and uncommon incidents". Most often, however, a romance is understood to be ''love stories'', emotion-driven stories that are primarily focused on the relationship between the main characters of the story. Beyond the focus on the relationship, the biggest defining characteristic of the romance genre is that a happy ending is always guaranteed,perhaps marriage and living "happily ever after", or simply that the reader sees hope for the future of the romantic relationship.'),
        ('Science Fiction','Science fiction (once known as scientific romance) is similar to fantasy, except stories in this genre use scientific understanding to explain the universe that it takes place in. It generally includes or is centered on the presumed effects or ramifications of computers or machines; travel through space, time or alternate universes; alien life-forms; genetic engineering; or other such things. The science or technology used may or may not be very thoroughly elaborated on.'),
        ('Thriller','A thriller is a story that is usually a mix of fear and excitement. It has traits from the suspense genre and often from the action, adventure or mystery genres, but the level of terror makes it borderline horror fiction at times as well. It generally has a dark or serious theme, which also makes it similar to drama.')
        ;`;
  await pool.query(populateTableQuery);
};

const main = async () => {
  await deleteAllData();
  await insertDefaultGenresData();
  await insertDefaultStudiosData();
  await insertDefaultMoviesData();
};

main();
