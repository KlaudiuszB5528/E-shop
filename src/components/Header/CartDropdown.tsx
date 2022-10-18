import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import CartDropdownItemsList from "./CartDropdownItemsList";
import { clearCart } from "../../store/cartSlice";
import { formatPrice } from "../../utils/helpers";
import { BsX } from "react-icons/bs";
interface Props {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
}

const CartDropdown = (props: Props) => {
  const { isOpen, onClose } = props;
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector((state) => state.persisted.cart.totalPrice);
  const totalQuantity = useAppSelector(
    (state) => state.persisted.cart.totalQuantity
  );

  return (
    <div
      className={`fixed top-0 right-0 z-50 flex max-h-[80vh] min-h-[50%] w-screen translate-x-[130%] flex-col items-center  justify-center rounded-lg bg-white  p-2 pt-14 shadow-2xl transition-all duration-700 ease-in-out md:h-screen md:w-96 md:pt-20 ${
        isOpen ? "transform-none" : ""
      }`}
    >
      {totalQuantity === 0 && (
        <>
          <BsX
            onClick={() => {
              onClose(false);
            }}
            className="absolute top-2 left-2 cursor-pointer text-3xl text-gray-400 hover:text-gray-600"
          />
          <p className="text-2xl text-black">Your cart is empty</p>
        </>
      )}
      {totalQuantity > 0 && (
        <>
          <BsX
            onClick={() => {
              onClose(false);
            }}
            className="absolute top-2 left-2 cursor-pointer text-3xl text-gray-400 hover:text-gray-600"
          />
          <CartDropdownItemsList />
          <div className="mt-auto flex w-full items-center justify-between">
            <span className="text-xl">{`Total:${formatPrice(
              totalPrice
            )}`}</span>
            <div className="ml-auto flex"></div>
            <button className="mr-2 rounded-md border border-black p-1 hover:bg-black hover:text-white">
              Checkout
            </button>
            <button
              onClick={() => dispatch(clearCart())}
              className="rounded-md border border-black p-1 hover:bg-black hover:text-white"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDropdown;
