import React, { useState } from "react";
import connexion from "../../services/connexion";
import "./Registration.css";

function Registration() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    age: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const response = await connexion.post(`/auth/create`, formData);

      if (response.data) {
        const validation = document.querySelector(".validation");
        validation.style.display = "block";
      }
    } catch (error) {
      const errorconnexion = document.querySelector(".errorconnexion");
      errorconnexion.style.display = "block";
      setFormData(formData);
    }
  };

  return (
    <div className="dad-balise">
      <div className="contain-validation-errorconnexion">
        <p style={{ display: "none" }} className="validation">
          Your information has been recorded successfully, thank you for your
          participation.
        </p>
        <p style={{ display: "none" }} className="errorconnexion">
          Your information has not been saved.
        </p>
      </div>
      <div className="Registration">
        <form onSubmit={handleUpload} className="Inscriptionform">
          <input
            className="classinput"
            type="text"
            name="nom"
            placeholder="NOM"
            value={formData.nom}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="prenom"
            placeholder="PRENOM"
            value={formData.prenom}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="age"
            placeholder="AGE"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="email"
            name="email"
            placeholder="MAIL"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="password"
            placeholder="MOTS DE PASSE"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <div className="containbutsubmit">
            <button type="submit" className="classbut">
              Go
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
