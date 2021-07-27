import "./App.css";
import Discount from "./components/Discount/Discount";
import FeaturedProduct from "./components/FeaturedProduct/FeaturedProduct";
import Footer from "./components/Footer/Footer";
import HotProducts from "./components/HotProducts/HotProducts";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Signup from "./components/Login/Signup";
import SingleProuct from "./components/SingleProduct/SingleProuct";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Signup />
      <Slider />
      <FeaturedProduct />
      <SingleProuct></SingleProuct>
      <HotProducts />
      <Discount />
      <ProductDetail></ProductDetail>
      <Footer></Footer>
    </div>
  );
}

export default App;
