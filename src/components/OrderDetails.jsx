import { useParams, useNavigate } from "react-router-dom";
import Map from "./Map";
import "../styles/orderDetails.css";

export default function OrderDetails({ orders }) {
  const params = useParams();
  const navigate = useNavigate();
  /**eta: "2021-09-21T03:11:47Z"​
id: 6​
last_updated: "2021-09-22T23:17:37Z"​
location_coordinate_latitude: -21.1880429​
location_coordinate_longitude: -43.9759925​
location_id: "MU11 VVRF 4955 7761 3978 9508 901F NL"​
location_name: "Dryden"​
location_status_ok: true​
notes: null​
parcel_id: "1049"​
sender: "Topicblab"​
status: "order-info-received"​
user_name: "Carl Johan De Geer"​
user_phone: "+46 729478015"​
verification_required: true */

  console.log("params:", params);
  const currentOrder = orders.find((order) => order.parcel_id === params.order);
  const locationCoordinates = [
    currentOrder.location_coordinate_latitude,
    currentOrder.location_coordinate_longitude,
  ];
  return (
    <main className="orderDetails-content">
      <div className="orderDetails-block">
        <section className="orderDetails-text">
          <p>Order: {currentOrder.parcel_id}</p>
          <p>Location: {currentOrder.location_name}</p>
          <p>Sender: {currentOrder.sender}</p>
          <p>Status: {currentOrder.status}</p>
          <button onClick={() => navigate(-1)}>Go back</button>
        </section>
        <Map locationCoordinates={locationCoordinates} />
      </div>
    </main>
  );
}
