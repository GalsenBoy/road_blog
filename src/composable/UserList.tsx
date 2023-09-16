import { IUser } from "../interfaces/IUser";

type UserListProps = {
  user: IUser;
};

export default function UserList({ user }: UserListProps) {
  return (
    <p>
      {user.id} : {user.name}
    </p>
  );
}
