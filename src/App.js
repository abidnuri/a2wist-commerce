<<<<<<< HEAD
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Navbars from './Components/Header/Navbar';

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
=======
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import SingleProuct from "./components/SingleProduct/SingleProuct";
import Slider from "./components/Slider/Slider";

function App() {
  return <div>
    <Navbar></Navbar>
    <Slider />
    <SingleProuct></SingleProuct>
    <ProductDetail></ProductDetail>
    <Footer></Footer>
  </div>

>>>>>>> development
}

export default App;
