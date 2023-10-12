import { NavLink } from "react-router-dom";
import "../css/link.scss";
type LinkProps = {
  content: string;
  to: string;
};

export default function Link({ content, to }: LinkProps) {
  return (
    <div style={{display:"flex", justifyContent:"center",margin:"2em 0"}}>
      <NavLink to={to}>{content}</NavLink>
    </div>
  );
}
