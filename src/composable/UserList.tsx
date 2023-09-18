import { IUser } from "../interfaces/IUser";
type UserListProps = {
  user: IUser;
  handleDelete: (userId: number) => void;
};

export default function UserList({ user, handleDelete }: UserListProps) {
  return (
    <div className="flex max-w-xs	justify-around items-center gap-2 my-4 ">
      <p className="text-md capitalize">{user.name}</p>
      <button
        className="rounded-md p-2 bg-purple-700 hover:bg-purple-400"
        onClick={() => handleDelete(user.id)}
      >
        Supprimer le user
      </button>
    </div>
  );
}
