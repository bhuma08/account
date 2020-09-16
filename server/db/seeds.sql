DROP TABLE IF EXISTS postshared;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS cheese_overview CASCADE;
DROP TABLE IF EXISTS cheese_instance CASCADE;

CREATE TABLE users(
    userid SERIAL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(1024) NOT NULL,
    PRIMARY KEY(userid)
);

CREATE TABLE cheese_overview(
    cheese_id SERIAL,
    recipe VARCHAR NOT NULL,
    userid INT NOT NULL,
    PRIMARY KEY(cheese_id),
    FOREIGN KEY (userid) REFERENCES users(userid)
);

CREATE TABLE cheese_instance(
    cheese_id INT NOT NULL,
    FOREIGN KEY(cheese_id) REFERENCES cheese_overview(cheese_id),
    status BOOLEAN DEFAULT false
);

CREATE TABLE postshared(
    id SERIAL,
    recipe VARCHAR NOT NULL
);

INSERT INTO postshared(recipe)
VALUES(
    'Example 1 of first shared recipe!'
);

INSERT INTO users(email, password)
VALUES(
    'bhuma@gmail.com',
    'password'
);

INSERT INTO cheese_overview (userid, recipe)
SELECT users.userid, 'Put the bread in the toaster, when bread has turned into toast, spread some of the butter on it, whack the cheese on top and throw it under the grill for a while'
FROM users
WHERE users.userid = 1;

INSERT INTO cheese_instance(cheese_id, status)
SELECT cheese_overview.cheese_id, false
FROM cheese_overview
WHERE cheese_overview.cheese_id = 1;

