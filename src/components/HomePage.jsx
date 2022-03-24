import { useTranslation } from "react-i18next";
import Order from "./Order";
import "../styles/homePage.css";

export default function HomePage({ orders }) {
  const { t } = useTranslation();
  const dataOrders = orders.map((parcel) => (
    <Order parcel={parcel} key={parcel.id} />
  ));

  return (
    <section className="homePage-content">
      <h1 className="homePage-title">{t("title")}</h1>
      <div className="homePage-block">{dataOrders}</div>
    </section>
  );
}
