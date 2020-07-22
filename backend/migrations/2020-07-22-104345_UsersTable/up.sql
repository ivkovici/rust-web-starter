CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR DEFAULT NULL,
    facebook_id INT DEFAULT NULL,
    google_id INT DEFAULT NULL
);

CREATE UNIQUE INDEX email ON users (email);