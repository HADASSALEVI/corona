import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import LinkCon from "./LinkCon/LinkCon";
import axios from "axios";
import Select from "../Select/Select";
import "./Navbar.css";

const listStyle = {
  display: "flex",
  justifyContent: "space-around",
  // border: "black solid 1px",
  listStyle: "none",
  margin: "0px",
  height: "12.5vh",
};


const Navbar = ({isFocused, setIsFocused, value, setValue}) => {
  const [country, setCountry] = useState([]);
  const [arr, setArr] = useState(country);
  const [isGet, setIsGet] = useState(false);

  useEffect(() => {
    const countryArr = country.filter((el) =>
      el.name.toLowerCase().includes(value)
    );

    try {
      setArr(countryArr);
      console.log(arr);
    } catch (e) {
      console.log(e);
    }
  }, [value]);


  useEffect(() => {
    try {
      async function fetchData() {
        const urlCoronaApi = "https://corona-api.com/countries";

        const { data } = await axios.get(urlCoronaApi);

        setCountry(data.data);
        setIsGet(true);
      }
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="navDiv">
      <ul style={listStyle}>
        <li>
          <Link to="/" >
            Home
          </Link>
        </li>
        <li>
          <input
            type="text"
            className="navInput"
            placeholder="country"
            value={value}
            onClick={() => {
              setIsFocused(true);
              console.log(isFocused);
            }}

            onChange={(e) => {
              setValue(e.target.value);
              console.log(e.target.value);
            }}
            
          ></input>
          {isFocused ?
            arr.map((el) => (
              <Select
                key={el.code}
                name={el.name}
                setValue={setValue}
                // setIsFocused={setIsFocused}
                setIsFocused={setIsFocused}
              />
            ))
          : null
          }
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
