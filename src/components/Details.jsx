import { useTranslation } from "react-i18next";
import "../styles/details.css";

export default function Details({ currentOrder }) {
  const { t } = useTranslation();
  const dateOfArrival = currentOrder.eta.slice(0, -10);
  return (
    <div className="details-text">
      <p className="orderDetails-text-line">
        {t("Order")} {currentOrder.parcel_id}
      </p>
      <p className="orderDetails-text-line">
        {t("EstimatedDateOfArrival")} {dateOfArrival}
      </p>
      <p className="orderDetails-text-line">
        {t("Location")} {currentOrder.location_name}
      </p>
      <p className="orderDetails-text-line">
        {t("Sender")} {currentOrder.sender}
      </p>
      <p className="orderDetails-text-line">
        {t("Status")} {currentOrder.status}
      </p>
    </div>
  );
}
