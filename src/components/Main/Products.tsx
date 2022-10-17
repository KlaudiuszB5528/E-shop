import { useState } from "react";
import ProductsList from "./ProductsList";
import BackToTopButton from "./BackToTopButton";
import LoadingText from "./LoadingText";

const Products = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <LoadingText isLoading={isLoading} />
      <ProductsList isLoading={isLoading} setIsLoading={setIsLoading} />
      <BackToTopButton />
    </>
  );
};

export default Products;
