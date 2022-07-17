import React from 'react'
import './About.css'

const About = () => {

  let myNumbers = [22,1,8,4,17];
  myNumbers.sort((a,b) => b-a);
  console.log(myNumbers);

  return (
    <div className='aboutDiv'>
    <h1 className='about'>On this site you can get up-to-date information by day in all countries of the world</h1>
    </div>
    )
}

export default About