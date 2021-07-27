import "./App.css";
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Signup from './components/Login/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
