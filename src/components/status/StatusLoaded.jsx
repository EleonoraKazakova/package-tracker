import HomePage from "../HomePage";
import OrderDetails from "../OrderDetails";
import { Routes, Route } from "react-router-dom";

export default function StatusLoaded({ orders }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage orders={orders} />} />
      <Route path="/:order" element={<OrderDetails orders={orders} />} />
    </Routes>
  );
}
