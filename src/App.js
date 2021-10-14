import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home.js';
import ListView from './ListView';
import Navigation from './Navigation';
import MapView from './MapView';

const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route path="/" exact component={() => <Home />} />
      <Route path="/list" exact component={() => <ListView />} />
      <Route path="/map" exact component={() => <MapView />} />
    </Switch>
  </Router>
)

export default App
