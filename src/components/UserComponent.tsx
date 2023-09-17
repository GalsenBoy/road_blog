import { useState } from "react";
import UserList from "../composable/UserList";
import { IUser } from "../interfaces/IUser";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  id: string;
  newUser: string;
};

export default function UserComponent() {
  const { register, handleSubmit } = useForm<Inputs>();

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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newUserId = parseInt(data.id);
    const newUserName = data.newUser;

    const newUser: IUser = {
      id: newUserId,
      name: newUserName,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-sm mx-auto gap-5"
      >
        <input className="text-black" {...register("id", { required: true })} />
        <input
          className="text-black"
          {...register("newUser", { required: true })}
        />
        <input type="submit" />
      </form>
    </>
  );
}
