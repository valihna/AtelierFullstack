/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
// const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    // const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    // await database.query;
    const queriesFavorites = [];
    for (let i = 0; i < 5; i += 1) {
      const arr = [1, 3, 5, 6, 7];
      queriesFavorites.push(
        database.query(
          `INSERT INTO favorites(countries_id, auth_id)
           VALUES (?, ?)`,
          [arr[i], 1]
        )
      );
    }
    for (let i = 0; i < 5; i += 1) {
      const arr = [2, 3, 6, 8, 10];
      queriesFavorites.push(
        database.query(
          `INSERT INTO favorites(countries_id, auth_id)
           VALUES (?, ?)`,
          [arr[i], 2]
        )
      );
    }
    await Promise.all(queriesFavorites);

    // // Insert fake data into the 'item' table
    // for (let i = 0; i < 10; i += 1) {
    //   queries.push(
    //     database.query("insert into item(title) values (?)", [
    //       faker.lorem.word(),
    //     ])
    //   );
    // }

    /* ************************************************************************* */

    //     // Wait for all the insertion queries to complete
    //     await Promise.all(queries);

    //     // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
