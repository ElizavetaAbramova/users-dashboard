import { type UserProfile } from "../../types&interfaces/UserProfile";
import { ProfileCard } from "./ProfileCard";

export function UsersList({ users }: { users: UserProfile[] }) {
  return (
    <div className="flex flex-wrap gap-5 w-full px-5 justify-center">
      {users.map((user) => (
        <ProfileCard key={user.id} user={user} />
      ))}
    </div>
  );
}
