import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Signup from "./components/Login/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";
import { createContext, useState } from "react";
import Review from "./components/Review/Review";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Shop from "./components/Shop/Shop";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/product/:productId">
            <ProductDetail/>
          </Route>
          <PrivateRoute path="/contract">
            <Contact />
          </PrivateRoute>
          <Route path="review">
            <Review />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
