
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbartest from "./components/HomePage/Navbartest";
import {Card} from "./components/HomePage/Card";
import Footer from "./components/HomePage/Footer";
import HeroSection from "./components/CatalogPage/HeroSection";
import Typewriter from "./components/CatalogPage/CaffeePage/TextWrap";
import Page from "./components/CatalogPage/CardSlide";
import CardScaleAnimation from "./components/CatalogPage/SpecialCard";
import Cardproducts from "./components/CatalogPage/CaffeePage/Cardproducts";
import BobbleCard from "./components/CatalogPage/BobbleTea/BobbleCard";

const App = () => (
  <body className=" bg-[#A2845E]">
    <BrowserRouter>
     <Navbartest/>
     <Routes>
      <Route path="/" element={<Card/>}/>
      <Route path="/CatalogPage" element={<HeroSection/>}/>
     </Routes>
    </BrowserRouter>
    <div className="mt-52">
       <Footer/>
    </div>
   
  </body>
);

export default App;



