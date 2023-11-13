import Button from "../composable/Button";
import Input from "../composable/Input";
import "../css/blog_form.scss";

export default function BlogForm() {
  return (
    <section>
      <form action="">
        <div id="form-container">
          <div className="input-group">
            <Input placeholder="Titre du blog" type="text" />
          </div>
          <div className="input-group">
            <textarea placeholder="Contenu du blog" rows={7}></textarea>
          </div>
          <Button content="Publier"/>
        </div>
      </form>
    </section>
  );
}
