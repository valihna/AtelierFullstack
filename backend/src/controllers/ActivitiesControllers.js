const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const activities = await tables.activities.readAll();
    res.status(200).json(activities);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const activities = await tables.activities.readById(req.params.id);

    res.status(200).json(activities);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const activities = req.body;

  try {
    const result = await tables.activities.update(req.params.id, activities);

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
    await tables.activities.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
const add = async (req, res, next) => {
  const activities = req.body;
  try {
    const insertId = await tables.activities.create(activities, req.user.id);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  browse,
  read,
  update,
  destroy,
  add,
};
