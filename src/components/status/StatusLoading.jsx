import "../../styles/status.css";

export default function StatusLoading() {
  return (
    <div className="status-content">
      <h3>We are loading your parcels, please stay sit!</h3>
      <div className="status-loader"></div>
    </div>
  );
}
