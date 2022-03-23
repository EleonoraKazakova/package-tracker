import Order from "./Order";
import "../styles/homePage.css";

export default function HomePage({ orders }) {
  const dataOrders = orders.map((parcel) => <Order parcel={parcel} />);

  return (
    <section className="homePage-content">
      <h1>Hi! We have some parcels for you:</h1>
      <p className="homePage-block">{dataOrders}</p>
    </section>
  );
}
