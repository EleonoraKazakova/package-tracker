import { useState, useEffect } from "react";
import "../styles/hero.css";

export default function Hero() {
  const [data, setData] = useState([]);
  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  useEffect(
    () =>
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          console.log("json:", json);
          setData(json);
        }),
    []
  );

  const dataOrders = data.map((order) => order.id);

  return (
    <div className="hero-content">
      <p className="hero-block">{dataOrders}</p>
    </div>
  );
}
