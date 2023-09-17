import { IUser } from "../interfaces/IUser";

export default function DeleteUser(users: IUser[], userId: number): IUser[] {
  const updatedUsers = users.filter((user) => user.id !== userId);
  return updatedUsers;
}
