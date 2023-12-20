import { NavLink } from "react-router-dom";

type linkProps = {
  to: string;
  className?: string;
  content?: string;
  imageSrc?: string; 
  altText?: string;
};
export default function Link({
  to,
  className,
  content,
  imageSrc,
  altText,
}: linkProps) {
  return (
    <NavLink to={to} className={className}>
      {imageSrc && <img src={imageSrc} alt={altText} />}{" "}
      {content}
    </NavLink>
  );
}
