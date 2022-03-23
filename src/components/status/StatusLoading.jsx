import "../../styles/statusLoading.css";

export default function StatusLoading() {
  return (
    <div className="statusLoading-content">
      <h3>We are loading your parcels, please stay sit!</h3>
      <div className="statusLoading-loader"></div>
    </div>
  );
}
