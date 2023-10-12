import IPost from "../interfaces/IPost";

type CardItemsProps = {
  post: IPost;
};

export default function CardItems({ post }: CardItemsProps) {
  return (
    <div key={post.id} id="card-container">
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
      <h1>{post.title}</h1>
      <p id="contenu-blog">{post.content}</p>
    </div>
  );
}
