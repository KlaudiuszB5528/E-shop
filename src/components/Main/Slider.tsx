import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Image {
  url: string;
  alt: string;
}

interface Props {
  images: Image[];
}

const Slider = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images } = props;
  const currentImage = images[currentIndex].url;

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newSlide = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newSlide);
  };
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newSlide = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newSlide);
  };

  useEffect(() => {
    const autoSlides = setTimeout(() => {
      nextSlide();
    }, 3500);

    return () => {
      clearTimeout(autoSlides);
    };
  }, [currentIndex]);

  return (
    <div className="mx-auto h-full w-full lg:h-3/4 lg:w-3/4">
      <div
        className={`relative mt-6 h-full w-full rounded-xl bg-cover  bg-center shadow-lg xl:w-3/4`}
        style={{ backgroundImage: `url(${currentImage})` }}
        aria-label="slider img"
      >
        <button
          className="absolute top-1/2 left-2 -translate-y-1/2 text-3xl text-white"
          onClick={prevSlide}
        >
          <FiChevronLeft className="text-6xl hover:text-gray-600" />
        </button>
        <button
          className="absolute top-1/2 right-2 -translate-y-1/2 text-3xl text-white"
          onClick={nextSlide}
        >
          <FiChevronRight className="text-6xl hover:text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
