import { BsCartPlus, BsSearch } from "react-icons/bs";
import { useAppDispatch } from "../../hooks/redux";
import { addToCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";

interface ImgToShow {
  url: string;
  alt: string;
}
interface Props {
  id: number;
  title: string;
  image: string;
  price: number;
  setIsModalOpen: (isModalOpen: boolean) => void;
  setImgToShow: (imgToShow: ImgToShow) => void;
}

const ProductCard = (props: Props) => {
  const dispatch = useAppDispatch();
  const { id, title, image, price } = props;
  const { setIsModalOpen, setImgToShow } = props;

  const showProductHandle = () => {
    setIsModalOpen(true);
    setImgToShow({
      url: image,
      alt: title,
    });
  };
  return (
    <li
      className="relative flex flex-col items-center justify-center gap-6 rounded-lg bg-gray-50 p-2 shadow-md dark:bg-mgray dark:text-charcoal
    "
    >
      <Link
        to={`/products/${id}`}
        className="flex h-3/4 w-3/4 items-center justify-center"
      >
        <img
          src={image}
          alt={title}
          className="object-fill mix-blend-multiply"
        />
      </Link>
      <BsSearch
        className="absolute top-2 right-2 text-3xl text-gray-400 hover:text-gray-600 dark:text-charcoal dark:hover:text-gray-900 md:top-4 md:right-4"
        onClick={showProductHandle}
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
