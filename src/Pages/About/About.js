import React from 'react'
import './About.css'

const About = () => {

  // function numberWithCommas(x) {
  //   return (isString(x) ? x : x?.toString())?.replace(
  //     /\B(?=(\d{3})+(?!\d))/g,
  //     ","
  //   );
  // }
  var num = [4,5,1,3];
  console.log(Math.max.apply(null, num));

  return (
    <div className='aboutDiv'>
    <h1 className='about'>On this site you can get up-to-date information by day in all countries of the world</h1>
    </div>
    )
}

export default About