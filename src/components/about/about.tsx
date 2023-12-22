import "./about.scss";
export default function About() {
  return (
    <section>
      <div id="about">
        <div id="about-content">
          <img src="/man.jpg" alt="bilaly" />
          <div id="test">
            <p className="inline">Salut ! Je m'appelle </p>
            <h1>
              <strong>Bilaly Cissokho</strong>
            </h1>
            <p className="inline">
              {" "}
              , passionné de développement web, actuellement en alternance chez
              Infoconseil à Neuilly-Sur-Seine depuis avril dernier. Mon parcours
              dans le monde du développement a débuté par un stage enrichissant
              de deux mois aux côtés d'un autoentrepreneur, où j'ai plongé dans
              les méandres de la création web avec une énergie débordante.
            </p>
            <p>
              Mon quotidien chez Infoconseil m'a offert une immersion totale
              dans le domaine, me permettant d'acquérir des compétences
              pratiques et une vision concrète du développement web. En
              parallèle, je m'investis pleinement dans la création de ce blog
              dédié à React, NestJS et TypeScript.
            </p>{" "}
            <p>
              Ce blog est bien plus qu'un simple espace virtuel pour moi. C'est
              un lieu où je partage mes découvertes, mes expériences et mes
              astuces dans l'écosystème passionnant de React, NestJS et
              TypeScript. Je suis convaincu que la collaboration et le partage
              de connaissances sont essentiels dans notre communauté de
              développeurs.
            </p>{" "}
            <p>
              Mon objectif avec ce blog est de fournir des ressources utiles,
              des tutoriels pratiques et des retours d'expérience concrets pour
              aider les développeurs, du débutant au confirmé, à naviguer plus
              aisément dans ces technologies modernes.
            </p>{" "}
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
