import { useState } from "react";
import { MobileDrawer } from "./MobileDrawer";

export const Navbar = () => {
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your email subscription logic here
    alert(`Subscribing with: ${email}`); // Example action
  };

  return (
    <div className="font-seasons">
      <nav className="fixed  left-1/2 -translate-x-1/2 w-full text-center shadow-xl  text-black  bg-white p-4 z-40 grid grid-cols-4 justify-between items-center px-12">
        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
        <div className="hidden lg:flex justify-evenly items-center gap-4 col-span-1 ">
          <a href="#" className="">
            Home
          </a>
          <a href="#" className="">
            About
          </a>
          <a href="#" className="">
            Services
          </a>
        </div>
        {/* Company Name - Always visible */}
        <div className="text-center text-2xl md:text-4xl font-bold col-span-2">
          Laurel Lane Co
        </div>

        {/* Placeholder for layout consistency */}
        <div className="w-6 col-span-1">
          {/* Placeholder */}
          <p></p>
        </div>
      </nav>

      {/* Side Navigation Panel */}
      <MobileDrawer
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
      />
    </div>
  );
};

{
  /* <form onSubmit={handleSubmit} className="mt-4 flex w-full">
<input
  type="email"
  placeholder="Your Email"
  className="flex-1 p-2"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
<button
  type="submit"
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
>
  Subscribe
</button>
</form> */
}

// Iteration of the navbar being centered
/*<div className="">
<nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[98%] text-center shadow-xl  text-black  bg-white p-4 z-40 grid grid-cols-4 justify-between items-center px-12 rounded-full">
  <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      ></path>
    </svg>
  </div>
  <div className="hidden lg:flex justify-evenly items-center gap-4 col-span-1 ">
    <a href="#" className="">
      Home
    </a>
    <a href="#" className="">
      About
    </a>
    <a href="#" className="">
      Services
    </a>
  </div>
  /* Company Name - Always visible 
  <div className="text-center text-2xl md:text-4xl font-bold col-span-2">
    Laurel Lane Co
  </div>

  /* Placeholder for layout consistency 
  <div className="w-6 col-span-1">
    /* Placeholder 
    <p></p>
  </div>
</nav>

/* Side Navigation Panel 
<MobileDrawer
  isMenuOpen={isMenuOpen}
  setIsMenuOpen={setIsMenuOpen}
  handleSubmit={handleSubmit}
  email={email}
  setEmail={setEmail}
/>
</div> 
*/
