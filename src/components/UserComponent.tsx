import { useState } from "react";
import UserList from "../composable/UserList";
import { IUser } from "../interfaces/IUser";
import DeleteUser from "../composable/DeleteUser";

export default function UserComponent() {
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
    const updatedUsers = DeleteUser(users, userId);
    setUsers(updatedUsers);
  };

  return (
    <div>
      {users.map((user) => (
        <UserList user={user} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
