USE `Hopper-4313967-gabriel-oliveira`;
SET SQL_SAFE_UPDATES = 0;


-- EXE 1

CREATE TABLE Actor ( 
id VARCHAR(255) PRIMARY KEY, 
name VARCHAR (255) NOT NULL, 
birth_date DATE NOT NULL, 
gender VARCHAR(6) NOT NULL 
);

CREATE TABLE Movie ( 
id VARCHAR(255) PRIMARY KEY, 
title VARCHAR (255) NOT NULL UNIQUE, 
synopsis TEXT NOT NULL, 
release_date DATE NOT NULL,
rating INT NOT NULL
);


INSERT INTO Actor (id, name, birth_date, gender) 
VALUES( 
"001", 
"Tony Ramos", 
"1948-08-25", 
"male" 
);

INSERT INTO Actor (id, name, birth_date, gender)
VALUES(
  "002",
  "Juliana Paes",
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  "1949-04-18", 
  "male"
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES( 
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
"002",
"Doce de Mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES( 
"004", 
"Deus é Brasileiro", 
"Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
"2003-01-31", 
9 );


-- a) É o campo que estabelece o relacionamento entre duas tabelas. Assim, uma coluna corresponde à mesma coluna que é a chave primária de outra tabela.


-- b)

CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movie(id)
);


INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("0.01", "Filme muito bom!", 9.5 , "004" ),
	   ("0.02", "Filme ótimo!", 8.5 , "002"),
       ("0.03", "Filme mediano...", 6.0 , "001"),
       ("0.04", "Vale a pena cada minuto", 10.0 , "003");
       
  
  
-- c)       
INSERT INTO Rating
VALUES ("0.05","Muito ruim.", 7.0 ,"005"); 

-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails.
       

-- d)
ALTER TABLE Movie DROP COLUMN Rating;


-- e)
DELETE FROM Movie 
WHERE id = "001";

-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails





-- EXE 2


-- a)
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- Se trata e uma tabela que vai interligar os filmes com os atores.

-- b)

INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("001", "004"),
       ("002", "003"),
       ("002", "001"),
       ("003", "001"),
       ("004", "002"),
       ("003", "003");


-- c)
INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("005", "007");

-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails


-- d) 
DELETE FROM MovieCast
WHERE actor_id = "001";

-- O ator foi deletado com sucesso.



-- EXE 3

-- a) 

-- INNER JOIN é uma cláusula que permite a junção entre duas ou mais tabelas, desde que hajam entrelaçamento entre todas.


-- b)
SELECT Movie.title, Movie.id, Rating.rate
FROM Movie as Movie 
INNER JOIN Rating as Rating
ON Movie.id = Rating.movie_id;


