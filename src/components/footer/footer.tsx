import Link from "../../composable/Links";
import ILink from "../../interfaces/ILink";
import "./footer.scss";

export default function Footer() {
  const year: number = new Date().getFullYear();
  const socialsMedia: ILink[] = [
    {
      to: "https://github.com/GalsenBoy",
      imageSrc: "/github.webp",
      altText: "github",
    },
    {
      to: "https://www.linkedin.com/in/bilaly-cissokho-473400278/?originalSubdomain=fr",
      imageSrc: "/linkedin.webp",
      altText: "linkedin",
    },
  ];
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
