import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/CartPage";
import Home from "./pages/HomePage";
import NotFound from "./pages/NotFoundPage";
import ItemDetails from "./pages/ItemDetails";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/*" element={<Navigate to="/not-found" />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
