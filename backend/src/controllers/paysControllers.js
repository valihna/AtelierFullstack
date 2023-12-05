const database = require("../../database/client");

const getPays = (req, res) => {
  database
    .query("SELECT * FROM pays")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getPaysByID = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("SELECT * FROM pays WHERE id = ? ", [id])
    .then((result) => {
      if (result[0] != null) {
        res.status(200).json(result[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getPays,
  getPaysByID,
};
