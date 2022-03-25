import { useTranslation } from "react-i18next";
import "../../styles/status.css";

export default function StatusError() {
  const { t } = useTranslation();

  return (
    <main className="status-content">
      <h3>{t("WelcomeToOurApp")}</h3>
      <h3>{t("Sorry")}</h3>
      <div className="status-loader"></div>
    </main>
  );
}
