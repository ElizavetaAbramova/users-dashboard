import { type UserProfile } from "../../types&interfaces/UserProfile";

interface ProfileCardProps {
  user: UserProfile;
}

export function ProfileCard({ user }: ProfileCardProps) {
  const { firstName, lastName, image, bloodGroup, birthDate } = user;

  const handleClick = () => {
    console.log("click on:", firstName, lastName);
  };

  return (
    <div
      className="flex flex-1 profile-card py-1 px-2 justify-between flex-col border-2 border-transparent hover:border-red-500 transition duration-300 ease-in-out rounded-sm cursor-pointer md:min-w-[180px] md:max-w-[250px]"
      onClick={handleClick}
    >
      <img src={image} alt={`${firstName} ${lastName}`} />
      <div>
        <h2>
          {firstName} {lastName}
        </h2>
        <p>Blood Group: {bloodGroup}</p>
        <p>Birth Date: {birthDate}</p>
      </div>
    </div>
  );
}
