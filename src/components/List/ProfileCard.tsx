import { useState } from "react";
import { type UserProfile } from "../../types&interfaces/UserProfile";
import { createPortal } from "react-dom";
import { ProfileDetails } from "../profileDetails";

interface ProfileCardProps {
  user: UserProfile;
}

export function ProfileCard({ user }: ProfileCardProps) {
  const { firstName, lastName, image, bloodGroup, address } = user;
  const [showDetails, setShowDetails] = useState(false);

  const handleOpenDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    console.log("click");
    setShowDetails(false);
  };

  return (
    <div
      className="flex profile-card py-1 px-2 justify-between items-center flex-col border-2 border-transparent md:hover:border-red-500 transition duration-300 ease-in-out rounded-sm cursor-pointer md:min-w-[180px]"
      onClick={handleOpenDetails}
    >
      <img
        src={image}
        alt={`${firstName} ${lastName} profile image`}
        width={150}
        height={150}
      />
      <div>
        <h2>
          {firstName} {lastName}
        </h2>
        <p>Blood Group: {bloodGroup}</p>
        <p>
          {address.country}, {address.city}
        </p>
      </div>
      {showDetails &&
        createPortal(
          <ProfileDetails closeDetails={handleCloseDetails} user={user} />,
          document.body,
        )}
    </div>
  );
}
