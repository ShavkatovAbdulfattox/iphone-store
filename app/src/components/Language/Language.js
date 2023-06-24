import React, { useState } from "react";
import { GrLanguage } from "react-icons/gr";

function Language() {
  const [isActive, setIsActive] = useState(0);
  const lang = ["Uz", "Рус", "Eng"];

  return (
    <div className="flex items-center gap-2">
      <GrLanguage className="md:text-xl text-lg" />
      <ul className="flex gap-2">
        {lang.map((txt, i) => {
          return (
            <li
              className={`cursor-pointer md:text-lg text-sm ${
                isActive === i ? "text-orange-500" : undefined
              }`}
              key={i}
              onClick={() => setIsActive(i)}
            >
              <p>{txt}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Language;
