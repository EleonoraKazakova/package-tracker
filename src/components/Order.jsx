import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/order.css";
import Globe from "../pictures/globe.svg";
import Passport from "../pictures/passport.svg";
import Stack from "../pictures/stack.svg";

export default function Order({ parcel }) {
  const { t } = useTranslation();
  const parcelData = [
    [Passport, t("ParcelId"), parcel.parcel_id],
    [Stack, t("Status"), parcel.status],
    [Globe, t("Location"), parcel.location_name],
  ];

  const parcelBlock = parcelData.map(([img, text, value]) => (
    <li className="order-list-block" key={value}>
      <img src={img} className="order-img" />
      <div className="order-row">
        <p>{text}</p>
        <p>{value}</p>
      </div>
    </li>
  ));

  return (
    <div className="order-content">
      <ul className="no-bullets">{parcelBlock}</ul>

      <Link to={`/${parcel.parcel_id}`} className="order-button">
        <h4>{t("ViewDetails")}</h4>
      </Link>
    </div>
  );
}
