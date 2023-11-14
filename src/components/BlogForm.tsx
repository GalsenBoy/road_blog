import Button from "../composable/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import "../css/blog_form.scss";
import axios from "axios";
import { API_REMOTE } from "../routes";

type InputsType = {
  title: string;
  content: string;
};
export default function BlogForm() {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<InputsType>();
  const onSubmit: SubmitHandler<InputsType> = async (data) => {
    try {
      await axios.post(`${API_REMOTE}post`, data);
      console.log(data);
    } catch (error) {
      console.error(error);
      console.log(data);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="form-container">
          <div className="input-group">
            <input
              placeholder="Titre du blog"
              type="text"
              {...register("title")}
            />
          </div>
          
          <div className="input-group">
            <textarea
              placeholder="Contenu du blog"
              rows={7}
              {...register("content")}
            ></textarea>
          </div>
          <Button content="Publier" />
        </div>
      </form>
    </section>
  );
}
