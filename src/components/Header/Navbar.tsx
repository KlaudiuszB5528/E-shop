import NavbarNav from "./NavbarNav";
import NavbarLogo from "./NavbarLogo";
import { NavbarOptions } from "./NavbarOptions";
import MobileNavbar from "./MobileNavbar";

const Navbar: React.FC = () => {
  return (
    <header className="container sticky top-0 z-[90] mx-auto flex items-center justify-between bg-white p-2 shadow-md dark:bg-charcoal dark:shadow-sm dark:shadow-gray-800">
      <button
        aria-label="skip button"
        className="fixed top-0 right-0 left-0 z-[100] w-full -translate-y-full bg-gray-600 p-8 text-center text-white transition-all duration-500 focus:translate-y-0"
      >
        <a href="#main">Skip to main content</a>
      </button>
      <NavbarLogo />
      <NavbarNav />
      <NavbarOptions />
      <MobileNavbar />
    </header>
  );
};

export default Navbar;
