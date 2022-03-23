import "../../styles/statusLoading.css";
export default function StatusError() {
  return (
    <main className="statusLoading-content">
      <h3>Welcome to our app</h3>
      <h3>
        Sorry we could not load the data. Please refresh the page to try again.
      </h3>
      <div className="statusLoading-loader"></div>
    </main>
  );
}
