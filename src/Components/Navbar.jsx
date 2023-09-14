// import { useState } from "react";
import Logo from "../assets/Logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// import Hamburger from "../assets/Hamburger.svg";

// const Navbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <nav className="flex py-2 px-10 items-center justify-between">
//       <img src={Logo} alt="logo" className="w-20 md:w-28" />
//       <div className="md:translate-y-6">
//         <ol className={`flex-col md:gap-10 ${isNavOpen ? "" : "hidden"}`}>
//           <li>
//             <a href="#" className="font-bold">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#" className="font-bold">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#" className="font-bold">
//               FAQ
//             </a>
//           </li>
//           <li>
//             <a href="#" className="font-bold">
//               Contact
//             </a>
//           </li>
//         </ol>
//         <img
//           src={Hamburger}
//           alt="menu"
//           className="w-10 block md:hidden"
//           onClick={toggleNav}
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
       <div className="flex py-4 px-10 items-center shadow-md">
      <img className="w-20 md:w-28" src={Logo} alt="logo" />
      <ul className={`ml-auto md:flex md:justify-end ${nav ? "hidden" : "hidden"} gap-10`}>
        <li>
          <Link to="/" className="text-md font-bold hover:text-sky-500 focus:text-sky-500">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-md font-bold hover:text-sky-500 focus:text-sky-500">About</Link>
        </li>
        <li>
          <Link to="/faq" className="text-md font-bold hover:text-sky-500 focus:text-sky-500">FAQ</Link>
        </li>
        <li>
          <Link to="/contact" className="text-md font-bold hover:text-sky-500 focus:text-sky-500">Contact</Link>
        </li>
      </ul>

      <div className="cursor-pointer md:hidden ml-auto scale-100">
        {!nav ? (
          <AiOutlineClose onClick={handleNav} size={20} />
        ) : (
          <AiOutlineMenu onClick={handleNav} size={20} />
        )}
      </div>
    </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-20 h-full bg-white border-r-gray-900 bg-[#00300] ease-in-out duration-1000 md:hidden"
            : "fixed h-full top-20 left-[-100%]  ease-in-out duration-700"
        }
      >
        <ul className="p-4 flex-col">
          <li className="p-4 w-40 text-left cursor-pointer rounded-md border-gray-50 focus:text-[#4154f1]">
            {/* <Link to="/home">Home</Link> */}
            <Link to="/" className="font-bold hover:text-sky-500 focus:text-sky-500">Home</Link>
          </li>
          <li className="p-4 w-40 text-left cursor-pointer rounded-md border-gray-50 focus:text-[#4154f1]">
            {/* <Link to="/home">Home</Link> */}
            <Link to="/about" className="font-bold hover:text-sky-500 focus:text-sky-500">About</Link>
          </li>
          <li className="p-4 w-40 text-left cursor-pointer rounded-md border-gray-50 focus:text-[#4154f1]">
            {/* <Link to="/home">Home</Link> */}
            <Link to="/faq" className="font-bold hover:text-sky-500 focus:text-sky-500">FAQ</Link>
          </li>
          <li className="p-4 w-40 text-left cursor-pointer rounded-md border-gray-50 focus:text-[#4154f1]">
            {/* <Link to="/home">Home</Link> */}
            <Link to="/contact" className="font-bold hover:text-sky-500 focus:text-sky-500">Contact</Link>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;
