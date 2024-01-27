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
      </div>
    </div>
  );
}

export default App;
