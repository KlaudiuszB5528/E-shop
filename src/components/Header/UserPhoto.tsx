import { FaUserCircle } from "react-icons/fa";

interface Props {
  isUserOpen: boolean;
  setIsUserOpen: (isUserOpen: boolean) => void;
  handleSignOut: () => void;
  userContext: {
    displayName: string;
    email: string;
    photoURL: string | null;
  };
}

const UserPhoto: React.FC<Props> = (props) => {
  const { isUserOpen, setIsUserOpen, handleSignOut, userContext } = props;

  const UserPhoto =
    userContext.photoURL !== null ? (
      <div className="relative">
        <img
          src={userContext?.photoURL}
          alt={userContext?.displayName}
          className="h-12 cursor-pointer rounded-full"
          onClick={() => setIsUserOpen(!isUserOpen)}
        />
        {isUserOpen && (
          <button
            onClick={handleSignOut}
            className="absolute -left-5 bottom-1 flex h-12 w-20 translate-y-full items-center justify-center p-2 text-black shadow-sm"
          >
            Log out
          </button>
        )}
      </div>
    ) : (
      <div className="relative">
        <FaUserCircle
          className="cursor-pointer text-3xl"
          onClick={() => setIsUserOpen(!isUserOpen)}
        />
        {isUserOpen && (
          <button
            onClick={handleSignOut}
            className="absolute -left-5 bottom-1 flex h-12 w-20 translate-y-full items-center justify-center p-2 text-black shadow-sm"
          >
            Log out
          </button>
        )}
      </div>
    );

  return UserPhoto;
};

export default UserPhoto;
