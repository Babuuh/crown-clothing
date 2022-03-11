import "./App.css";
import HomePage from "./pages/homepage/homepage";
import {Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
import './App.css';
import HomePage from './pages/homepage/homepage';

function App() {
  return (
    <div>
        <HomePage />
    </div>
  );
}

export default App;
