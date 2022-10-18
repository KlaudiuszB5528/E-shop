import { Link } from "react-router-dom";

interface Props {
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNav: React.FC<Props> = (props) => {
  const { setIsOpen } = props;
  return (
    <div className="container h-full px-8">
      <ul className="flex h-[90%] w-full flex-col items-center justify-center gap-24">
        <li>
          <Link
            to="/"
            className="text-center text-5xl font-bold dark:text-mgray"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="text-center text-5xl font-bold dark:text-mgray"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-center text-5xl font-bold dark:text-mgray"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
