#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR (255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text)
VALUES
  ('Bryan', 'Hi how are you doing ?'),
  ('Odin', 'Hey im outside'),
  ('Damon', 'That's funny LMAO');
`;

async function main() {
  console.log("Setting up the database...");

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();

  console.log("Database setup complete!");
}

main().catch((err) => console.error(err));
