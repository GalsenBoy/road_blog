import { useState, useEffect } from "react";
import "../css/card.scss";
import IPost from "../interfaces/IPost";
import axios from "axios";
import { API_REMOTE } from "../routes";
import CardItems from "../composable/CardItems";
import Link from "../composable/Link";

export default function Card() {
  const [posts, setPosts] = useState<IPost[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const allPost = async () => {
    try {
      const response = await axios.get(API_REMOTE);
      setPosts(response.data.post);
      console.log(response.data.post);
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
      <Link content="Créer un blog" to="/create-blog" />
      {isLoading ? (
        posts?.map((post) => <CardItems post={post} key={post.id} />)
      ) : (
        <p>Attend un peu bg c'est entrain de charger</p>
      )}
    </section>
  );
}
