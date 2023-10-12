import { useState,useEffect } from "react";
import "../css/card.scss";
import IPost from "../interfaces/IPost";
import axios from "axios";
import { API_REMOTE } from "../routes";

export default function Card() {
  const [posts, setPosts] = useState<IPost>([]);
  const [isLoading, setIsLoading] = useState(false);

  const allPost = async () => {
    try {
      const response = await axios.get(API_REMOTE);
      setPosts(response.data);
      console.log(response.data)
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    allPost()
  },[])

  return (
    <section>
      {isLoading? ( <div id="card-container">
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
        <p id="contenu-blog">
          Le contenu du blog fefffffff effffffffffff efffffffff effffffff
        </p>
      </div>):(
        <p>C'est entrain de charger bg attend un peu</p>
      )}
     
    </section>
  );
}
