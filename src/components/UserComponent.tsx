import { useState } from "react";
import UserList from "../composable/UserList";
import { IUser } from "../interfaces/IUser";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function UserComponent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example"));
  const [users, setUsers] = useState<IUser[]>([
    {
      id: 1,
      name: "Billy",
    },
    {
      id: 2,
      name: "Cisko",
    },
    {
      id: 3,
      name: "bob",
    },
    {
      id: 4,
      name: "bla",
    },
    {
      id: 5,
      name: "bob",
    },
  ]);

  const handleDelete = (userId: number) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <>
      <div>
        {users.map((user) => (
          <UserList user={user} handleDelete={handleDelete} />
        ))}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
}
