import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import connexion from "../services/connexion";
import { AuthContext } from "../Context/Context";
import LoginInput from "../components/loginInput/loginInput";
import "./Login.css";
import "react-toastify/dist/ReactToastify.css";

const user = {
  email: "",
  password: "",
};
const showToastMessage = () => {
  toast.success(
    "Your connection information is correct, you will be redirected !",
    {
      position: toast.POSITION.TOP_CENTER,
    }
  );
};

const showToastErrorMessage = () => {
  toast.error("Your login information is not correct !", {
    position: toast.POSITION.TOP_RIGHT,
  });
};
function LogIn() {
  const [credentials, setCredentials] = useState(user);
  const { setInfosUser } = useContext(AuthContext);
  useContext(AuthContext);
  const navigate = useNavigate();

  const handleCredentials = (event) => {
    setCredentials((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      const valid = await connexion.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        credentials
      );
      setInfosUser(valid.data);
      showToastMessage();
      if (valid) {
        const validation = document.querySelector(".validation");
        validation.style.display = "block";
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      showToastErrorMessage(error);
      setCredentials(user);
    }
  };

  return (
    <>
      <div className="contain-validation-errorconnexion">
        <p style={{ display: "none" }} className="validation">
          Your login information is correct, you will be redirected.
        </p>
        <p style={{ display: "none" }} className="errorconnexion">
          Your login information is incorrect.
        </p>
      </div>
      <div className="contain-form-login">
        <h2>Log in to book your stay</h2>
        <div className="form-container">
          <form onSubmit={handleRequest} className="form-login">
            <div className="contain-input">
              <LoginInput
                type="email"
                name="email"
                required
                onChange={handleCredentials}
                value={credentials.email}
                placeholder="Your email"
              />
            </div>
            <div className="contain-input">
              <LoginInput
                type="password"
                name="password"
                required
                onChange={handleCredentials}
                value={credentials.password}
                placeholder="your password"
              />
            </div>
            <ToastContainer />
            <div className="contain-submit-login">
              <button type="submit" className="button-submit">
                To log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
