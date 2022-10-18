import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setProducts } from "../../store/productsSlice";
import ProductCard from "./ProductCard";
import Dialog from "./Dialog";
import ImgModal from "./ImgModal";

interface Props {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const ProductsList = (props: Props) => {
  if (props.isLoading) return null;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgToShow, setImgToShow] = useState({
    url: "",
    alt: "",
  });
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
    <>
      <ul className="grid w-full grid-cols-1 gap-x-4 gap-y-24 py-6 px-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => {
          return (
            <ProductCard
              {...product}
              key={index}
              setIsModalOpen={setIsModalOpen}
              setImgToShow={setImgToShow}
            />
          );
        })}
      </ul>
      <Dialog isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ImgModal imgToShow={imgToShow} onClose={() => setIsModalOpen(false)} />
      </Dialog>
    </>
  );
};

export default ProductsList;
