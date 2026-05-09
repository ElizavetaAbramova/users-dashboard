import type { UserProfile } from "../../types&interfaces";

interface Props {
  user: UserProfile;
  closeDetails: () => void;
}

export function ProfileDetails({ user, closeDetails }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={(e) => {
        e.stopPropagation();
        closeDetails();
      }}
    >
      <div
        className="bg-white p-4 rounded-md shadow-lg relative max-w-sm w-full text-black"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2"
          aria-label="close details"
          onClick={closeDetails}
        >
          ✕
        </button>

        <div className="flex flex-col items-center gap-2 text-wrap">
          <img src={user.image} alt="profile" width={150} />
          <h3 className="text-xl">
            {user.firstName} {user.lastName}
          </h3>
          <div>{user.email}</div>
          <div>{user.phone}</div>
          <div>
            {user.address.country}, {user.address.city}
          </div>
          <div>Gender: {user.gender}</div>
          <div>Height: {user.height} cm</div>
          <div>Birth Date: {user.birthDate}</div>
          <div className="text-red-500 text-xl">
            Blood Type: {user.bloodGroup}
          </div>
        </div>
      </div>
    </div>
  );
}
