import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addToCart } from "../../store/cartSlice";
import { formatPrice } from "../../utils/helpers";
import { BsCartPlus, BsArrowLeft } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Product } from "../../store/productsSlice";

const ProductDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productNotFound, setProductNotFound] = useState(false);
  const [product, setProduct] = useState<Product>();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const productId = +location.pathname.split("/")[2];
  const products = useAppSelector((state) => state.products.products);

  const getProduct = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
      setIsLoading(false);
    } catch (error) {
      setProductNotFound(true);
    }
  };
  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((product) => product.id === productId);
      if (foundProduct) setProduct(foundProduct);
      return;
    }
    getProduct();
  }, []);
  if (!product) return <div className="h-screen"></div>;
  if (productNotFound)
    return (
      <h2 className="-mt-20 flex h-screen items-center justify-center text-6xl">
        Product not found
      </h2>
    );
  const { title, image, price, description } = product;
  return (
    <div className="relative mx-auto flex flex-col justify-center gap-2 overflow-y-hidden py-10 px-4 md:px-20 lg:h-[75vh] lg:flex-row">
      <BsArrowLeft
        className="absolute top-4 left-4 cursor-pointer text-4xl text-gray-400 hover:text-gray-600"
        onClick={() => {
          navigate(-1);
        }}
      />
      <img
        src={image}
        alt={title}
        className="max-w-screen h-1/2 object-contain sm:w-full lg:h-full lg:w-1/2"
      />
      <div className="flex h-full flex-col gap-4 lg:w-1/2">
        <h3 className="mt-4 text-center text-xl font-bold lg:mt-0 lg:text-3xl">
          {title}
        </h3>
        <p className="mt-2 text-center text-lg lg:text-xl">{description}</p>
        <div className="mt-auto flex flex-col items-center justify-between gap-2 pb-2 sm:flex-row">
          <span className="text-center text-lg font-bold lg:text-xl">
            Price:{formatPrice(price)}
          </span>
          <button
            className="flex items-center justify-center gap-2 rounded-md border-2 border-black p-2 transition-all duration-200 hover:-translate-y-1 hover:bg-black hover:text-white hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.5)] active:translate-y-0 active:shadow-[0_0.5rem_1rem_rgba(0,0,0,0.6)] dark:hover:bg-white dark:hover:text-black "
            onClick={() =>
              dispatch(addToCart({ id: title, price, photoURL: image }))
            }
          >
            <span>Add to cart</span>
            <BsCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
