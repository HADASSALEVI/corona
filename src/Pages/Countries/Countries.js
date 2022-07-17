import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Countries.css";

const Countries = ({ country, name}) => {
  const [newInfo, setNewInfo] = useState("");
  const [dataArr, setDataArr] = useState([]);
  const params = useParams();
  const { countriess } = params;
  const [Given, setGiven]=useState(dataArr)
  console.log(countriess);

  useEffect(() => {
    try {
      async function fetchData() {
        const urlCoronaCountriesApi = `https://disease.sh/v3/covid-19/countries/${countriess}`;
        console.log(urlCoronaCountriesApi);
        const { data } = await axios.get(urlCoronaCountriesApi);
      

        setDataArr(data);
      }
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, [countriess]);
  useEffect(() => {
    if (dataArr.length > 0) {
      const newCountry = dataArr.filter((el) => el.name === countriess)[0];
      setNewInfo(newCountry);
      console.log(newInfo);
    }
    // console.log(name);
    // setCovidIn( data.data)
    // console.log(newInfo);
    // console.log(dataArr);
  }, [dataArr]);

 
  return (
    <div className="countriesDiv">
      <h1>{countriess}</h1>
      <div className="infoDiv">
        <h4>ACTIVE</h4>
        <h2>{parseInt(dataArr.active).toLocaleString()}</h2>
      </div>
      <div className="infoDiv">
        <h4>CASES</h4>
        <h2>{parseInt(dataArr.cases).toLocaleString()}</h2>
      </div>
      <div className="infoDiv">
        <h4>RECOVERED</h4>
        <h2>{parseInt(dataArr.recovered).toLocaleString()}</h2>
      </div>
      <div className="infoDiv">
        <h4>TODAY</h4>
        <h2>{parseInt(dataArr.todayCases).toLocaleString()}</h2>
      </div>
      <div className="infoDiv">
        <h4>DAETHS</h4>
        <h2>{parseInt(dataArr.deaths).toLocaleString()}</h2>
      </div>
      <div className="infoDiv">
        <h4>CRITICAL</h4>
        <h2>{parseInt(dataArr.critical).toLocaleString()}</h2>
      </div>
    </div>
  );
};

export default Countries;
