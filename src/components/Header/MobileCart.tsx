import { FiShoppingCart } from "react-icons/fi";

interface Props {
  setIsOpen: (isOpen: boolean) => void;
}

const MobileCart: React.FC<Props> = (props) => {
  const { setIsOpen } = props;
  return (
    <>
      <div onClick={() => setIsOpen(false)}>hejka</div>
    </>
  );
};

export default MobileCart;
