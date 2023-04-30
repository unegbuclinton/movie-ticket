import SearchBar from "@/componnets/atom/SearchBar";
import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import MobileMenu from "../MobileMenu";

const Navbar = () => {
  const [fold, setFold] = useState<boolean>(false);
  return (
    <nav className="relative flex items-start justify-between py-4 px-2">
      <div>
        <h1 className="text-2xl font-bold mb-3">Welcome Clinton!</h1>
        <div className="md:hidden">
          <SearchBar />
        </div>
      </div>
      <MobileMenu open={fold} />
      <div className="z-20 mr-3" onClick={() => setFold((prev) => !prev)}>
        {fold && (
          <AiOutlineMenuUnfold
            size={25}
            color="#fff"
            className="mx-1 mt-3 z-20"
          />
        )}
        {!fold && (
          <AiOutlineMenuFold
            size={25}
            color="#000"
            className="mx-1 mt-3 z-20"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
