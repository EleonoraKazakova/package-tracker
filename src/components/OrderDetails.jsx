import { useParams, useNavigate } from "react-router-dom";
import Details from "./Details";
import Map from "./Map";
import "../styles/orderDetails.css";
import "../styles/base/button.css";

export default function OrderDetails({ orders }) {
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
              <h5>Go back</h5>
            </button>
          </section>
          <Map
            locationCoordinates={locationCoordinates}
            location={currentOrder.location_name}
          />
        </div>
      ) : (
        <div>
          <button onClick={() => navigate(-1)} className="button-style">
            <h5>Go back</h5>
          </button>
        </div>
      )}
    </main>
  );
}
