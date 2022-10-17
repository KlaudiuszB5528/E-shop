import { useAppSelector } from "../../hooks/redux";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import { useAppDispatch } from "../../hooks/redux";
import { increaseQuantity, decreaseQuantity } from "../../store/cartSlice";

const CartDropdownItemsList = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.persisted.cart.items);
  return (
    <ul className="flex max-h-[90%] w-full flex-col gap-12 overflow-y-auto overscroll-contain">
      {Object.entries(cartItems).map(([key, value], index) => {
        return (
          <li key={index} className="flex w-[95%] justify-between">
            <img
              src={value.photoURL}
              alt={key}
              className="h-20 w-20 object-contain"
            />
            <div className="text-md flex w-36 items-center justify-center text-center">
              <span className="inline-block truncate">{key}</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 text-lg ">
              <BsCaretUpFill
                className="text-gray-400 hover:text-gray-600"
                onClick={() => {
                  dispatch(increaseQuantity(key));
                }}
              />
              <span>{`x${value.quantity}`}</span>
              <BsCaretDownFill
                className=" text-gray-400 hover:text-gray-600"
                onClick={() => {
                  dispatch(decreaseQuantity(key));
                }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CartDropdownItemsList;
