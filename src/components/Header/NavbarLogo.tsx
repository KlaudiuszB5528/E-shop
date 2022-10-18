import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import logoLightmode from "../../assets/logoLightmode.svg";
import logoDarkmode from "../../assets/logoDarkmode.svg";

const NavbarLogo = () => {
  const isDarkMode = useAppSelector(
    (state) => state.persisted.darkMode.isDarkMode
  );
  return (
    <h1 className="mr-auto flex items-center">
      <Link to="/">
        <img
          src={isDarkMode ? logoDarkmode : logoLightmode}
          alt="logo"
          className="h-24 lg:-mt-2"
        />
      </Link>
    </h1>
  );
};

export default NavbarLogo;
