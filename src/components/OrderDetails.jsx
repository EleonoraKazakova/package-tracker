import { useParams } from "react-router-dom";
import OrderDetailsPage from "./OrderDetailsPage";
import OrderDetailsError from "./OrderDetailsError";
import "../styles/orderDetails.css";
import "../styles/base/button.css";

export default function OrderDetails({ orders }) {
  const params = useParams();
  const currentOrder = orders.find((order) => order.parcel_id === params.order);

  return (
    <main>
      {currentOrder !== undefined ? (
        <OrderDetailsPage orders={orders} />
      ) : (
        <OrderDetailsError />
      )}
    </main>
  );
}
