import Link from "../../composable/Links";
import IPost from "../../interfaces/IPost";
import { truncate } from "../../utils/truncate";

type DisplayCardProps = {
    post:IPost;
    key: number |string
}
export default function DisplayCard({post,key}:DisplayCardProps) {
  return (
    <div id="card-container" key={key}>
      <div id="card-data">
        <div>
          {post.upload &&
            post.upload.map((upload, index) => (
                <Link key={index} to={`/post/${post.id}`} imageSrc={upload.originalname} altText={upload.fieldname}/>
            ))}
          <h3>{post.title}</h3>
          <p>{truncate(post.description)}</p>
          <p id="publication">Publié le 11 Dec 2028</p>
        </div>
      </div>
    </div>
  );
}
