import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [idNewUser, setIdNewUser] = useState({ id: 0 });
  const [infosUser, setInfosUser] = useState({ username: "" });
  const [favoriesUser, setFavoriesUser] = useState({ id: 0 });
  const contextValue = useMemo(
    () => ({
      infosUser,
      setInfosUser,
      idNewUser,
      setIdNewUser,
      favoriesUser,
      setFavoriesUser,
    }),
    [
      infosUser,
      setInfosUser,
      idNewUser,
      setIdNewUser,
      favoriesUser,
      setFavoriesUser,
    ]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
