import React , {useState,useEffect} from 'react'
import axios from 'axios'
import './Home.css'
import { useParams } from 'react-router-dom'
import Sort from '../../components/Sort/Sort'

const Home = ({dataArr}) => {
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

  console.log(countries);
  return (

    <div className='covidHome'>
   

   <h1 >COVID-19 CORONAVIRUS TRACKER</h1>
    <hr/>
    <div className='homaLabel'><h4>TOTAL CASES: </h4>
    <br/>
    <h2>{parseInt(countries.cases).toLocaleString()}</h2></div>
    <div className='homaLabel'><h4>DEATHS:</h4>
    <br/>
    <h2>{parseInt(countries.deaths).toLocaleString()}</h2></div>
    <div className='homaLabel'><h4 >RECOVERED:</h4>
    <br/>
    <h2>{parseInt(countries.recovered).toLocaleString()}</h2></div>
    <div className='homaLabel'><h4 >NEW CASES:</h4>
    <br/>
    <h2>{parseInt(countries.todayCases).toLocaleString()}</h2></div>
    <div className='homaLabel'><h4 >NEW DEATHS:</h4>
    <br/>
    <h2>{parseInt(countries.todayDeaths).toLocaleString()}</h2></div>
    {/* <Sort/> */}
    </div>
     
  
  )
}

export default Home
