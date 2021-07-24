import "./App.css";
import Footer from "./components/Footer/Footer";
import HotProducts from "./components/HotProducts/HotProducts";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import SingleProuct from "./components/SingleProduct/SingleProuct";
import Slider from "./components/Slider/Slider";

function App() {
  return <div>
    <Navbar></Navbar>
    <Slider />
    <SingleProuct></SingleProuct>
    <HotProducts/>
    <ProductDetail></ProductDetail>
    <Footer></Footer>

  </div>

}

export default App;
