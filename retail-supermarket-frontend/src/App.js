import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Suppliers from "./pages/Suppliers/Suppliers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="suppliers" element={<Suppliers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
