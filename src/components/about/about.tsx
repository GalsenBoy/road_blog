import "./about.scss";
import { aboutData } from "./aboutData";
export default function About() {
  return (
    <section>
      <div id="about">
        <div id="about-content">
          <img src="/moi.webp" alt="bilaly" />
          <div id="text">
            <p className="inline">Salut ! Je m'appelle </p>
            <h1>
              <strong>Bilaly Cissokho</strong>
            </h1>
            {aboutData.map((about, index) => (
              <p key={index} className={about.class}>
                {about.paragraph}
              </p>
            ))}
          </div>
        </div>
        <div id="about-thanks">
          <p>
            Rejoignez-moi dans cette aventure d'apprentissage et d'innovation,
            où nous explorerons ensemble les multiples facettes de React, NestJS
            et TypeScript. N'hésitez pas à laisser vos commentaires, suggestions
            et questions - la communauté que nous créons ici est le moteur qui
            alimente ma passion pour le développement web.
          </p>
        </div>
      </div>
    </section>
  );
}
