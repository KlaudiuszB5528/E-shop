interface Props {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

const MobileHamburger: React.FC<Props> = (props) => {
  const { setIsOpen, isOpen } = props;
  return (
    <div
      className="relative z-40 flex h-12 w-12 items-center justify-center lg:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`relative h-1 w-8 bg-black transition-all duration-500 before:absolute before:h-1 before:w-8 before:translate-y-2 before:bg-black before:transition-all before:duration-500 after:absolute after:h-1 after:w-8
      after:-translate-y-2 after:bg-black after:transition-all after:duration-500 dark:bg-mgray before:dark:bg-mgray after:dark:bg-mgray
      ${
        isOpen
          ? "-translate-x-full bg-transparent before:translate-y-0 before:translate-x-8 before:rotate-45 after:translate-y-0 after:translate-x-8 after:-rotate-45"
          : ""
      }`}
      ></div>
    </div>
  );
};

export default MobileHamburger;
