import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  function handleMenu(): void {
    setIsMenuOpen((prev) => !prev);
  }
  return (
    <header>
      <nav>
        <div className="flex justify-between items-center container tracking-[3px] mt-[12px] mb-[12px]">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/metalogo.png" alt="metalogo" className="h-12 w-12" />
            <span className="font-exo text-[30px] font-semibold">
              MetaLogic
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-8 font-bold">
            <ul className="flex gap-8">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
            <button className="bg-different text-white px-4 py-2 rounded-xl hidden lg:flex cursor-pointer">Get in Touch</button>

          
         <div className="lg:hidden">
            <GiHamburgerMenu size={32} className="text-different" onClick={handleMenu} />
          </div>
        </div>

       
        <div
          className={`fixed top-0 bottom-0 right-0 z-20 bg-[#ea6261] w-1/2 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden container text-head`}
        >
          <div className="absolute top-[12px] right-4 text-white" onClick={handleMenu}>
            <IoMdClose size={42} />
          </div>
          <ul className="p-4 pt-12 gap-5 h-full flex flex-col items-center font-bold md:text-[20px] text-white">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">About Us</a></li>
            <li>
              <button className="cursor-pointer rounded-xl px-3 py-2 bg-head text-white">
                Get in Touch
              </button>
            </li>
          </ul>
        </div>
            {isMenuOpen && (
          <div
            className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-[rgba(207,207,207,0.5)]"
            onClick={handleMenu}
          ></div>
        )}
        </nav>
        </header>
  );

};

export default Header;
