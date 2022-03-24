import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/order.css";
import Globe from "../pictures/globe.svg";
import Passport from "../pictures/passport.svg";
import Stack from "../pictures/stack.svg";

export default function Order({ parcel }) {
  const { t } = useTranslation();
  return (
    <div className="order-content">
      <ul className="no-bullets">
        <li className="order-list-block">
          <img src={Passport} className="order-img" />
          <div className="order-row">
            <p>{t("ParcelId")}</p>
            <p>{parcel.parcel_id}</p>
          </div>
        </li>
        <li className="order-list-block">
          <img src={Stack} className="order-img" />
          <div className="order-row">
            <p>{t("Status")}</p>
            <p>{parcel.status}</p>
          </div>
        </li>
        <li className="order-list-block">
          <img src={Globe} className="order-img" />
          <div className="order-row">
            <p>{t("Location")}</p>
            <p>{parcel.location_name}</p>
          </div>
        </li>
      </ul>

      <Link to={`/${parcel.parcel_id}`} className="order-button">
        <h4>{t("ViewDetails")}</h4>
      </Link>
    </div>
  );
}
