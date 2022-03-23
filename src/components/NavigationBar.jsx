import { Link } from "react-router-dom";
import "../styles/navigationBar.css";
import Logo from "../pictures/Logo.png";

export default function NavigationBar() {
  return (
    <div className="bar-content">
      <Link to="/">
        <img src={Logo} className="navigationBar-logo" />
      </Link>
    </div>
  );
}
