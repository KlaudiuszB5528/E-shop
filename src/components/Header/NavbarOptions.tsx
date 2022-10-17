import Cart from "./Cart";
import User from "./User";

export const NavbarOptions: React.FC = () => {
  return (
    <div className="mr-4 ml-auto">
      <div className="flex h-12 items-center gap-2">
        <User />
        <Cart />
      </div>
    </div>
  );
};
