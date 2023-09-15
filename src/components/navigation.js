import logo from "../images/logo/logo.png";

export default function Navigation() {
  return (
    <div className="border-b border-b-cyan-950 border-opacity-50 p-5 items-center sticky top-0 left-0 right-0 bg-[#151515] backdrop-blur-xl bg-opacity-80 z-50
      md:flex md:justify-between
      lg:flex lg:justify-between
      xl:flex xl:justify-between
      2xl:flex 2xl:justify-between    
    ">
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="w-60
          sm:w-72 md:w-72 lg:w-72 xl:w-72 2xl:w-72
        "></img>
      </div>
      <div className="flex items-center justify-center gap-3 font-bold text-sm  hover:[&>a]:text-cyan-400 uppercase cursor-pointer duration-300
        pt-5 
        lg:justify-between 
        md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0
        sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4
        sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base
      ">
        <a href="#home" rel="noreferrer">
          <span> Home </span>
        </a>
        <a href="#about" rel="noreferrer">
          <span> About </span>
        </a>
        <a href="#contact" rel="noreferrer">
          <span> Contact </span>
        </a>
        <div className="gap-3 flex flex-row 
        ">
          <a href="#donate" rel="noreferrer">
            <div className="hover:bg-emerald-500 duration-300 rounded-full text-emerald-500
              sm:px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-5
              sm:py-2 md:py-2 lg:py-2 xl:py-2 2xl:py-2
              sm:text-black md:text-black lg:text-black xl:text-black 2xl:text-black
              sm:bg-cyan-500 md:bg-cyan-500 lg:bg-cyan-500 xl:bg-cyan-500 2xl:bg-cyan-500
            ">
              <span> Donate </span>
            </div>
          </a>
          <a href="#thanks" rel="noreferrer">
            <div className="hover:bg-white duration-300 rounded-full text-pink-400
              sm:px-6 md:px-6 lg:px-6 xl:px-6 2xl:px-6
              sm:py-2 md:py-2 lg:py-2 xl:py-2 2xl:py-2
              sm:text-black md:text-black lg:text-black xl:text-black 2xl:text-black
              sm:bg-pink-400 md:bg-pink-400 lg:bg-pink-400 xl:bg-pink-400 2xl:bg-pink-400
            ">
              <span> Thank You </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
