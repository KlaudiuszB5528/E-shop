import NavbarNav from "./NavbarNav";
import NavbarLogo from "./NavbarLogo";
import { NavbarOptions } from "./NavbarOptions";
import MobileNavbar from "./MobileNavbar";

const Navbar: React.FC = () => {
  return (
    <header className="container mx-auto flex items-center justify-between bg-white p-2 shadow-sm dark:bg-gray-600">
      <a
        className="fixed top-0 right-0 left-0 z-[100] -translate-y-full bg-gray-600 p-8 text-center text-white transition-all duration-500 focus:translate-y-0"
        href="#main"
      >
        Skip to main content
      </a>
      <NavbarLogo />
      <NavbarNav />
      <NavbarOptions />
      <MobileNavbar />
    </header>
  );
};

export default Navbar;
