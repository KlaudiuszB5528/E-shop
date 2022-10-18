import { BsX } from "react-icons/bs";

interface Props {
  imgToShow: {
    url: string;
    alt: string;
  };
  onClose: () => void;
}

const ImgModal = (props: Props) => {
  const { imgToShow, onClose } = props;
  const { url, alt } = imgToShow;
  return (
    <div
      className="relative h-full w-full p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <BsX
        className="absolute -top-3 -right-3 cursor-pointer text-3xl text-gray-400 hover:text-gray-600"
        onClick={() => {
          onClose();
          const modal = document.querySelector("dialog");
          modal?.close();
        }}
      />
      <img src={url} alt={alt} className="h-full w-full object-contain" />
    </div>
  );
};

export default ImgModal;
