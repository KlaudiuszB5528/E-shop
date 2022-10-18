import { useRouteError, Link } from "react-router-dom";
import error404 from "../assets/error404.svg";

const ErrorPage: React.FC = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="flex h-screen items-center justify-center bg-mgray">
      <div className="flex flex-col items-center justify-center gap-6">
        <img src={error404} alt="error404" className="h-[20rem]" />
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <button className="rounded-xl border-2 border-black py-2 px-4 shadow-xl hover:bg-black hover:text-white">
          <Link to="/">Go back to the Homepage</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
