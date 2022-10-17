import { useRouteError, Link } from "react-router-dom";
import error404 from "../assets/error404.svg";

const ErrorPage: React.FC = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-6 items-center justify-center">
        <img src={error404} alt="error404" className="h-[20rem]" />
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <button className="border-2 py-2 px-4 border-black rounded-xl hover:bg-black hover:text-white shadow-xl">
          <Link to="/">Go back to the Homepage</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
