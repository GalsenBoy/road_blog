import { useState, useEffect } from "react";
import "../css/card.scss";
import IPost from "../interfaces/IPost";
import axios from "axios";
import { API_REMOTE } from "../routes";
import CardItems from "../composable/CardItems";

export default function Card() {
  const [posts, setPosts] = useState<IPost[]>();
  const [isLoading, setIsLoading] = useState(false);

  const allPost = async () => {
    try {
      const response = await axios.get(API_REMOTE);
      setPosts(response.data);
      console.log(response.data);
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allPost();
  }, []);

  return (
    <section>
      {isLoading ? (
        posts?.map((post) => (
          <CardItems post={post} key={post.id}/>
        ))
      ) : (
        <p>Attend un peu bg</p>
      )}
    </section>
  );
}
