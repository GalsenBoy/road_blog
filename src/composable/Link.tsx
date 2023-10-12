import { NavLink } from "react-router-dom"

type LinkProps = {
    content :string,
    to:string
}

export default function Link({content,to}:LinkProps){
return <NavLink to={to}>{content}</NavLink>
}