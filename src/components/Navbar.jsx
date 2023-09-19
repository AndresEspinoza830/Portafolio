import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full py-4 shadow-xl z-[100] "
          : "fixed w-full py-2 z-[100]"
      }
    >
      <div
        id="particles-js"
        className="flex justify-between items-center w-full h-full px-4 2xl:px-16"
      >
        <img src="/vite.svg" alt="imagen" width={50} />
        <div>
          <ul className="hidden md:flex space-x-10 uppercase">
            <li className="hover:border-b">
              <a href="/">Home</a>
            </li>
            <li className="hover:border-b">
              <a href="#about">About</a>
            </li>
            <li className="hover:border-b">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:border-b">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:border-b">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu onClick={handleNav} size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-full h-screen bg-black/70 ease-in-out duration-500"
            : "fixed left-[+200%] top-0 w-full h-screen bg-black/70 ease-in-out duration-700"
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] 2xl:w-[35%] h-full bg-[#ecf0f3] p-10 ease-in-out duration-700"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-400"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <img src="/vite.svg" alt="imagen" width={40} />
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose onClick={handleNav} />
              </div>
            </div>
            <div className="border-b border-gray-300 mt-4 mb-10">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div>
            <ul className="flex flex-col space-y-8 uppercase">
              <li className="hover:border-b">Home</li>
              <li className="hover:border-b">About</li>
              <li className="hover:border-b">Skills</li>
              <li className="hover:border-b">Projects</li>
              <li className="hover:border-b">Contact</li>
            </ul>
            <div className="pt-10 xl:pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <a
                    href="https://www.linkedin.com/in/andres-espinoza-49961022a/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <a href="https://github.com/AndresEspinoza830">
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
