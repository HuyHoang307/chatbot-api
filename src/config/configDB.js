const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '172.20.0.2',
      user : 'postgres',
      password : 'admin',
      database : 'chatbotdb'
    }
});

export const db=knex;