import {
  BsFillTelephoneFill,
  BsEnvelopeFill,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="my-4 flex items-center justify-center ">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 overflow-hidden rounded-xl bg-gray-800 p-8 text-white shadow-lg dark:bg-zinc-700 sm:p-12 lg:flex-row lg:gap-2">
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h2 className="text-4xl font-bold tracking-wide">Contact Us</h2>
            <p className="w-3/4 pt-2 text-sm text-gray-100">
              We’re here to help and answer any question you might have. We look
              forward to hearing from you 😊
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <BsFillTelephoneFill className="text-xl" />
              <span>(+48) 123 123 123</span>
            </div>
            <div className="flex items-center space-x-2">
              <BsEnvelopeFill className="text-xl" />
              <span>e-shop@shop.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-xl" />
              <span>ul.Shop 9¾, 28-133 Shopowo</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="blank"
            >
              <BsFacebook className="cursor-pointer text-xl" />
            </a>

            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="blank"
            >
              <BsInstagram className="cursor-pointer text-xl" />
            </a>

            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="blank"
            >
              <BsTwitter className="cursor-pointer text-xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/klaudiusz-biegacz/"
              target="blank"
            >
              <BsLinkedin className="cursor-pointer text-xl" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-28 -top-28 h-40 w-40 rounded-full bg-gray-400 "></div>
          <div className="absolute -left-28 -bottom-28 h-40 w-40 rounded-full bg-gray-400 "></div>
          <div className="relative z-10  rounded-xl bg-white p-8 text-gray-600 shadow-lg dark:bg-gray-600 dark:text-white lg:w-80">
            <form
              action="https://formsubmit.co/el/cebije"
              method="POST"
              className="flex w-full flex-col space-y-4"
            >
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full rounded-md px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-gray-500 dark:bg-gray-800"
                required
              />
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-md px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-gray-500"
              />
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                required
                name="message"
                cols={30}
                rows={5}
                minLength={10}
                placeholder="Message"
                className="w-full resize-none rounded-md px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-gray-500"
              />
              <button className="inline-block self-end rounded-lg bg-gray-800 px-6 py-2 text-sm font-bold uppercase text-white">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
