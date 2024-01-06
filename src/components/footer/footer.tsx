import Link from "../../composable/Links";
import "./footer.scss";
import { socialsMedia } from "./socialMedia";

export default function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <footer>
      <div id="footer-container">
        <h3>Suivez-moi sur :</h3>
        <div>
          {socialsMedia.map((social, key) => (
            <Link
              to={social.to}
              imageSrc={social.imageSrc}
              altText={social.altText}
              key={key}
            />
          ))}
        </div>
      </div>
      <div id="copyright">
        <h4>{year} © BILALY CISSOKHO | Développeur web passionné</h4>
      </div>
    </footer>
  );
}
