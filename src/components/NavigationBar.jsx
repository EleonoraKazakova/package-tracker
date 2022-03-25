import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/navigationBar.css";
import Logo from "../pictures/Logo.png";
import English from "../pictures/United_Kingdom.jpg";
import Swedish from "../pictures/Sweden.png";

export default function NavigationBar() {
  const { i18n } = useTranslation();

  function changeCurrentLanguage() {
    i18n.changeLanguage(i18n.language === "en" ? "se" : "en");
  }

  const srcImg = i18n.language === "en" ? English : Swedish;

  return (
    <nav className="navigationBar-content">
      <Link to="/">
        <img src={Logo} className="navigationBar-logo" />
      </Link>

      <img
        src={srcImg}
        className="navigationBar-img"
        onClick={changeCurrentLanguage}
      />
    </nav>
  );
}
