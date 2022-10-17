import { useState, useEffect } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const windowListener = () => {
      if (scrollY > 500) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", windowListener);
    return () => {
      window.removeEventListener("scroll", windowListener);
    };
  }, []);
  return (
    <button
      className={`fixed bottom-3 right-3 z-30 lg:z-50  ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <BsArrowUpCircle className="rounded-full text-2xl" />
    </button>
  );
};

export default BackToTopButton;
