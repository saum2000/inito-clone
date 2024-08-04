import React from "react";
import logo from "./assets/logo.svg";
import menu from "./assets/icons/menu.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="lg:px-[350px] px-5 flex flex-row justify-between items-center py-8">

      <div className="flex gap-2">
      <img className="lg:hidden block cursor-pointer" src={menu} alt={menu} />
      <img onClick={() => navigate("/")} className="cursor-pointer h-8" src={logo} alt={logo} />
      </div>

      <div className="lg:flex hidden items-center gap-10">
        {["About", "Blog", "FAQ", "Contacts"].map((item: any) => (
          <p className="text-l font-bold text-[#112D35] cursor-pointer">
            {item}
          </p>
        ))}

      </div>
      <button className="text-s bg-cyan lg:w-fit-content lg:px-6 px-4 py-2 lg:h-[50px] text-white lg:font-medium rounded-full">
        Try inito
      </button>
    </div>
  );
}

export default Header;
