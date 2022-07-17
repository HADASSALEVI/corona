import React , {useState,useEffect} from 'react'
import axios from 'axios'
import './Home.css'

const Home = () => {
  const [countries,setCountries]=useState("")
 
  useEffect(()=>{
    try{
      async function fetchData(){
        const urlCoronaAllApi = 'https://disease.sh/v3/covid-19/all'
  
        const {data} = await axios.get(urlCoronaAllApi)
        console.log(data);
        setCountries(data)
        
      
      }
      fetchData()
    }
    catch(e){
      console.log(e);
    }
  },[])
  return (
    <div className='covidHome'>

   <h1 >COVID-19 CORONAVIRUS TRACKER</h1>
    <hr/>
    <div className='homaLabel'><h4>TOTAL CASES: </h4>
    <br/>
    <h2>{countries.cases}</h2></div>
    <div className='homaLabel'><h4>DEATHS:</h4>
    <br/>
    <h2>{countries.deaths}</h2></div>
    <div className='homaLabel'><h4 >RECOVERED:</h4>
    <br/>
    <h2>{countries.recovered}</h2></div>
    <div className='homaLabel'><h4 >NEW CASES:</h4>
    <br/>
    <h2>{countries.todayCases}</h2></div>
    <div className='homaLabel'><h4 >NEW DEATHS:</h4>
    <br/>
    <h2>{countries.todayDeaths}</h2></div>
    </div>
  )
}

export default Home
