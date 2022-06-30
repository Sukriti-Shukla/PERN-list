CREATE DATABASE pernapp;

CREATE TABLE chemical(
 id SERIAL PRIMARY KEY,
 name VARCHAR(200) NOT NULL,
 description VARCHAR(200) NOT NULL,
 chemical_formula VARCHAR(200) NOT NULL,
 supplier VARCHAR(200) NOT NULL
);