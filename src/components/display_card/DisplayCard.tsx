import Link from "../../composable/Links";
import IPost from "../../interfaces/IPost";
import { truncate } from "../../utils/truncate";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

type DisplayCardProps = {
  post: IPost;
};
export default function DisplayCard({ post }: DisplayCardProps) {
  const formattedDate = format(new Date(post.create_at), "dd MMM yyyy", {
    locale: fr,
  });

  return (
    <div id="card-container">
      <div id="card-data">
        <div>
          {post.upload &&
            post.upload.map((upload, index) => (
              <Link
                key={index}
                to={`/post/${post.id}`}
                imageSrc={upload.originalname}
                altText={upload.fieldname}
              />
            ))}
          <h3>{post.title}</h3>
          <p>{truncate(post.description)}</p>
          <p id="publication">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}
