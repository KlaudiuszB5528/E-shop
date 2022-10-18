import { BsCartPlus, BsSearch } from "react-icons/bs";
import { useAppDispatch } from "../../hooks/redux";
import { addToCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
interface Props {
  id: number;
  title: string;
  image: string;
  price: number;
}

const ProductCard = (props: Props) => {
  const dispatch = useAppDispatch();
  const { id, title, image, price } = props;
  return (
    <li
      className="relative flex flex-col items-center justify-center gap-6 rounded-lg bg-gray-50 p-2 shadow-md dark:bg-mgray dark:text-charcoal
    "
    >
      <Link
        to={`/products/${id}`}
        className="absolute top-6 right-6 cursor-pointer text-4xl text-gray-400 hover:text-gray-600"
      >
        <BsSearch />
      </Link>
      <img
        src={image}
        alt={title}
        className="h-3/4 w-3/4 object-fill mix-blend-multiply"
      />
      <h3 className="text-center">{title}</h3>
      <p>{formatPrice(price)}</p>
      <button
        className="flex items-center justify-center gap-2 rounded-md border-2 border-black p-2 transition-all duration-200 hover:-translate-y-1 hover:bg-black hover:text-white hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.5)] active:translate-y-0 active:shadow-[0_0.5rem_1rem_rgba(0,0,0,0.6)] dark:border-charcoal dark:hover:bg-charcoal  dark:hover:text-mgray "
        onClick={() =>
          dispatch(addToCart({ id: title, price, photoURL: image }))
        }
      >
        <span>Add to cart</span>
        <BsCartPlus />
      </button>
    </li>
  );
};

export default ProductCard;
