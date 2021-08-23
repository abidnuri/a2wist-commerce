import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import { currentUser } from "./components/functions/firebaseAuth";
import UserHistory from "./components/pages/user/UserHistory";
import UserRoute from './components/Routes/UserRoute';
import AdminRoute from './components/Routes/AdminRoute';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Dashboard from "./components/Dashboard/Dashboard";
import UserDashboard from "./components/Dashboard/UserDashboard/UserDashboard";
import Home from "./components/Home/Home";
import { auth } from "./components/Login/firebase.config";
import ForgetPassword from './components/Login/ForgetPassword/ForgetPassword';
import Signup from "./components/Login/Signup";
import SignupComplete from './components/Login/SignupComplete/SignupComplete';
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Review from "./components/Review/Review";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";
import ShopPage from "./components/ShopPage/ShopPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';;

function App() {
  const dispatch = useDispatch();

  // checking the firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log("user", user);

        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, []);

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
          <Route path="/about" component={About} />
          <Route path="/forget" component={ForgetPassword} />
          <Route path="/user" component={UserDashboard} />
          <AdminRoute path="/dashboard" component={Dashboard} />
          <UserRoute path="/user/history" component={UserHistory} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
