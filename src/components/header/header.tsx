import { useLocation } from "react-router-dom";
import Link from "../../composable/Links";
import ILink from "../../interfaces/ILink";
import "./header.scss";

export default function Header() {
  const location = useLocation();
  const navs :ILink[] = [
    {
      to:"/contact",
      content:"Contact",
      isActive:"http://localhost:5173/contact"
    },
    {
      to:"/blog",
      content:"Blog",
      isActive:"http://localhost:5173/blog"
    },
    {
      to:"/about",
      content:"A propos",
      isActive:"http://localhost:5173/about"
    },
  ]

  
  return (
    <header>
      <div id="header-container">
        <Link imageSrc="/bc.webp" altText="bilalyCissokho" to="/"/>
        <div id="nav">
        {navs.map((nav,key) => (
          <Link to={nav.to} content={nav.content} key={key} className={location.pathname === nav.to ? 'isActive' : ''}/>
        ))}
        </div>
      </div>
    </header>
  );
}
