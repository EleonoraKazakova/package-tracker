import Order from "./Order";
import "../styles/hero.css";

export default function HomePage({ orders }) {
  const dataOrders = orders.map((parcel) => <Order parcel={parcel} />);

  return (
    <section className="hero-content">
      <p className="hero-block">{dataOrders}</p>
    </section>
  );
}
