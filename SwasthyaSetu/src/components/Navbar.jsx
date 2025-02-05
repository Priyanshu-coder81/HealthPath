import logo from "/images/top-logo-transparent.png";
import NavList from "./NavList";
import arrow from "/images/arrow-icon.png";
import menu from "/images/menu-black.png";
import { MdLogin } from "react-icons/md";
import { useEffect, useRef } from "react";
const Navbar = () => {

    const elementRef2 = useRef("");
    const elementRef3 = useRef("");

    useEffect(() => {
        const handleOnScroll = () => {
          if (scrollY > 50) {
            elementRef2.current.classList.add(
              "bg-white",
              "bg-opacity-50",
              "backdrop-blur-lg",
              "shadow-sm"
            );
            elementRef3.current.classList.remove(
              "bg-white",
              "bg-opacity-50",
              "shadow-sm"
              
            );
          } else {
            elementRef2.current.classList.remove(
              "bg-white",
              "bg-opacity-50",
              "backdrop-blur-lg",
              "shadow-sm",
             
            );
            elementRef3.current.classList.add(
              "bg-white",
              "bg-opacity-50",
              "shadow-sm"
            );
          }
        };
    
        window.addEventListener("scroll", handleOnScroll);
    
        return () => {
          window.removeEventListener("scroll", handleOnScroll);
        };
      }, []);
    

  return (
    <>
      <nav className="w-full fixed px-3 lg:px-5 xl:px-[8%] py-4 flex items-center justify-between z-50" ref={elementRef2}>
        <div className="flex sm:w-auto lg:mr-8 mr-6 xl:mr-12 md:w-[20%] ">
          <img src={logo} alt="" className="w-30 cursor-pointer " />
          <h2 className="text-blue-500 font-bold mt-11 text-xl  -ml-4 md:text-sm md:mt-13 hidden md:flex">
            SwasthyaSetu
          </h2>
        

        </div>

        <ul className="hidden md:flex items-center gap-4 lg:gap-6  rounded-full px-7 py-3 bg-white shadow-sm bg-opacity-50 lg:px-12" ref={elementRef3}>
          <NavList></NavList>
        </ul>


        <div className="flex items-center gap-4">
          
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-500 rounded-full ml-4 "
          >
            Login/Signup <MdLogin />
          </a>
          <a
            href="#contact"
            className=" lg:hidden items-center gap-3 px-4 py-2.5 border border-gray-500 rounded-full ml-4 "
          >
            <MdLogin />

          </a>


          <button className="block ml-3 md:hidden" >
          <img src={menu} alt=""  className="w-5"/>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
