------------------------------------------------- Création de la table users -------------------------------------------------
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(42) NOT NULL,
    firstname VARCHAR(42) NOT NULL,
    lastname VARCHAR(42) NOT NULL,
    country VARCHAR(42) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(42) NOT NULL
);


