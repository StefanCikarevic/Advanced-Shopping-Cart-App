import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";

import "./App.css";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar></Navbar>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/store" element={<Store></Store>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;