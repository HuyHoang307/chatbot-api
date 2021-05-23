const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '172.31.98.205',
      user : 'postgres',
      password : 'admin',
      database : 'chatbotdb'
    }
});

export const db=knex;