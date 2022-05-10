import React from "react";

function Header() {
  return (
    <header className="max-w-7xl mx-auto bg-blue-200 flex items-center justify-between p-5 sticky top-0 z-50">
      <img
        className="w-44 object-contain cursor-pointer"
        src="https://links.papareact.com/yvf"
      />

      <div className="hidden md:inline-flex items-center space-x-2 font-semibold">
        <h3 className="hover:bg-rose-300 transform active:bg-rose-600 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
          Home
        </h3>

        <h3 className="hover:bg-rose-300 transform active:bg-rose-600 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
          Contribute
        </h3>

        <h3 className="hover:bg-rose-300 transform active:bg-rose-600 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
          Follow
        </h3>
      </div>
      <div className="flex items-center space-x-2 text-Zinc-900">
        <h3 className="font-semibold hover:bg-rose-300 transform active:bg-rose-600 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
          Sign In
        </h3>

        <h3
          className="border px-3 py-2 rounded-md border-rose-600
        hover:bg-rose-300 transform active:bg-rose-600 duration-200 ease-in-out cursor-pointer"
        >
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;
