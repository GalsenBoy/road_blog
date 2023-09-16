import { IUser } from "../interfaces/IUser";
type UserListProps = {
  user: IUser;
  handleDelete: (userId: number) => void;
};

export default function UserList({ user, handleDelete }: UserListProps) {
  return (
    <div className="flex items-center gap-3">
      <p>
        {user.id} : {user.name}
      </p>
      <button
        className="rounded-full p-2 my-1 bg-purple-400"
        onClick={() => handleDelete(user.id)}
      >
        Supprimer le user
      </button>
    </div>
  );
}
