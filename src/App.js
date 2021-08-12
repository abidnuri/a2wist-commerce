import { React, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Signup from "./components/Login/Signup";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Review from "./components/Review/Review";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";
import ShopPage from "./components/ShopPage/ShopPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignupComplete from './components/Login/SignupComplete/SignupComplete';
import { auth } from "./components/Login/firebase.config";
import { useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch();

  // checking the firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user){
        const idTokenResult = await user.getIdToken()
        
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: {
            email: user.email,
            token: idTokenResult.token,
          }
          
        })
      }
    })

    //cleaning 
    return () => unsubscribe();
  }, [])

  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <div className="mt-20">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/contact" component={Contact} />
          <Route path="/review" component={Review} />
          <Route path="/products" component={ShopPage} />
          <Route path="/product/:productid" component={ProductDetail} />
          <Route path="/complete" component={SignupComplete} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
