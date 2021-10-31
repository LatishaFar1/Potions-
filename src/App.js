
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Potions from "./components/Potions";
import Order from "./components/Order";
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {

  const [potions, setPotions] = useState([])
  const [requesting, setRequesting] = useState(true)

  useEffect(() => {
    fetch("http://localhost:9393/potions")
    .then(response => response.json())
    .then(potionsData => {
      setPotions([...potionsData])
      setRequesting(false)
    })
  }, [])

  return (
    <div className="App">
      <Router>
      <NavBar />

      <Route exact path="/">
      <Home />
      </Route>

      <Route exact path="/Potions">
      <Potions potions={potions} requesting={requesting}/>
      </Route>


      <Route exact path="/Order">
      <Order />
      </Route>
      </Router>
    </div>
  );
}

export default App;
