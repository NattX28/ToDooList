import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar mt-2 p-0">
        <div className="flex-1">
          <a className="btn btn-ghost text-3xl font-bold">ToDoo List</a>
        </div>
        <div className="flex-none">
          <button className="btn border-second bg-main mx-2">Sign in</button>
          <button className="btn bg-contrast text-white mx-2">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
