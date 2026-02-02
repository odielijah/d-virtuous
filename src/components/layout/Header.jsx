import { useState, useEffect } from "react";
import { navLinks } from "../../data/navLinksData";

export default function Header({handleScrollToSection}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls down more than 50px, let header shrink
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div
        id="header-container"
        // 1. Added dynamic max-width logic based on isScrolled state
        // 2. Added 'transition-all duration-500 ease-in-out' for smooth animation
        className={`
          fixed top-[48px] left-[50%] translate-x-[-50%] w-full z-[50] text-[#eae7e0] poppins-light
          transition-all duration-500 ease-in-out max-xl:px-[35px] max-xl:top-[30px]
          ${isScrolled ? "max-w-[750px] px-4" : "max-w-[1400px] px-[64px]"}
        `}
      >
        <div id="nav-menu">
          <div
            id="nav-content"
            className="flex justify-between items-center w-full backdrop-blur-[10px] bg-[rgba(3,3,3,0.3)] rounded-[14px] shadow-[inset_0_1px_1px_1px_rgba(255,255,255,0.1)] p-[10px_10px_10px_24px]"
          >
            <div id="logo">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // Force scroll to absolute top
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="opacity-80 text-[24px] georgia-pro-italic hover:opacity-100 transition-opacity duration-300 max-md:text-[18px]"
              >
                D'virtuous
              </a>
            </div>

            <div>
              <div
                id="nav-menu-items"
                className="flex gap-[40px] text-[14px] tracking-[0.02em] opacity-80 [text-shadow:0_0_10px_rgba(255,255,255,0.4)]"
              >
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={(e) => handleScrollToSection(e, link.id)}
                    className="cursor-pointer hover:opacity-100 hover:text-white transition-opacity duration-300 max-md:hidden"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            <div
              className="text-[14px] poppins tracking-[0.02em] text-black bg-[#eae7e0] p-[5px_20px] rounded-[8px] duration-300 ease-in-out hover:bg-white cursor-pointer
            max-md:hidden"
            >
              <a href="#">Donate</a>
            </div>

            <div
              id="hamburger"
              className="z-[99] relative cursor-pointer mr-[24px] mr-[24px] hidden max-md:block"
              onClick={() => {}}
            >
              <span className="block rounded-[5px] w-[20px] h-[2px] my-[5px] mx-auto bg-white duration-300 ease-in-out opacity-70"></span>
              <span className="block rounded-[5px] w-[20px] h-[2px] my-[5px] mx-auto bg-white duration-300 ease-in-out opacity-70"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
