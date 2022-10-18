import UserPhoto from "./UserPhoto";
import { UserContext } from "../../context/userContext";
import { signOutUser } from "../../firebase/firebase";
import { useState, useContext } from "react";
import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const User: React.FC = () => {
  const [isUserOpen, setIsUserOpen] = useState(false);
  const { userContext, signOutUserContext } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOutUser();
    signOutUserContext();
  };
  const User =
    userContext.displayName === "" ? (
      <button>
        <Link to="/login" className="">
          <FiUserPlus className="text-3xl dark:text-mgray" />
        </Link>
      </button>
    ) : (
      <div className="flex items-center gap-2">
        <span className="text-md hidden tracking-wide text-gray-600 dark:text-mgray lg:block ">{`Hello,${userContext.displayName}`}</span>
        <UserPhoto
          isUserOpen={isUserOpen}
          setIsUserOpen={setIsUserOpen}
          handleSignOut={handleSignOut}
          userContext={userContext}
        />
      </div>
    );
  return User;
};

export default User;
