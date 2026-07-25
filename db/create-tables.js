const { pool } = require("./database");

const createGenreTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS genres (
    name VARCHAR(20) NOT NULL,
    description TEXT,
    id INTEGER GENERATED ALWAYS AS IDENTITY,

    CONSTRAINT genres_pkey PRIMARY KEY (id)
);`;
  await pool.query(query);
};

const createStudiosTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS studios (
    name VARCHAR(30) NOT NULL,
    id INTEGER GENERATED ALWAYS AS IDENTITY,
    description TEXT,
    img_url TEXT,

    CONSTRAINT studio_pkey PRIMARY KEY (id)
);`;
  await pool.query(query);
};

const createMoviesTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS movies (
      name VARCHAR(50) NOT NULL,
      id INTEGER GENERATED ALWAYS AS IDENTITY,
      description VARCHAR(1000),
      genre_id INTEGER NOT NULL,
      studio_id INTEGER,
      img_url TEXT,

      CONSTRAINT film_pkey PRIMARY KEY (id),
      CONSTRAINT fk_genre_id
        FOREIGN KEY (genre_id)
        REFERENCES genres(id)
        ON DELETE CASCADE,
      CONSTRAINT fk_studio_id
        FOREIGN KEY (studio_id)
        REFERENCES studios(id)
        ON DELETE SET NULL
    );`;
  await pool.query(query);
};

const main = async () => {
  await createGenreTable();
  await createStudiosTable();
  await createMoviesTable();
};

main();
