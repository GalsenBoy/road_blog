type ButtonProps = {
  content: string;
};
import "../css/button.scss"

export default function Button({ content }: ButtonProps) {
  return <button>{content}</button>;
}
