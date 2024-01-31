const client = require("../../database/client");

const getFavorite = (req, res) => {
  const countriesId = req.query.countries.split("|");

  client
    .query("SELECT * FROM beer WHERE id in (?)", [countriesId])
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getFavorite,
};
