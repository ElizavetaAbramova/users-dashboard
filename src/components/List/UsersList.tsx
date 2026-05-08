import { type UserProfile } from "../../types&interfaces/UserProfile";
import { ProfileCard } from "./ProfileCard";

export function UsersList({ users }: { users: UserProfile[] }) {
  return (
    <div className="flex flex-wrap gap-5 w-full">
      {users.map((user) => (
        <ProfileCard key={user.id} user={user} />
      ))}
    </div>
  );
}
