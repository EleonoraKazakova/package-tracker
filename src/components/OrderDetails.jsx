import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Details from "./Details";
import Map from "./Map";
import "../styles/orderDetails.css";
import "../styles/base/button.css";

export default function OrderDetails({ orders }) {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const currentOrder = orders.find((order) => order.parcel_id === params.order);

  const locationCoordinates =
    currentOrder !== undefined
      ? [
          currentOrder.location_coordinate_latitude,
          currentOrder.location_coordinate_longitude,
        ]
      : null;
  return (
    <main className="orderDetails-content">
      {currentOrder !== undefined ? (
        <div className="orderDetails-block">
          <section className="orderDetails-text">
            <Details currentOrder={currentOrder} />
            <button onClick={() => navigate(-1)} className="button-style">
              {t("GoBack")}
            </button>
          </section>
          <Map
            locationCoordinates={locationCoordinates}
            location={currentOrder.location_name}
          />
        </div>
      ) : (
        <div className="orderDetails-error">
          <h2>We could not load your page. You need to go back</h2>
          <button onClick={() => navigate(-1)} className="button-style">
            <p>{t("GoBack")}</p>
          </button>
        </div>
      )}
    </main>
  );
}
