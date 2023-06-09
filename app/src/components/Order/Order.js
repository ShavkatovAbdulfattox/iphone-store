import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { RxCodesandboxLogo } from "react-icons/rx";
import Swal from "sweetalert2";

import { auth } from "../../config/firebase.config";

function Order({ data, total }) {
  return (
    <article className=" flex flex-col justify-center items-center mt-10 mb-10">
      <div className="max-w-7xl w-full">
        <h2 className="text-2xl font-bold tracking-wider">Оформление заказа</h2>
        <div className="lg:flex lg:justify-between gap-3">
          <section className="lg:w-[45%] bg-white shadow-lg rounded-3xl py-6 px-7 mt-5 ">
            <h3 className="flex justify-between text-xl font-bold">
              Доставка курьером
              <p className="text-lg font-mono font-thin">40 000 UZS</p>
            </h3>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23974.78814313325!2d69.22630197182106!3d41.31215891378506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a4ea6b86e67%3A0x91ed3e9e44b3b0ab!2z0J3QvtCy0LfQsA!5e0!3m2!1sru!2s!4v1687343642013!5m2!1sru!2s"
                allowfullscreen=""
                className="w-full mt-3"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>

              <h3 className="text-lg flex items-center mt-2 mb-2 gap-3">
                <FaMapMarkerAlt />
                Адрес доставки
              </h3>
              <form action="" className="flex flex-col gap-3">
                <input
                  type=""
                  placeholder="Город "
                  className="w-full bg-primary text-lg py-2 px-3 rounded-full"
                />
                <input
                  type=""
                  placeholder="Улица / Район "
                  className="w-full bg-primary text-lg py-2 px-3 rounded-full"
                />
                <div className="flex flex-wrap">
                  <input
                    type=""
                    placeholder="Дом "
                    className="w-2/4 bg-primary text-lg py-2 px-3 rounded-full mb-3"
                  />
                  <input
                    type=""
                    placeholder="Подъезд "
                    className="w-2/4 bg-primary text-lg py-2 px-3 rounded-full mb-3"
                  />{" "}
                  <input
                    type=""
                    placeholder="Квартира "
                    className="w-full bg-primary text-lg py-2 px-3 rounded-full mb-3"
                  />
                </div>
              </form>
            </div>
          </section>
          <section className="lg:w-[55%] mt-5">
            <div className="bg-white shadow-xl rounded-3xl py-6 px-7">
              <h3 className="text-xl font-bold tracking-wider">Ваш заказ</h3>
              <div className="w-full mt-3">
                <div className="lg:overflow-y-scroll lg:max-h-[200px] h-[100%] lg:px-5 mb-5">
                  {data.map((item, i) => {
                    return (
                      <div
                        className="flex justify-between items-center text-lg font-mono mb-3 "
                        key={i}
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="min-h-[9] max-h-16 w-12 object-contain"
                          />
                          <div className="xs:flex hidden gap-5 ">
                           <h3 className="capitalize text-gray-700">
                          <span className="font-bold">{item.amount}x</span>{" "}
                            {item.name}
                            </h3> 
                          </div>
                          
                            
                        </div>
                        <p className="xs:block hidden font-mono  text-orange-600">{item.cost}</p>

                        <div className="flex flex-col items-start w-full ml-5 xs:hidden   ">
                           <h3 className="capitalize text-gray-700 flex justify-between w-full mb-2">
                      
                            {item.name}
                          <span className="font-bold lowercase flex gap-1">x{item.amount}</span>{" "}
                            </h3> 
                         <p className="font-mono w-full text-orange-600">{item.cost}</p>

                          </div>
                        {/* <p className="font-mono ">{item.cost}</p> */}

                      </div>
                    );
                  })}
                </div>

                <h3 className="flex justify-between text-lg font-mono">
                  Доставка <p className="font-mono">40 000uzs</p>
                </h3>
                <h3 className="flex justify-between text-lg font-mono">
                  К оплате{" "}
                  <p className="font-mono">
                    {" "}
                    {new Intl.NumberFormat("en-US").format(total)},00 UZS
                  </p>
                </h3>
              </div>
            </div>
            <div className="bg-white shadow-xl rounded-3xl  py-6 px-7 mt-4">
              <h3 className="text-xl font-bold tracking-wider">
                Способ оплаты
              </h3>
              <div className="flex justify-between items-center">
                <h4 className="flex items-center gap-3 text-lg">
                  <RiVisaFill /> Счет на kaspi.kz
                </h4>
                <svg
                  width="15"
                  height="8"
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.43372 8L0.400391 1.99965L2.74594 0L7.43372 4.00071L12.1215 0L14.4671 1.99965L7.43372 8Z"
                    fill="#101010"
                  />
                </svg>
              </div>
              <div
                className="flex justify-between items-center text-lg "
                onClick={() => {
                  Swal.fire({
                    title: "Введите промокод",
                    input: "text",
                    inputAttributes: {
                      autocapitalize: "off",
                    },
                    showCancelButton: true,
                    cancelButtonText: "Отменить",
                    confirmButtonText: "Посмотреть",
                    showLoaderOnConfirm: true,
                  });
                }}
              >
                <h4 className="text-gray-500 flex items-center gap-3 cursor-pointer">
                  <RxCodesandboxLogo /> Есть промокод?
                </h4>
                <svg
                  width="5"
                  height="9"
                  viewBox="0 0 5 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00009 4.24296L1.59846 8.48596L0.464844 7.07096L2.73287 4.24296L0.464844 1.41496L1.59846 -3.82088e-05L5.00009 4.24296Z"
                    fill="#838383"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-white shadow-xl rounded-3xl py-6 px-7 mt-4">
              <h4 className="font-bold text-xl">Номер получателя</h4>
              <input
                type="text"
                placeholder="+7 ___ ___ __ __"
                className="bg-gray-200 rounded-full w-full py-2 px-3 mt-2"
              />
            </div>
            <button className="w-full bg-black text-white rounded-full py-3 mt-5">
              {auth?.currentUser
                ? "Закончить оформление"
                : "Чтоб продолжить пройдите регистрацию"}
            </button>
          </section>
        </div>
      </div>
    </article>
  );
}

export default Order;
