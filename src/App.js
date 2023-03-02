import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/UI/Contact";
import Home from "./components/UI/Home";
import Shop from "./components/UI/Shop";
import Main from "./components/UI/Main";
import Cart from "./components/UI/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Main/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
