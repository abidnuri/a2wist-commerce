import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Navbars from './components/Header/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbars/>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
    </Router>  
      </div>
  );
}

export default App;
