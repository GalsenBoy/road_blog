import { useEffect, useState } from "react";
import "./card.scss";
import IPost from "../../interfaces/IPost";
import axios from "axios";
import { API_REMOTE } from "../../routes";
import DisplayCard from "../display_card/DisplayCard";

export default function Card() {
  const [posts, setPosts] = useState<IPost[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAllPosts = async () => {
    try {
      const response = await axios.get(`${API_REMOTE}posts`);
      setPosts(response.data);
      setIsLoading(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div id="card-flex">
      {isLoading && (
        <>
          {posts?.map((post,key) => (
            <DisplayCard key={key} post={post}/>
          ))}
        </>
      )}
    </div>
  );
}
