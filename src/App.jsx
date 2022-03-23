import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/app.css";
import Bar from "./components/NavigationBar";
import Footer from "./components/Footer";
import StatusError from "./components/status/StatusError";
import StatusLoading from "./components/status/StatusLoading";
import StatusLoaded from "./components/status/StatusLoaded";

export default function App() {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState(0);

  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840p";

  async function loadData(url, setOrders, setStatus) {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setOrders(json);
      console.log("json:", json);
      setStatus(1);
    } catch (error) {
      console.error("There was an error:", error);
      setStatus(2);
    }
  }
  console.log("status:", status);
  useEffect(() => loadData(url, setOrders, setStatus), []);

  return (
    <div className="app-grid">
      <BrowserRouter>
        <Bar />
        {status === 0 && <StatusLoading />}
        {status === 1 && <StatusLoaded orders={orders} />}
        {status === 2 && <StatusError />}
        <Footer />
      </BrowserRouter>
    </div>
  );
}
