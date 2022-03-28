import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Details from "./Details";
import Map from "./Map";
import "../styles/orderDetails.css";
import "../styles/base/button.css";

// This should be on OrderDetails
export default function OrderDetailsPage({ orders }) {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const currentOrder = orders.find((order) => order.parcel_id === params.order);

  // This undefined check can be done on the parent, to avoid the nesting
  const locationCoordinates =
    currentOrder !== undefined
      ? [
          currentOrder.location_coordinate_latitude,
          currentOrder.location_coordinate_longitude,
        ]
      : null;

  // Semantic tags -1, you cannot have a main inside another main. You can only have one main in the whole document, just like the h1 tag
  // removed the <main> for the review and leaved only the <section>
  return (
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
  );
}
