const AbstractManager = require("./AbstractManager");
const client = require("../../database/client");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorites" });
  }

  async readAll() {
    const [rows] = await client.query(`select * from ${this.table}`);

    return rows;
  }

  async readById(id) {
    const [rows] = await client.query(
      `select * from ${this.table} WHERE auth_id  = ? `,
      [id]
    );

    return rows[0];
  }

  async readAllByUser(id) {
    const [rows] = await client.query(
      `select * from ${this.table} INNER JOIN countries as r ON r.id =  ${this.table}.countries_id  WHERE auth_id  = ? `,
      [id]
    );

    return rows;
  }

  async readAllById(id) {
    const [rows] = await client.query(
      `select countries_id from ${this.table} WHERE auth_id  = ? `,
      [id]
    );

    return rows;
  }

  async create(favorites, id) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (countries_id, auth_id) VALUES (?, ?)`,
      [favorites.countryId, id]
    );
    return result.insertId;
  }

  async update(id, countries) {
    const [result] = await client.query(
      `UPDATE ${this.table} set ? WHERE id = ?`,
      [countries, id]
    );
    return result;
  }

  async delete(id) {
    const result = await client.query(
      `DELETE FROM ${this.table} WHERE countries_id = ?`,
      [id]
    );
    return result;
  }
}
module.exports = FavoriteManager;
