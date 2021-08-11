import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Signup from "./components/Login/Signup";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Review from "./components/Review/Review";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";
import ShopPage from "./components/ShopPage/ShopPage";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar />
        <div className="mt-20">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/contact" component={Contact} />
            <Route path="/review" component={Review} />
            <Route path="/products" component={ShopPage} />
            <Route path="/product/:productid" component={ProductDetail} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            {/* <PrivateRoute path="/orders" component={Orders} />
            <PrivateRoute path="/allproducts" component={Dashboard} />
            <PrivateRoute path="/uploadproduct" component={Dashboard} />
            <PrivateRoute path="/customers" component={Dashboard} /> */}
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
