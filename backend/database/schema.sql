-- SQLBook: Code
CREATE TABLE countries(
   id          INTEGER  NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,country VARCHAR(255) NOT NULL
  ,img_src      VARCHAR(255) NOT NULL
  ,countries        VARCHAR(255) NOT NULL
  ,photo       VARCHAR(255) NOT NULL
);
INSERT INTO countries(country,img_src,countries,photo) VALUES ('Maldives','src/assets/Maldives.jpg','France','false');
INSERT INTO countries(country,img_src,countries,photo) VALUES ('Macao','src/assets/macau.jpg','Chine','false');
INSERT INTO countries(country,img_src,countries,photo) VALUES ('Loudenvielle','src/assets/loudenvielle.jpg','France','false');
INSERT INTO countries(country,img_src,countries,photo) VALUES ('New-York','src/assets/New-York.jpg','Etats-Unis','false');
INSERT INTO countries(country,img_src,countries,photo) VALUES ('Tenerife','src/assets/tenerife.jpg','Espagne','false');
INSERT INTO countries(country,img_src,countries,photo) VALUES ('Îles Turks et Caïques
','src/assets/ilesTurcs.jpg','Territoire Britannique d outre-mer','false');
INSERT INTO countries(country,img_src,countries,photo) VALUES ('Lauterbrunnen','src/assets/macau.jpg','Suisse','false');
INSERT INTO countries(country,img_src,countries,photo) VALUES ('lac Khuvsgul','src/assets/mongolie.jpg','Mongolie','false');
INSERT INTO countries(country,img_src,countries,photo) VALUES ('amsterdam','src/assets/amsterdam.jpg','Pays-Bas','false');
INSERT INTO countries(country,img_src,countries,photo) VALUES ('Alesund','src/assets/norvege.jpg','Norvege','false');


CREATE TABLE activities(
  id        INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY
  ,activity VARCHAR(30)
  ,countries_id INTEGER NOT NULL
  ,Foreign Key (countries_id) REFERENCES countries(id)
);
INSERT INTO activities(activity, countries_id) VALUES ('Beach', 1);
INSERT INTO activities(activity, countries_id) VALUES ('Mountain/City', 2);
INSERT INTO activities(activity, countries_id) VALUES ('Mountain', 3);
INSERT INTO activities(activity, countries_id) VALUES ('City', 4);
INSERT INTO activities(activity, countries_id) VALUES ('Beach/Mountain/City', 5);
INSERT INTO activities(activity, countries_id) VALUES ('Beach', 6);
INSERT INTO activities(activity, countries_id) VALUES ('Mountain/City', 7);
INSERT INTO activities(activity, countries_id) VALUES ('Mountain', 8);
INSERT INTO activities(activity, countries_id) VALUES ('City', 9);
INSERT INTO activities(activity, countries_id) VALUES ('Beach/Mountain/City', 10);

CREATE TABLE auth (
    id INT AUTO_INCREMENT,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    age INT,
    email VARCHAR(500) UNIQUE,
    password VARCHAR(100),
    PRIMARY KEY (id)
);