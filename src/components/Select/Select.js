import React from "react";
import { useNavigate } from "react-router-dom";
import "./Select.css";

const Select = ( {name,setIsFocused, setValue}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("../" + name);
        console.log(name);
        setIsFocused(false)
         setValue(name)
      // isFocused=false
      }}
      className="SelectDiv"
    >
      {name}
    </div>
  );
};

export default Select;
