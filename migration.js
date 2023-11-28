const { Client } = require('drizzle-pg');

const client = new Client({
  user: 'sinu_kasutajanimi',
  host: 'localhost',
  database: 'sinu_andmebaas',
  password: 'sinu_parool',
  port: 5432,
});

client.connect();
