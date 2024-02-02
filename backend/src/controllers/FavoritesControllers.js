const client = require("../../database/client");

const getFavorite = (req, res) => {
  const countriesId = req.query.countries.split("|");

  client
    .query("SELECT * FROM countries WHERE id in (?)", [countriesId])
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
// je fais une route delete pour supprimer en local les fav en utilisant index
const destroy = (req, res) => {
  try {
    const { countryId } = req.params;
    const favorites = JSON.parse(req.session.favorites || "[]");

    const index = favorites.indexOf(countryId);
    if (index !== -1) {
      favorites.splice(index, 1);
      req.session.favorites = JSON.stringify(favorites);
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ error: "Country not found in favorites" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// je fais une route put pour mettre a jour en local les favoris
const update = (req, res) => {
  try {
    const newFavorites = req.body.favorites;
    req.session.favorites = JSON.stringify(newFavorites);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getFavorite,
  destroy,
  update,
};
