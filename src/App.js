
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Potions from "./components/Potions";
import Order from "./components/Order";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />

      <Route exact path="/">
      <Home />
      </Route>

      <Route exact path="/Potions">
      <Potions />
      </Route>


      <Route exact path="/Order">
      <Order />
      </Route>
      </Router>
    </div>
  );
}

export default App;
