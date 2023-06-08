import './App.css';
import {Route, Routes} from "react-router";
import Layout from "./router/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import CartPage from "./Pages/CartPage/CartPage";
import ShowRestaurants from "./Components/ShowRestaurants/ShowRestaurants";

function App() {
  return (
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/:showRestaurants" element={<ShowRestaurants/>}/>
      <Route path="/cart" element={<CartPage/>}/>
    </Route>
    </Routes>
  );
}

export default App;
