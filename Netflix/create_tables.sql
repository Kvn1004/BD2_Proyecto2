USE Master;

CREATE DATABASE BD2;

USE BD2;

CREATE TABLE Category (
    id      int NOT NULL IDENTITY PRIMARY KEY,
    name    VARCHAR(255) NOT NULL,
);

CREATE TABLE Profession (
    id      int NOT NULL IDENTITY PRIMARY KEY,
    name    VARCHAR(255)
);

CREATE TABLE TName (
    id          int NOT NULL IDENTITY PRIMARY KEY,
    primaryName VARCHAR(255) NOT NULL,
    birthYear   int NOT NULL
);

CREATE TABLE NameProfession (
    nameId          int FOREIGN KEY REFERENCES TName(id),
    profressionID   int FOREIGN KEY REFERENCES Profession(id)
);

CREATE TABLE TitleType (
    id          int NOT NULL IDENTITY PRIMARY KEY,
    name        VARCHAR(255) NOT NULL
);

CREATE TABLE Genre (
    id          int NOT NULL IDENTITY PRIMARY KEY,
    name        VARCHAR(255) NOT NULL
);

CREATE TABLE Title (
    id              int NOT NULL IDENTITY PRIMARY KEY,
    titleTypeId     int FOREIGN KEY REFERENCES TitleType(id),
    categoryId  int FOREIGN KEY REFERENCES Category(id),
    primaryTitle    VARCHAR(255) NOT NULL,
    originalTitle   VARCHAR(255) NOT NULL,
    isAdult         INT NOT NULL,
    startYear       INT NOT NULL,
    endYear         INT NOT NULL,
    runtime         INT NOT NULL
);

CREATE TABLE TitleGenre (
    titleId     int FOREIGN KEY REFERENCES Title(id),
    genreId     int FOREIGN KEY REFERENCES Genre(id)
);


CREATE TABLE Director (
    nameId          int FOREIGN KEY REFERENCES TName(id),
    titleId         int FOREIGN KEY REFERENCES Title(id)
);

CREATE TABLE Writer (
    nameId          int FOREIGN KEY REFERENCES TName(id),
    titleId         int FOREIGN KEY REFERENCES Title(id)
);

CREATE TABLE Episode (
    id              int NOT NULL IDENTITY PRIMARY KEY,
    titleId         int FOREIGN KEY REFERENCES Title(id),
    season          int NOT NULL,
    episode         int NOT NULL
);

--CREATE TABLE Rating (
--    id              int NOT NULL IDENTITY PRIMARY KEY,
--    titleId         int FOREIGN KEY REFERENCES Title(id),
--    averageRating   float NOT NULL,
--    numVotes        int NOT NULL
--);

CREATE TABLE Region (
    id          int NOT NULL IDENTITY PRIMARY KEY,
    name        VARCHAR(255) NOT NULL
);

CREATE TABLE Language (
    id          int NOT NULL IDENTITY PRIMARY KEY,
    name        VARCHAR(255) NOT NULL
);


CREATE TABLE AlternativeTitle (
    id                      int NOT NULL IDENTITY PRIMARY KEY,
    titleId                 int FOREIGN KEY REFERENCES Title(id),
    regionId                int FOREIGN KEY REFERENCES Region(id),
    languageId              int FOREIGN KEY REFERENCES Language(id),
    title                   VARCHAR(255) NOT NULL
);