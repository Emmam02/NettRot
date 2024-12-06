import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import ProductContextProvider from "./context/ProductContext";
import UserContextProvider from "./context/UserContext";
import PurchaseContextProvider from "./context/PurchaseContext";
import CreateAccount from "./components/CreateAccount";
import AddAddress from "./components/AddAddress";
import { LoggedInProvider } from "./context/LoggedInContext";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <LoggedInProvider>
      <ProductContextProvider>
        <UserContextProvider>
          <PurchaseContextProvider>
            <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" elemt={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:ProductID" element={<SingleProduct />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/add-address" element={<AddAddress />} />
                <Route path="/place-order" element={<PlaceOrder />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </PurchaseContextProvider>
        </UserContextProvider>
      </ProductContextProvider>
    </LoggedInProvider>
  );
}

export default App;
