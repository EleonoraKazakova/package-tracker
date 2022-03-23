import { useState, useEffect } from "react";
import "./styles/app.css";
import HomePage from "./components/HomePage";
import Bar from "./components/NavigationBar";
import Footer from "./components/Footer";
import OrderDetails from "./components/OrderDetails";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [orders, setOrders] = useState([]);
  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  function loadData(url, setOrders) {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => setOrders(data))
      .catch((error) => console.error("There was an error:", error));
  }

  useEffect(() => loadData(url, setOrders), []);
  return (
    <div className="app-grid">
      <Bar />
      <Routes>
        <Route path="/" element={<HomePage orders={orders} />} />
        <Route path="/:order" element={<OrderDetails orders={orders} />} />
      </Routes>
      <Footer />
    </div>
  );
}
