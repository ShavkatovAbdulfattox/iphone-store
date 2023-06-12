import React from "react";
import HeaderImg from "../assets/images/header-img.png";
import Main from '../components/Main'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <header className="container bg-gray-950 flex justify-evenly items-center rounded-3xl my-7 shadow-xl">
        <h1 className="text-white text-4xl font-bold">
          Аксессуары для <br /> Iphone 13 Pro Max
        </h1>
        <img src={HeaderImg} alt="iphone-img" className="-mt-10" />
      </header>
      <Main />
      <Footer />
    </>
  );
}

export default Home;
