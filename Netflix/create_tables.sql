USE Master;

CREATE DATABASE BD2;

USE BD2;

CREATE TABLE Title(
    idTitle         INT IDENTITY PRIMARY KEY,
    id              INT NOT NULL,
    primaryTitle    VARCHAR(50) NOT NULL,
    startYear        VARCHAR(30),
    runtime         VARCHAR(30)
);