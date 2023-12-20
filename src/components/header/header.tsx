import Link from "../../composable/Links";
import ILink from "../../interfaces/ILink";
import "./header.scss";

export default function Header() {

  const navs :ILink[] = [
    {
      to:"/test",
      content:"Hi the world"
    },
    {
      to:"/blog",
      content:"Blog"
    },
    {
      to:"/about",
      content:"A propos"
    },
  ]
  return (
    <header>
      <div id="header-container">
        <Link imageSrc="/bc.webp" altText="bilalyCissokho" to="/"/>
        <div id="nav">
        {navs.map((nav,key) => (
          <Link to={nav.to} content={nav.content} key={key}/>
        ))}
        </div>
      </div>
    </header>
  );
}
