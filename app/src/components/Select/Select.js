import React, { useState } from "react";
import { styled } from "styled-components";
import { BsPhone } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { selectItems } from "../../utils/data";
import { useStateValue } from "../../context/stateProvider";
import { actionType } from "../../context/reducer";
function Select() {
  const [selectedDevice, setSelectedDevice] = useState("");

  const [{}, dispatch] = useStateValue();

  const select = (e)=>{
    setSelectedDevice(e.target.value)
    dispatch({
      type: actionType.SET_DEVICE,
      chooseDevice: e.target.value
    })
  }
  

  return (
    <Wrapper >
      <SelectPreview className="flex items-cente gap-2" htmlFor="select">
        <BsPhone className="text-xl" />
        {selectedDevice === "" ? "Выбрать модель телефона" : selectedDevice}
        <FiChevronDown className="md:text-xl text-sm" />
      </SelectPreview>
      <SelectOriginal onChange={ select}>
        {selectItems.map(({ name, values }, i) => {
          return (
            <optgroup label={name} key={i}>
              {values.map((items, i) => {
                return (
                  <option key={i} value={items}>
                    {items}
                  </option>
                );
              })}
            </optgroup>
          );
        })}
      </SelectOriginal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;

`;

const SelectPreview = styled.label``;
const SelectOriginal = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;

  &:focus > option:checked {
    background: #000 !important;
  }
`;

export default Select;
