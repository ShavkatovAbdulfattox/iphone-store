import React from "react";
import Language from "../Language/Language";
import { BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="container bg-white px-5 py-5 rounded-tl-3xl rounded-tr-3xl flex justify-between items-start shadow-2xl">
      <a href="#!" className="text-2xl font-bold uppercase  ">
        QPICK
      </a>
      <ul>
        <li>
          <a href="#!" className="font-mono text-lg">
            Избранное
          </a>
        </li>
        <li>
          <a href="#!" className="font-mono text-lg">
            Корзина
          </a>
        </li>
        <li>
          <a href="#!" className="font-mono text-lg">
            Контакты
          </a>
        </li>
      </ul>

      <div>
        <p className="font-thin tracking-wide text-lg mb-2">Условия сервиса</p>
        {/* 
          ! *********** Language ***********
         */}
        <Language />
        {/* 
          ! *********** Language ***********
         */}
      </div>

      {/* Icons */}
      <div className="flex gap-2">
        <BsInstagram className="text-3xl cursor-pointer" />
        <BsTelegram className="text-3xl cursor-pointer" />
        <BsFacebook className="text-3xl cursor-pointer" />
      </div>
    </footer>
  );
}

export default Footer;
