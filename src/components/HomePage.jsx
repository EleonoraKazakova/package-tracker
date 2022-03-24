import { useTranslation } from "react-i18next";
import Order from "./Order";
import "../styles/homePage.css";

export default function HomePage({ orders }) {
  const { t } = useTranslation();
  const dataOrders = orders.map((parcel) => <Order parcel={parcel} />);

  return (
    <section className="homePage-content">
      <h1>{t("title")}</h1>
      <p className="homePage-block">{dataOrders}</p>
    </section>
  );
}
