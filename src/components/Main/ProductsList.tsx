import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setProducts } from "../../store/productsSlice";
import ProductCard from "./ProductCard";

interface Props {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const ProductsList = (props: Props) => {
  if (props.isLoading) return null;
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const { setIsLoading } = props;
  const getProducts = async () => {
    props.setIsLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch(setProducts(data));
    setIsLoading(false);
  };

  useEffect(() => {
    if (products.length > 0) return;
    getProducts();
  }, []);

  return (
    <ul className="grid w-full grid-cols-1 gap-x-4 gap-y-24 py-6 px-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => {
        return <ProductCard {...product} key={index} />;
      })}
    </ul>
  );
};

export default ProductsList;
