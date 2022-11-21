# REST API

Registrar o saldo atual da carteira do cliente e retornar tanto a composição quanto o valor total da carteira em USD

## Info
Esse projeto foi feito seguindo os principios SOLID, complementado com design patterns ADAPTER e FACTORY

## Install

    npm install

## Run the app

    npm run dev

## Api Test & Documentation

    http://localhost:4000/api-docs
    
## Database postgres structure

```
CREATE TABLE users (
  id serial PRIMARY KEY,
  uuid VARCHAR (255) UNIQUE NOT NULL,
  username VARCHAR (50) NOT NULL,
  password VARCHAR (255) NOT NULL,
  email VARCHAR (255) UNIQUE NOT NULL,
  api_key VARCHAR (255),
  api_secret VARCHAR (255),
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP
);
```
  
```
CREATE TABLE wallets (
id serial PRIMARY KEY,
uuid VARCHAR (255) UNIQUE NOT NULL,
user_id INTEGER NOT NULL,
balance FLOAT NOT NULL,
asset VARCHAR(4) NOT NULL,
created_at TIMESTAMP NOT NULL,
updated_at TIMESTAMP
);
```

```
ALTER TABLE "wallets" ADD CONSTRAINT "fk_user"
FOREIGN KEY ("user_id") REFERENCES "users" ("id");
```
