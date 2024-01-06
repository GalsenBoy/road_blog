import { useLocation } from "react-router-dom";
import Link from "../../composable/Links";
import "./header.scss";
import { navs } from "./navs";

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <div id="header-container">
        <Link imageSrc="/bc.webp" altText="bilalyCissokho" to="/" />
        <div id="nav">
          {navs.map((nav, key) => (
            <Link
              to={nav.to}
              content={nav.content}
              key={key}
              className={location.pathname === nav.to ? "isActive" : ""}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
