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

  // good idea of making the map pure, but you can skip the array and just pass the 3 args directly
  // This could be a separate component as it has a lot of tags inside (li, img, div, p, and p)
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

      {/* Semantic tags -1 */}
      {/* Don't use a title <h4> as a link, this is just pure text use */}
      {/* See the refactor */}
      <Link to={`/${parcel.parcel_id}`} className="order-button">
        {t("ViewDetails")}
      </Link>
    </div>
  );
}
