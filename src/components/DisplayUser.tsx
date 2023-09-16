import UserList from "../composable/UserList";
import { User } from "../data/Users";

export default function DisplayUser() {
  return (
    <div>
      {User.map((user) => (
        <UserList user={user} />
      ))}
    </div>
  );
}
