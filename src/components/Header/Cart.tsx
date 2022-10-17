import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { toggleDarkMode } from "../../store/darkModeSlice";
import { useState, useEffect } from "react";
import CartDropdown from "./CartDropdown";
import { FiShoppingCart } from "react-icons/fi";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const Cart = () => {
  const dispatch = useAppDispatch();
  const [isAnimated, setIsAnimated] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalQuantity = useAppSelector(
    (state) => state.persisted.cart.totalQuantity
  );
  const isDarkMode = useAppSelector(
    (state) => state.persisted.darkMode.isDarkMode
  );
  useEffect(() => {
    setIsAnimated(true);
    const timer = setTimeout(() => {
      setIsAnimated(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [totalQuantity]);

  return (
    <>
      <div className="flex cursor-pointer flex-col items-center">
        <div className="relative" onClick={() => setIsCartOpen(!isCartOpen)}>
          <FiShoppingCart className="text-3xl" />
          <span
            className={`absolute -top-2.5 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black p-2 text-sm text-white ${
              isAnimated ? "animate-pop" : ""
            }`}
          >
            {totalQuantity}
          </span>
        </div>
      </div>
      <CartDropdown isOpen={isCartOpen} onClose={setIsCartOpen} />
      {isDarkMode ? (
        <BsSunFill
          onClick={() => {
            dispatch(toggleDarkMode());
          }}
          className="ml-2 text-3xl text-yellow-500"
        />
      ) : (
        <BsMoonStarsFill
          onClick={() => {
            dispatch(toggleDarkMode());
          }}
          className="ml-2 text-3xl text-blue-500"
        />
      )}
    </>
  );
};
export default Cart;
