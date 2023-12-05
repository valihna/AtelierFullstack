/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import Counter from "./components/Counter";
import logo from "./assets/logo.svg";
import "./App.css";
import Destination from "./pages/Destination";
import Gagnez from "./pages/Gagnez";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Voyage Voyage</p>
        <Counter />
        <p>
          <div>
            <Link className="home" to="/">
              <h2>
                {" "}
                <Destination />
              </h2>
            </Link>
          </div>

          {" | "}
          <div>
            <Link className="home" to="/">
              <h2>
                {" "}
                Gagnez votre sejour <Gagnez />
              </h2>
            </Link>
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;

// import { Outlet } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// }

// export default App;
