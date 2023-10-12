import "../css/card.scss";

export default function Card() {
  return (
    <section>
      <div id="card-container">
        <div id="photo-post">
          <img src="/nature.jpg" alt="" />
        </div>
        <div id="personne">
          <div id="photo-profil">
            <img src="/woman.jpg" alt="" />
          </div>
          <div id="identite">
            <p>Fatima Zeynab</p>
            <p>Publié le 12/10/2023</p>
          </div>
        </div>
        <h1>Le titre du blog</h1>
        <p id="contenu-blog">Le contenu du blog fefffffff effffffffffff efffffffff effffffff</p>
      </div>
    </section>
  );
}
