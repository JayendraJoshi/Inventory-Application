const { pool } = require('./database');

const insertDefaultStudiosData = async()=>{
    const results = await pool.query("SELECT * FROM studios");
    if(!results.rows.length){
        const populateTableQuery = `INSERT INTO studios(name,description) VALUES
        ('Pixar','Pixar Animation Studios, is an American animation studio based in Emeryville, California, known for it''s commercially successful computer-animated feature films. Pixar is a subsidiary of Walt Disney Studios.'),
        ('Universal Pictures','Universal is an American film production and distribution company headquartered in Universal City, California.It''s most commercially successful film franchises include Fast & Furious, Jurassic Park, and Despicable Me'),
        ('Paramount Pictures','Paramount Pictures is an American film production company, It''s most commercially successful film franchises include Star Trek, Indiana Jones, Top Gun, Mission: Impossible, and Transformers.'),
        ('Warner Bros. Pictures','Warner Bros. Pictures is an American film studio. It''s highest grossing films include Barbie, Harry Potter, Aquaman and The Dark Knight.')
        ;`;
        await pool.query(populateTableQuery);
    }
}

const insertDefaultMoviesData = async()=>{
    const results = await pool.query("SELECT * FROM movies");
    if(!results.rows.length){
        const populateTableQuery =`INSERT INTO movies (name,description) VALUES
        ('Toy Story 1','Toy Story is a 1995 American animated adventure comedy film directed by John Lasseter, and written by Joss Whedon, Andrew Stanton, Joel Cohen, and Alec Sokolow. The first entirely computer-animated feature film, as well as the first feature film produced by Pixar Animation Studios, it stars the voices of Tom Hanks, Tim Allen, Annie Potts, John Ratzenberger, Don Rickles, Wallace Shawn, and Jim Varney. Set in a world where toys come to life, Toy Story follows an old-fashioned cowboy doll named Woody (Hanks), who becomes jealous that a space cadet action figure, Buzz Lightyear (Allen), is replacing him as the favorite toy of their owner Andy.'),
        ('Transformers','Transformers is a 2007 American science fiction action film[7] based on Hasbro''s toy line of the same name. Directed by Michael Bay from a screenplay by Roberto Orci and Alex Kurtzman, it is the first installment of the Transformers film series. The film stars Shia LaBeouf as Sam Witwicky, a teenager who gets caught up in a war between the heroic Autobots and the evil Decepticons, two factions of shape-shifting alien robots. The Autobots and Decepticons both seek a powerful artifact called the AllSpark, to win the war that has devastated their home planet of Cybertron.'),
        ('Jurassic Park','Jurassic Park is a 1993 American science fiction adventure film directed by Steven Spielberg and written by Michael Crichton and David Koepp, based on Crichton''s 1990 novel. Starring Sam Neill, Laura Dern, Jeff Goldblum, and Richard Attenborough, the film is set on the fictional island of Isla Nublar near Costa Rica, where wealthy businessman John Hammond (Attenborough) and a team of genetic scientists have created a wildlife park of de-extinct dinosaurs. When industrial sabotage leads to a catastrophic shutdown of the park''s power facilities and security precautions, a small group of visitors struggle to survive and escape the now perilous island.')
        ;`;
        await pool.query(populateTableQuery);
    }
}

const insertDefaultGenresData = async()=>{
    const results = await pool.query("SELECT * FROM genres");
    if(!results.rows.length){
        const populateTableQuery =`INSERT INTO genres (name,description) VALUES
        ('Action','An action story is similar to adventure, and the protagonist usually takes a risky turn, which leads to desperate situations (including explosions, fight scenes, daring escapes, etc.). Action and adventure are usually categorized together (sometimes even as "action-adventure") because they have much in common, and many stories fall under both genres simultaneously (for instance, the James Bond series can be classified as both).'),
        ('Adventure','An adventure story is about a protagonist who journeys to epic or distant places to accomplish something. It can have many other genre elements included within it, because it is a very open genre. The protagonist has a mission and faces obstacles to get to their destination. Also, adventure stories usually include unknown settings and characters with prized properties or features.'),
        ('Comedy','Comedy is a story intended to amuse the audience. It is a very open genre, and thus crosses over with many other genres on a frequent basis.'),
        ('Crime and Mystery','A crime story is often about a crime that is being committed or was committed, but can also be an account of a criminal''s life. A mystery story follows an investigator as they attempt to solve a puzzle (often a crime). The details and clues are presented as the story continues and the protagonist discovers them and by the end of the story the mystery is solved. '),
        ('Fantasy','A fantasy story is about magic or supernatural forces, as opposed to technology as seen in science fiction. Depending on the extent of these other elements, the story may or may not be considered to be a "hybrid genre" series; for instance, even though the Harry Potter series canon includes the requirement of a particular gene to be a wizard, it is referred to only as a fantasy series.'),
        ('Historical','A story about a real person or event. There are also some fiction works that purport to be the "memoirs" of fictional characters as well, done in a similar style, however, these are in a separate genre. Often, they are written in a text book format, which may or may not focus on solely that.'),
        ('Horror','A horror story is told to deliberately scare or frighten the audience, through suspense, violence or shock. H. P. Lovecraft distinguishes two primary varieties in the "Introduction" to Supernatural Horror in Literature: 1) Physical Fear or the "mundanely gruesome;" and 2) the true Supernatural Horror story or the "Weird Tale". The supernatural variety is occasionally called "dark fantasy", since the laws of nature must be violated in some way, thus qualifying the story as "fantastic".'),
        ('Romance','The term romance has multiple meanings; for example, historical romances like those of Walter Scott would use the term to mean "a fictitious narrative in prose or verse; the interest of which turns upon marvellous and uncommon incidents". Most often, however, a romance is understood to be "love stories", emotion-driven stories that are primarily focused on the relationship between the main characters of the story. Beyond the focus on the relationship, the biggest defining characteristic of the romance genre is that a happy ending is always guaranteed,[10][11] perhaps marriage and living "happily ever after", or simply that the reader sees hope for the future of the romantic relationship.'),
        ('Science Fiction','Science fiction (once known as scientific romance) is similar to fantasy, except stories in this genre use scientific understanding to explain the universe that it takes place in. It generally includes or is centered on the presumed effects or ramifications of computers or machines; travel through space, time or alternate universes; alien life-forms; genetic engineering; or other such things. The science or technology used may or may not be very thoroughly elaborated on.'),
        ('Thriller','A thriller is a story that is usually a mix of fear and excitement. It has traits from the suspense genre and often from the action, adventure or mystery genres, but the level of terror makes it borderline horror fiction at times as well. It generally has a dark or serious theme, which also makes it similar to drama.')
        ;`;
        await pool.query(populateTableQuery);
    }
}

const main = async()=>{
    await insertDefaultStudiosData();
    await insertDefaultMoviesData();
    await insertDefaultGenresData();
}

main();