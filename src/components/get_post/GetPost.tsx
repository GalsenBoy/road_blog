import { useParams } from "react-router-dom";
import "./get_post.scss";
import { useEffect, useState } from "react";
import IPost from "../../interfaces/IPost";
import axios from "axios";
import { API_REMOTE, LOCAL } from "../../routes";
export default function GetPost() {
  const { postId } = useParams();
  const [post, setPost] = useState<IPost>();

  const getPost = async () => {
    try {
      const response = await axios.get(`${API_REMOTE}posts/${postId}`);
      setPost(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPost();
  }, [postId]);

  console.log(post);

  return (
    <section>
      <div id="getPostContain">
        <h1>{post?.title}</h1>
        {post?.upload &&
          post.upload.map((upload, index) => (
            <img
              key={index}
              src={`${LOCAL}/${upload.originalname}`}
              alt={upload.originalname}
            />
          ))}
        <div>
          <p>{post?.description}</p>
        </div>
      </div>
    </section>
  );
}
