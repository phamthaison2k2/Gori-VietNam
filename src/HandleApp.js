import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Product from './render/Product/Product'
import Contact from './render/Contact/Contact';
import ProductSeason from './render/ProductSeason/ProductSeason';
import ProductBasic from "./render/ProductBasic/ProducBasic";
import ProductHoodie from "./render/ProductHoodie/ProductHoodie";
import ProductTote from './render/ProductTote/ProductTote';
import ProductOldskull from './render/ProductOldskull/ProductOldskull';




function HandleApp() {
  return (
    <div className="">

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/product/season" element={<ProductSeason />}/>
        <Route path="/product/basic" element={<ProductBasic />}/>
        <Route path="/product/hoodie" element={<ProductHoodie />}/>
        <Route path="/product/tote" element={<ProductTote />}/>
        <Route path="/product/oldskull" element={<ProductOldskull />}/>
      </Routes>
    </div>
  );
}

export default HandleApp;


