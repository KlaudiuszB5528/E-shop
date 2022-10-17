import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import MobileHamburger from "./MobileHamburger";
const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);
  return (
    <>
      <MobileHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`fixed inset-0 z-30 h-screen -translate-y-full bg-white opacity-100 transition-all duration-700 lg:hidden ${
          isOpen ? "translate-y-0" : ""
        }`}
      >
        <MobileNav setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default MobileNavbar;
