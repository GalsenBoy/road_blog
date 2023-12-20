import "./footer.scss";
export default function Footer() {
  const year: number = new Date().getFullYear();
  return (
    <footer>
      <div id="footer-container">
        <h3>Suivez-moi sur :</h3>
        <div>
          <img src="/github.webp" alt="github" />
          <img src="/linkedin.webp" alt="linkedin" />
        </div>
      </div>
      <div id="copyright">
        <h4>{year} © BILALY CISSOKHO | Développeur web passionné</h4>
      </div>
    </footer>
  );
}
