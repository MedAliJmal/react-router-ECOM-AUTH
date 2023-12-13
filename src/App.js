import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entete from "./components/Entete";
import Profile from "./components/Profile";
import Login from "./components/Login";
import AdminProductList from "./components/AdminProductList";
import UserProductList from "./components/UserProductList";
import { useState } from "react";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Entete search={search} handleSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin/products"
            element={<AdminProductList search={search} />}
          />
          <Route
            path="/user/products"
            element={<UserProductList search={search} />}
          />
          <Route path="/user/products/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
