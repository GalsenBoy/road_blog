import { useState } from "react";
import UserList from "../composable/UserList";
import { IUser } from "../interfaces/IUser";
import AddUser from "../composable/AddUser";
type Inputs = {
  id: string;
  newUser: string;
};

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

  const handleAddUser = (newUser: Inputs) => {
    const newUserId = parseInt(newUser.id);
    const newUserName = newUser.newUser;

    const newUserObj: IUser = {
      id: newUserId,
      name: newUserName,
    };

    setUsers([...users, newUserObj]);
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
      <AddUser onSubmit={handleAddUser} />
    </>
  );
}
