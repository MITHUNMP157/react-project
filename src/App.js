import react, { useState } from "react";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import CartPage from "./components/CartPage";
import Home from "./components/Home";
import Products from "./components/newproduct/Products";
import ProductCartPage from "./components/newproduct/ProductCartPage";
import Profile from "./components/Profile";
import Login from "./components/Login";
import RegisterForm from "./components/RegisterForm";
import Logout from "./components/Logout";

function AppLayout() {
  const location = useLocation();

  const hideHeader = location.pathname === "/";

  return (
    <div>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/userprofile" element={<Profile />} />
        <Route path="/productpage" element={<Products />} />
        <Route path="/cartpage" element={<ProductCartPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
