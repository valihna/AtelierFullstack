// const client = require("../database/client");

// class FavoritesManager {
//   constructor() {
//     super ({ table: "/countries/:id" });
//   }

//   async getFavorites(authId) {
//     try {
//       // Récupérer les favoris de l'utilisateur depuis la base de données
//       const query = "SELECT * FROM favorites WHERE auth_id = $1";
//       const result = await client.query(query, [authId]);
//       return result.rows;
//     } catch (error) {
//       console.error("Error getting favorites:", error);
//       throw new Error("Failed to get favorites");
//     }
//   }
//   // pour pouvoir mettre à jour les favoris de l'utilisateur dans la base de donnée?
//   async updateFavorites(authId, newFavorites) {
//     try {
//       await this.deleteAllFavorites(authId);

//       for (const countryId of newFavorites) {
//         await this.addFavorite(authId, countryId);
//       }
//     } catch (error) {
//       console.error("Error updating favorites:", error);
//       throw new Error("Failed to update favorites");
//     }
//   }
//   // je fais une route pour supprimer en local tous les favoris de l'auth
//   async deleteAllFavorites(authId) {
//     try {
//       const query = "DELETE FROM favorites WHERE auth_id = $1";
//       await client.query(query, [authId]);
//     } catch (error) {
//       console.error("Error deleting all favorites:", error);
//       throw new Error("Failed to delete all favorites");
//     }
//   }
// }

// module.exports = FavoritesManager;

// // jolie route pour supprimer un favori de la base de données
// // async removeFavorite(authId, countryId) {
// //     try {
// //     const query =
// //         "DELETE FROM favorites WHERE user_id = $1 AND country_id = $2";
// //     await client.query(query, [authId, countryId]);
// //     } catch (error) {
// //     console.error("Error removing favorite:", error);
// //     throw new Error("Failed to remove favorite");
// //     }
// // }

// // // Ajouter un favori dans la base de données
// //   async addFavorite(authId, countryId) {
// //     try {
// //       const query =
// //         "INSERT INTO favorites (user_id, country_id) VALUES ($1, $2)";
// //       await client.query(query, [authId, countryId]);
// //     } catch (error) {
// //       console.error("Error adding favorite:", error);
// //       throw new Error("Failed to add favorite");
// //     }
// //   }
