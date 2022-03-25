import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Details from "./Details";
import Map from "./Map";
import "../styles/orderDetails.css";
import "../styles/base/button.css";

export default function OrderDetailsPage({ orders }) {
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
      <section className="orderDetails-content">
        <div className="orderDetails-grid">
          <Details currentOrder={currentOrder} className="orderDetails-text" />

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
        </div>
      </section>
      )
    </main>
  );
}
