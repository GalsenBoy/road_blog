import Input from "../composable/Input";
import "../css/blog_form.scss"

export default function BlogForm() {
  return (
    <section>
      <form action="">
        <div id="form-container">
          <div>
            <Input placeholder="Titre du blog" type="text" />
          </div>
          <div>
            <Input placeholder="Contenu du blog" type="text" />
          </div>
        </div>
      </form>
    </section>
  );
}
