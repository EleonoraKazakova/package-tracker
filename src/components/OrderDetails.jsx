import { useParams } from "react-router-dom";
import OrderDetailsPage from "./OrderDetailsPage";
import OrderDetailsError from "./OrderDetailsError";
import "../styles/orderDetails.css";
import "../styles/base/button.css";

export default function OrderDetails({ orders }) {
  const params = useParams();
  const currentOrder = orders.find((order) => order.parcel_id === params.order);

  // Nesting -1
  // The code works and i can understand it, but making an earlier return is a more elegant solution
  // See example
  if (currentOrder === undefined) return <OrderDetailsError />;

  return <main>{/* Put the whole content of OrderDetailsPage here */}</main>;
}
