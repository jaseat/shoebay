require("dotenv").config({ path: ".env" });

// console.log(process.env);

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    host: process.env.DB_HOSTNAME,
    dialect: "mysql",
    port: process.env.DB_PORT,
    logging: false,
  },
  test: {
    username: process.env.TEST_DB_USERNAME,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB,
    host: process.env.TEST_DB_HOSTNAME,
    dialect: process.env.TEST_DB_DIALECT,
    port: process.env.TEST_DB_PORT,
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB,
    host: process.env.PROD_DB_HOSTNAME,
    dialect: process.env.PROD_DB_DIALECT,
    port: process.env.PROD_DB_PORT,
  },
};
