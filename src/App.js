import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Signupscreen from "./components/screens/Signupscreen";
import Loginscreen from "./components/screens/Loginscreen";
import ProductDetails from "./components/screens/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
            <Routes>
              <Route path="/signup" element={<Signupscreen/>} />
            </Routes>
            <Routes>
              <Route path="login" element={<Loginscreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
