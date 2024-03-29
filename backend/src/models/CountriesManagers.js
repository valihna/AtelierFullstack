const AbstractManager = require("./AbstractManager");

class CountriesManager extends AbstractManager {
  constructor() {
    super({ table: "countries" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async readAllCountries() {
    const [rows] = await this.database.query(
      `SELECT countries.id, countries.country, countries.img_src, countries.countries, countries.photo, activities.activity, activities.countries_id FROM countries INNER JOIN activities ON countries.id = activities.countries_id;`
    );
    return rows;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} WHERE id  = ? `,
      [id]
    );

    return rows[0];
  }

  async update(id, countries) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [result] = await this.database.query(
      `UPDATE ${this.table} set ? WHERE id = ?`,
      [countries, id]
    );

    // Return the first row of the result, which represents the item
    return result;
  }

  async delete(id) {
    const result = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return result;
  }
}
module.exports = CountriesManager;
