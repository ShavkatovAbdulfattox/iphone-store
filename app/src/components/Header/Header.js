import React from "react";
import HeaderImg from "../../assets/images/header-img.png";
import { useStateValue } from "../../context/stateProvider";

function Header() {
  const [{ chooseDevice }] = useStateValue();

  return (
    <header className=" bg-gray-950 flex justify-evenly items-center rounded-3xl my-7 shadow-xl">
      <h1 className="text-white md:text-4xl text-xl font-bold">
        Аксессуары для <br />{" "}
        {chooseDevice ? chooseDevice : "Iphone 13 Pro Max"}
      </h1>
      <img src={HeaderImg} alt="iphone-img" className="-mt-10 md:w-auto w-44 h-60 object-contain" />
    </header>
  );
}

export default Header;
