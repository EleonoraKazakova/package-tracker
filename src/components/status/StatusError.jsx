import "../../styles/statusLoading.css";
export default function StatusError() {
  return (
    <main className="statusLoading-content">
      <h3>Welcome to our app</h3>
      <p>
        Sorry we could not load the data. Please refresh the page to try again.
      </p>
      <div className="statusLoading-loader"></div>
    </main>
  );
}
