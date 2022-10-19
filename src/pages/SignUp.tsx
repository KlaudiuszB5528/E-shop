import React from "react";
import signup from "../assets/signup.webp";
import { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  createUserAuthWithEmailAndPassword,
  createUserDocument,
} from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [hideButton, setHideButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight < 450) {
        setHideButton(true);
      } else setHideButton(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const signUpHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await createUserAuthWithEmailAndPassword(email, password);
      if (!res) return;
      createUserDocument({ ...res.user, displayName });
      navigate("/");
    } catch (error: any) {
      switch (error!.code) {
        case "auth/email-already-in-use": {
          alert("Email already in use");
          break;
        }
        default: {
          alert("Something went wrong");
          break;
        }
      }
    }
  };

  const inputClassess =
    "w-3/4 bg-gray-200 rounded-md p-2 placeholder:text-gray-500 outline-none border-2 border-transparent focus:border-gray-300 dark:text-charcoal";

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <img
        src={signup}
        alt="background"
        className="hidden h-screen w-2/3 object-cover md:block"
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
      <div className="container flex h-full w-full flex-col items-center justify-center gap-4 py-10 lg:w-1/3">
        <form
          action="#"
          className=" flex w-full flex-col items-center gap-6"
          onSubmit={signUpHandle}
        >
          <h2 className="text-center text-2xl text-black dark:text-mgray">
            Create an account
          </h2>
          <input
            type="text"
            placeholder="Username"
            value={displayName}
            maxLength={25}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            className={inputClassess}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={inputClassess}
            placeholder="Email"
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className={inputClassess}
          />
          <button className="w-3/4 rounded-md border border-black bg-white p-2 py-2 px-4 text-center uppercase hover:bg-black hover:text-white dark:border-mgray dark:bg-charcoal dark:text-mgray dark:hover:bg-mgray dark:hover:text-charcoal lg:w-1/2">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
