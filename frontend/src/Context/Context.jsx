// import { createContext, useContext, useEffect, useState } from "react";

// const ValidationContext = createContext();

// export const useValidationContext = () => useContext(ValidationContext);

// export function ValidationProvider({ children }) {
//   const initialPanier = localStorage.getItem("panier")
//     ? JSON.parse(localStorage.getItem("panier"))
//     : [];

//   const [panier, setPanier] = useState(initialPanier);

//   useEffect(() => {
//     localStorage.setItem("panier", JSON.stringify(panier));
//   }, [panier]);

//   const manageValidation = (paysId) => {
//     if (panier.some((pays) => pays.paysId === paysId)) {
//       // peuton passer plusieurs props?(price, name,price_per_liter)
//       setValidation(panier.filter((pays) => pays.paysId !== paysId));
//     } else {
//       setValidation([
//         ...panier,
//         {
//           paysId,
//         },
//       ]);
//     }
//   };

//   return (
//     <ValidationContext.Provider
//       value={{ panier, manageValidation, panier, manageValidation }}
//     >
//       {children}
//     </ValidationContext.Provider>
//   );
// }
