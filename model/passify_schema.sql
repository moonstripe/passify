DROP DATABASE IF EXISTS passify_db;

CREATE DATABASE passify_db;

USE passify_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(16) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE logins (
	id INT AUTO_INCREMENT NOT NULL,
    website VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    userId INT references users(id),
    PRIMARY KEY (id)
);
