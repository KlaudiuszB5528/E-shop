import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { calcTotalPrice, calcTotalQuantity } from "../store/cartSlice";

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.persisted.cart.items);
  const isDarkMode = useAppSelector(
    (state) => state.persisted.darkMode.isDarkMode
  );

  useEffect(() => {
    dispatch(calcTotalQuantity());
    dispatch(calcTotalPrice());
  }, [items]);

  useEffect(() => {
    isDarkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDarkMode]);
  return (
    <div className="container mx-auto flex min-h-screen max-w-screen-2xl flex-col overflow-x-hidden">
      <Navbar />
      <main
        id="main"
        className="mx-auto flex items-center justify-center  dark:bg-[#121212] dark:text-white"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
