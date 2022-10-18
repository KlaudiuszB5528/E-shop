import Slider from "../components/Main/Slider";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
const images = [
  {
    url: img1,
    alt: "clothes",
  },
  {
    url: img2,
    alt: "clothes",
  },
  {
    url: img3,
    alt: "clothes",
  },
];

const Home: React.FC = () => {
  console.log(window.innerWidth);
  return (
    <div className="flex h-screen w-screen flex-col lg:flex-row">
      <div className="basis-1/2 lg:order-2 lg:basis-2/3 3xl:basis-3/4">
        <Slider images={images} />
      </div>
      <div className="flex basis-1/2 flex-col items-center justify-start gap-12 px-6 pt-20 lg:order-1 lg:basis-1/3 3xl:basis-1/4 3xl:gap-20 3xl:pt-24">
        <h2 className="text-center text-3xl lg:text-5xl">
          Looking for the best online shop?
        </h2>
        <p className="text-xl">Look no further, you've found it!</p>
        <button className="group relative mb-4 rounded-md border-2 border-black py-4 px-6 text-2xl shadow-md transition-all duration-300 before:absolute before:top-0 before:left-0 before:h-0 before:w-0 before:rounded-sm before:bg-black before:transition-all before:duration-300 hover:-translate-y-1 hover:shadow-xl before:hover:h-full before:hover:w-full active:-translate-y-0 active:shadow-sm md:mb-0">
          <Link
            to="/products"
            className="relative z-10 transition-all duration-300 group-hover:text-white"
          >
            Check our products
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
