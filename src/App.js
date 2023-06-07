import './App.css';
import {Route, Routes} from "react-router";
import Layout from "./router/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import McDonaldsSection from "./Components/McDonalds/McDonaldsSection";
import McDaysSection from "./Components/McDays/McDaysSection";
import KebabSection from "./Components/Kebab/KebabSection";
import KfcSection from "./Components/Kfc/KfcSection";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  return (
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path="/" element={<HomePage/>}/>
      <Route path="mcdonalds" element={<McDonaldsSection/>}/>
      <Route path="kfc" element={<KfcSection/>}/>
      <Route path="kebab" element={<KebabSection/>}/>
      <Route path="mcdays" element={<McDaysSection/>}/>
      <Route path="cart" element={<CartPage/>}/>
    </Route>
    </Routes>
  );
}

export default App;
