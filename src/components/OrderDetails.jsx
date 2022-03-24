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
    <main>
      {currentOrder !== undefined ? (
        <section className="orderDetails-grid orderDetails-content">
          <div className="orderDetails-text">
            <Details currentOrder={currentOrder} />
          </div>
          <button
            onClick={() => navigate(-1)}
            className="button-style orderDetails-button"
          >
            {t("GoBack")}
          </button>

          <Map
            locationCoordinates={locationCoordinates}
            location={currentOrder.location_name}
          />
        </section>
      ) : (
        <section className="orderDetails-error orderDetails-content-error">
          <h2>We could not load your page. You need to go back</h2>
          <button onClick={() => navigate(-1)} className="button-style">
            <p>{t("GoBack")}</p>
          </button>
        </section>
      )}
    </main>
  );
}
