export default function Details({ currentOrder }) {
  return (
    <div>
      <p className="orderDetails-text-line">Order: {currentOrder.parcel_id}</p>
      <p className="orderDetails-text-line">
        Estimated date of arrival: {currentOrder.eta.slice(0, -10)}
      </p>
      <p className="orderDetails-text-line">
        Location: {currentOrder.location_name}
      </p>
      <p className="orderDetails-text-line">Sender: {currentOrder.sender}</p>
      <p className="orderDetails-text-line">Status: {currentOrder.status}</p>
    </div>
  );
}
