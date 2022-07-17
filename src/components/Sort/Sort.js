// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useEffect } from 'react'
// import axios from 'axios'


// const Sort = () => {
//     const params = useParams()
//     const {cases} = params;
//     console.log(cases);
//     useEffect(() => {
//       try {
//         async function fetchData() {
//           const urlCoronaCountriesApi = `https://disease.sh/v3/covid-19/countries/`;
//           const { data } = await axios.get(urlCoronaCountriesApi);
//         console.log(data);
        
  
//         }
//         fetchData();
//       } catch (e) {
//         console.log(e);
//       }
//     });
//   return (
//     <div>Sort</div>
//   )
// }

// export default Sort