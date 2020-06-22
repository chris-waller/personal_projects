const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'H@nour4uldb',
    port: 5432,
});

client.connect();

export default client;