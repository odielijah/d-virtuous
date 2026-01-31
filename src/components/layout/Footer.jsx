export default function Footer() {
  return (
    <footer className="w-full bg-black z-[2] relative pb-10 text-white/50 text-[16px] poppins max-md:pb-[20px]">
      <div className="flex items-center justify-between mx-auto max-w-[1560px] border-t pt-5 border-white/10 max-md:flex-col-reverse max-md:text-center max-md:gap-[5px]">
        <p className="w-[33.3%] max-md:w-full max-md:text-[12px]">© 2025 Redo | All Rights Reserved.</p>
        <p className="w-[33.3%] text-white max-md:w-full">
          founders@redomedia.co
        </p>
        <div className="flex gap-8 items-center max-md:hidden">
          <span>Services</span>
          <span>Journey</span>
          <span>Testimonials</span>
        </div>
      </div>
    </footer>
  );
}
