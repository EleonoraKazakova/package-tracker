import "../styles/footer.css";
import Facebook from "../pictures/facebook.svg";
import Instagram from "../pictures/instagram.svg";
import { ExternalLink } from "react-external-link";

export default function Footer() {
  return (
    <div className="footer-content">
      <ExternalLink href="https://www.facebook.com/">
        <img src={Facebook} className="footer-img" />
      </ExternalLink>
      <ExternalLink href="https://www.instagram.com/">
        <img src={Instagram} className="footer-img" />
      </ExternalLink>
    </div>
  );
}
