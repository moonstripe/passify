

USE heroku_15f4e973efa4e84;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE logins (
	id INT AUTO_INCREMENT NOT NULL,
    website VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    passwordStrength INT NOT NULL,
    password VARCHAR(255) NOT NULL,
    userId INT references users(id),
    PRIMARY KEY (id)
)

