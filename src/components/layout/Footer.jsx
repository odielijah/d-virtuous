import { navLinks } from "../../data/navLinksData";

export default function Footer({ handleScrollToSection }) {
  return (
    <footer className="w-full bg-black z-[2] relative text-white/50 text-[16px] poppins-light mx-auto">
      <div className="flex items-center justify-between mx-auto p-7 max-w-[1560px] border-t border-white/10 max-md:flex-col-reverse max-md:text-center max-md:gap-[20px]">
        <p className="w-auto max-md:w-full max-lg:text-[13px]">
          © 2026 D'virtuous | All Rights Reserved.
        </p>
        <a 
          href="mailto:founders@dvirtuous.co"
          className="w-auto text-white max-md:w-full max-lg:text-[13px] hover:opacity-80 transition-opacity duration-300"
        >
          founders@dvirtuous.co
        </a>
        <div className="flex items-center gap-10">
          {navLinks.map((link) => (
            <div
              key={link.id}
              className="max-md:hidden max-lg:text-[13px] max-md:gap-4"
            >
              <a
                href={link.id}
                className="hover:text-white transition-colors duration-300 cursor-pointer"
                onClick={(e) => handleScrollToSection(e, link.id)}
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
