const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const favorites = await tables.favorites.readAllByUser(req.user.id);

    res.status(200).json(favorites);
  } catch (err) {
    next(err);
  }
};

// const read = async (req, res, next) => {
//   try {
//     const favorite = await tables.favorites.readByUserId(req.params.id);

//     res.status(200).json(favorite);
//   } catch (err) {
//     next(err);
//   }
// };

// const readFavorites = async (req, res, next) => {
//   try {
//     const favorite = await tables.favorites.readByAuthId(req.params.id);

//     res.status(200).json(favorite);
//   } catch (err) {
//     next(err);
//   }
// };

const add = async (req, res, next) => {
  const favorites = req.body;
  try {
    const insertId = await tables.favorites.create(favorites, req.user.id);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const favorites = req.body;

  try {
    const result = await tables.favorites.update(req.params.id, favorites);
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
    await tables.favorites.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  browse,
  // read,
  // readFavorites,
  add,
  update,
  destroy,
};

// const client = require("../../database/client");

// const getFavorite = (req, res) => {
//   const countriesId = req.query.countries;

//   client
//     .query("SELECT * FROM countries WHERE id = ?", [countriesId])
//     .then((result) => {
//       res.status(200).json(result);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

// // je fais une route delete pour supprimer en local les fav en utilisant index
// const destroy = (req, res) => {
//   try {
//     const { countryId } = req.params;
//     const favorites = JSON.parse(req.session.favorites || "[]");

//     const index = favorites.indexOf(countryId);
//     if (index !== -1) {
//       favorites.splice(index, 1);
//       req.session.favorites = JSON.stringify(favorites);
//       res.status(200).json({ success: true });
//     } else {
//       res.status(404).json({ error: "Country not found in favorites" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// // je fais une route put pour mettre a jour en local les favoris
// const update = (req, res) => {
//   try {
//     const newFavorites = req.body.favorites;
//     req.session.favorites = JSON.stringify(newFavorites);
//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// module.exports = {
//   getFavorite,
//   destroy,
//   update,
// };
