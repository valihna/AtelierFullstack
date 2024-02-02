const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const countries = await tables.countries.readAll();
    res.status(200).json(countries);
  } catch (err) {
    next(err);
  }
};
const readCountries = async (req, res, next) => {
  try {
    const countries = await tables.countries.readAllCountries();
    res.status(200).json(countries);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const countries = await tables.countries.readById(req.params.id);

    res.status(200).json(countries);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const countries = req.body;

  try {
    const result = await tables.countries.update(req.params.id, countries);

    if (result.affectedRows === 1) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.countries.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
const add = async (req, res, next) => {
  const countries = req.body;
  try {
    const insertId = await tables.countries.create(countries, req.user.id);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  browse,
  readCountries,
  read,
  update,
  destroy,
  add,
};
