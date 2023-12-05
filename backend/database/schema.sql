CREATE TABLE pays(
   id          INTEGER  NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,destination VARCHAR(255) NOT NULL
  ,img_src      VARCHAR(255) NOT NULL
  ,pays        VARCHAR(255) NOT NULL
  ,photo       VARCHAR(255) NOT NULL
);
INSERT INTO pays(destination,img_src,pays,photo) VALUES ('Maldives','src/assets/Maldives.jpg','France','false');
INSERT INTO pays(destination,img_src,pays,photo) VALUES ('Macao','src/assets/macau.jpg','Chine','false');
INSERT INTO pays(destination,img_src,pays,photo) VALUES ('Loudenvielle','src/assets/loudenvielle.jpg','France','false');
INSERT INTO pays(destination,img_src,pays,photo) VALUES ('New-York','src/assets/New-York.jpg','Etats-Unis','false');
INSERT INTO pays(destination,img_src,pays,photo) VALUES ('Tenerife','src/assets/tenerife.jpg','Espagne','false');
INSERT INTO pays(destination,img_src,pays,photo) VALUES ('Îles Turks et Caïques
','src/assets/ilesTurcs.jpg','Territoire Britannique d outre-mer','false');
INSERT INTO pays(destination,img_src,pays,photo) VALUES ('Lauterbrunnen','src/assets/macau.jpg','Suisse','false');
INSERT INTO pays(destination,img_src,pays,photo) VALUES ('lac Khuvsgul','src/assets/mongolie.jpg','Mongolie','false');
INSERT INTO pays(destination,img_src,pays,photo) VALUES ('amsterdam','src/assets/amsterdam.jpg','pays-Bas','false');
INSERT INTO pays(destination,img_src,pays,photo) VALUES ('Alesund','src/assets/norvege.jpg','Norvege','false');


CREATE TABLE activity(
  id        INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY
  ,activites VARCHAR(30)
  ,pays_id INTEGER NOT NULL
  ,Foreign Key (pays_id) REFERENCES pays(id)
);
INSERT INTO activity(activites, pays_id) VALUES ('Plage', 1);
INSERT INTO activity(activites, pays_id) VALUES ('Montagne/Ville', 2);
INSERT INTO activity(activites, pays_id) VALUES ('Montagne', 3);
INSERT INTO activity(activites, pays_id) VALUES ('Ville', 4);
INSERT INTO activity(activites, pays_id) VALUES ('Plage/Montagne/Ville', 5);
INSERT INTO activity(activites, pays_id) VALUES ('Plage', 6);
INSERT INTO activity(activites, pays_id) VALUES ('Montagne/Ville', 7);
INSERT INTO activity(activites, pays_id) VALUES ('Montagne', 8);
INSERT INTO activity(activites, pays_id) VALUES ('Ville', 9);
INSERT INTO activity(activites, pays_id) VALUES ('Plage/Montagne/Ville', 10);
