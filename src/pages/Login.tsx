import React, { useContext, useRef, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import login from "../assets/login.webp";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BiArrowBack } from "react-icons/bi";
import {
  signInWithGooglePopup,
  createUserDocument,
  signInUserWithEmailAndPassword,
  db,
} from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { addToCart } from "../store/cartSlice";
import { UserCart } from "../store/userCartSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const [hideButton, setHideButton] = useState(false);
  const { updateUserContext } = useContext(UserContext);
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const persistedUserCartName = useAppSelector(
    (state) => state.persisted.userCart.name
  );
  const persistedUserCartItems = useAppSelector(
    (state) => state.persisted.userCart.userCartItems
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight < 450) {
        setHideButton(true);
      } else setHideButton(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleUserCartItems = (items: UserCart["userCartItems"]) => {
    Object.entries(items).forEach(([key, value]) => {
      for (let i = 0; i < value.quantity; i++) {
        const id = key;
        const { price, photoURL } = value;
        dispatch(addToCart({ id, price, photoURL }));
      }
    });
  };

  const logUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await signInUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      const docRef = doc(db, "users", `${res!.user.uid}`);
      const docSnap = await getDoc(docRef);
      const userData = docSnap.data();
      const user = {
        displayName: userData?.displayName,
        email: userData?.email,
        photoURL: userData?.photoURL,
      };
      updateUserContext(user);

      if (persistedUserCartName === user.displayName) {
        handleUserCartItems(persistedUserCartItems);
      }
      navigate("/");
    } catch (error: any) {
      switch (error.code) {
        case "auth/invalid-email":
          alert("Invalid email address");
          break;
        case "auth/wrong-password": {
          alert("Invalid password");
          break;
        }
        case "auth/user-not-found": {
          alert("User not found");
          break;
        }
        default: {
          alert("Something went wrong");
        }
      }
    }
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    if (!user) return;
    await createUserDocument(user);
    await updateUserContext({
      displayName: user.displayName!,
      email: user.email!,
      photoURL: user.photoURL!,
    });
    if (persistedUserCartName === user.displayName) {
      handleUserCartItems(persistedUserCartItems);
    }
    navigate("/");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center dark:text-mgray ">
      <img
        src={login}
        alt="background"
        className="hidden h-screen w-2/3  object-cover md:block"
      />
      <button className="fixed top-2 right-4">
        <Link
          to="/"
          className={`flex items-center gap-2 ${hideButton ? "hidden" : ""}`}
        >
          <BiArrowBack className="text-lg text-black dark:text-mgray" />
          <span className="text-black dark:text-mgray">
            Back to the Homepage
          </span>
        </Link>
      </button>
      <div className="container flex h-full flex-col items-center justify-center gap-4 py-10 lg:w-1/3">
        <form
          action="#"
          className=" flex w-full flex-col items-center gap-6"
          onSubmit={logUser}
        >
          <h2 className="text-2xl text-black dark:text-mgray">
            Log in to Your account
          </h2>
          <input
            type="text"
            placeholder="Email"
            required
            className="mt-2 w-3/4 rounded-md border-2 border-transparent bg-gray-200 p-2 outline-none placeholder:text-gray-500 focus:border-gray-300 dark:bg-mgray dark:placeholder:text-charcoal dark:focus:border-black"
            ref={emailRef}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-3/4 rounded-md border-2 border-transparent bg-gray-200 p-2 outline-none placeholder:text-gray-500 focus:border-gray-300 dark:bg-mgray dark:placeholder:text-charcoal dark:focus:border-black"
            ref={passwordRef}
            required
          />
          <button className="w-3/4 rounded-md border border-black bg-white py-1 px-2 text-center uppercase hover:bg-black hover:text-white dark:border-mgray dark:bg-charcoal dark:text-mgray dark:hover:bg-mgray dark:hover:text-charcoal">
            Login
          </button>
        </form>
        <div className="grid w-3/4 grid-cols-5 items-center">
          <hr className="col-span-2 border-gray-800" />
          <p className="text-center text-gray-800">OR</p>
          <hr className="col-span-2 border-gray-800" />
        </div>
        <button
          onClick={logGoogleUser}
          className="flex w-3/4 items-center justify-center gap-2 rounded-lg border border-black bg-white py-1 px-2 text-lg hover:bg-black hover:text-white dark:border-mgray dark:bg-charcoal dark:text-mgray dark:hover:bg-mgray dark:hover:text-charcoal lg:gap-4"
        >
          <FcGoogle className="text-3xl" />
          <span className="flex items-center">Log in with Google</span>
        </button>
        <p className="text-md text-center">
          Don't have an account?{" "}
          <span className="cursor-pointer text-blue-500 hover:text-blue-700 ">
            <Link to="/sign-up">Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
