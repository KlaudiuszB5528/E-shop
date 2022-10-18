import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

type Props = {};

const Footer: React.FC = (props: Props) => {
  return (
    <footer className="mt-auto flex w-full items-center justify-center gap-1 text-gray-500 dark:text-mgray">
      <p>{`© ${new Date().getFullYear()} E-shop by KBiegacz`}</p>
      <a href="https://github.com/KlaudiuszB5528" target="blank">
        <AiFillGithub className="cursor-pointer text-lg"></AiFillGithub>
      </a>
      <a href="https://www.linkedin.com/in/klaudiusz-biegacz/" target="blank">
        <AiFillLinkedin className="cursor-pointer text-lg" />
      </a>
    </footer>
  );
};

export default Footer;
