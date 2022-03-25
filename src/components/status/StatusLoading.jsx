import { useTranslation } from "react-i18next";
import "../../styles/status.css";

export default function StatusLoading() {
  const { t } = useTranslation();

  return (
    <main className="status-content">
      <h3>{t("Loading")}</h3>
      <div className="status-loader"></div>
    </main>
  );
}
