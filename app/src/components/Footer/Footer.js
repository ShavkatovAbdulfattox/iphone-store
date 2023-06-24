import React from "react";
import Language from "../Language/Language";
import { BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    <footer className=" container bg-white px-5 py-5 rounded-tl-3xl rounded-tr-3xl flex justify-between items-center shadow-2xl">
 <div className="">
 <a href="#!" className="md:text-2xl text-lg font-bold uppercase  mt-4">
        QPICK
      </a>
      <ul>
        <li>
          <a href="#!" className="font-mono md:text-lg text-sm">
            Избранное
          </a>
        </li>
        <li>
          <a href="#!" className="font-mono md:text-lg text-sm">
            Корзина
          </a>
        </li>
        <li>
          <a href="#!" className="font-mono md:text-lg text-sm">
            Контакты
          </a>
        </li>
      </ul>
 </div>

      <div>
        <p className="font-thin tracking-wide md:text-lg text-sm mb-2">Условия сервиса</p>
        {/* 
          ! *********** Language ***********
         */}
        <Language />
        {/* 
          ! *********** Language ***********
         */}
      </div>

      {/* Icons */}
      <div className="md:flex flex-col gap-2">
        <BsInstagram className="md:text-3xl text-xl  cursor-pointer m-0" />
        <BsTelegram className="md:text-3xl  text-xl cursor-pointer md:m-0 mt-2" />
        <BsFacebook className="md:text-3xl  text-xl cursor-pointer md:m-0 mt-2" />
      </div>
    </footer>
  );
}

export default Footer;
