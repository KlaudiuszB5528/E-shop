import { Link } from "react-router-dom";
import eshop6 from "../../assets/eshop6.svg";

const NavbarLogo = () => {
  return (
    <h1 className="mr-auto flex items-center">
      <Link to="/">
        <img src={eshop6} alt="logo" className="h-24 lg:-mt-2" />
      </Link>
    </h1>
  );
};

export default NavbarLogo;
