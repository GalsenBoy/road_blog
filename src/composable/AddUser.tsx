import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    id: string;
    newUser: string;
  };
export default function AddUser({ onSubmit }: { onSubmit: (data: Inputs) => void }){
    const { register, handleSubmit } = useForm<Inputs>();
    const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
        onSubmit(data);
      };
    return(
        <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col max-w-sm mx-auto gap-5"
      >
        <input className="text-black" {...register("id", { required: true })} />
        <input
          className="text-black"
          {...register("newUser", { required: true })}
        />
        <input type="submit" />
      </form>
    )
}