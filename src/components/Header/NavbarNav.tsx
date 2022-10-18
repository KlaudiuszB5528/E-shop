import { NavLink } from "react-router-dom";

const NavLinkClasses: string =
  "p-2 text-gray-600 hover:text-gray-900 text-2xl border-b-2 border-transparent dark:text-mgray dark:hover:text-white";
const ActiveNavLinkClasses: string =
  "p-2 text-gray-900 text-2xl w-100 border-b-2 border-gray-900 dark:text-white dark:border-white";

const NavbarNav: React.FC = () => {
  return (
    <nav className="hidden h-12 lg:block">
      <ul className="flex items-center gap-8 tracking-wide">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? ActiveNavLinkClasses : NavLinkClasses
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? ActiveNavLinkClasses : NavLinkClasses
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? ActiveNavLinkClasses : NavLinkClasses
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarNav;
