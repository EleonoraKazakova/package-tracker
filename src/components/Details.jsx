import { useTranslation } from "react-i18next";
import "../styles/details.css";

export default function Details({ currentOrder }) {
  const { t } = useTranslation();
  const dateOfArrival = currentOrder.eta.slice(0, -10);
  const currentOrderData = [
    [t("Order"), currentOrder.parcel_id],
    [t("EstimatedDateOfArrival"), dateOfArrival],
    [t("Location"), currentOrder.location_name],
    [t("Sender"), currentOrder.sender],
    [t("Status"), currentOrder.status],
  ];

  const currentOrderBlock = currentOrderData.map(([text, value]) => (
    <p className="orderDetails-text-line" key={value}>
      {text} {value}
    </p>
  ));

  return <div className="details-text">{currentOrderBlock}</div>;
}
