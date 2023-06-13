import React from "react";
import ErrorImg from "../../assets/images/404.png";

function Error() {
  return (
    <div className="">
      <img src={ErrorImg} alt="error-404" className="w-screen h-[95vh] object-contain" />
    </div>
  );
}

export default Error;
