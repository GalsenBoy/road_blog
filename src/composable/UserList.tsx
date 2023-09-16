import { IUser } from "../interfaces/IUser";
type UserListProps = {
  user: IUser;
  key: number;
  handleDelete: (userId: number) => void;
};

export default function UserList({ user, key, handleDelete }: UserListProps) {
  return (
    <p key={key}>
      {user.id} : {user.name}
      <button onClick={() => handleDelete(user.id)}>Supprimer le user</button>
    </p>
  );
}
