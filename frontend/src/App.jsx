import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import img from "./assets/img.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <div className="Acc">
        <h2 className="app-title">Voyage Voyage</h2>
        <img className="background" src={img} alt="background" />
        <p className="paragraphe">
          <br />
          Welcome to the website of our travel agency. <br />
          Play and try to win a trip to the destination of your dreams! <br />
          You will be able to find all of our services offered and contact us if
          you wish to receive information.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default App;
