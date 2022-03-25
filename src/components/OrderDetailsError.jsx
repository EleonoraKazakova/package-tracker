import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/orderDetails.css";
import "../styles/base/button.css";

export default function OrderDetailsError() {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();

  return (
    <section className="orderDetails-error orderDetails-content-error">
      <h2>We could not load your page. You need to go back</h2>
      <button onClick={() => navigate(-1)} className="button-style">
        <p>{t("GoBack")}</p>
      </button>
    </section>
  );
}
