import "./App.css";
import FeaturedProduct from "./components/FeaturedProduct/FeaturedProduct";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import SingleProuct from "./components/SingleProduct/SingleProuct";
import Slider from "./components/Slider/Slider";

function App() {
  return <div>
    <Navbar></Navbar>
    <Slider />
    <FeaturedProduct />
    <SingleProuct></SingleProuct>
    <ProductDetail></ProductDetail>
    <Footer></Footer>
  </div>

}

export default App;
