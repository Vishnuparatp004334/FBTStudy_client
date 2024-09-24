import React, { useEffect, useState } from 'react';
import "./home.css"
import hero from "../../assets/home/heroimage.jpg"
import saperator from "../../assets/home/Saperator.png"
import Cources from "../../assets/home/CourcesIcon.png"
import Countries from "../../assets/home/CountriesIcon.png"
import flag from "../../assets/home/flagofindia.png"
const Section1 = () => {
  const [universityCount, setUniversityCount] = useState(0);
  const [careerCount, setCareerCount] = useState(0);

  useEffect(() => {
    // For University Partners (100+)
    const universityInterval = setInterval(() => {
      setUniversityCount((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        clearInterval(universityInterval);
        return prev;
      });
    }, 50);


    const careerInterval = setInterval(() => {
      setCareerCount((prev) => {
        if (prev < 10) {
          return prev + 1;
        }
        clearInterval(careerInterval);
        return prev;
      });
    }, 90);

    return () => {
      clearInterval(universityInterval);
      clearInterval(careerInterval);
    };
  }, []);
  return (
    <div className='hero'>
      <div className='hero-overlay'></div>
      <div className='heroimage'>
        <img src={hero} alt='hero' />
      </div>
      <div className='leftside-hero'>
        <h1 className='leftside-head'>Global Careers Start with FBT </h1>
        <p className='leftsidepara'>Shaping Careers Worldwide</p>
        <div className='count'>
          <div className='left'>
            <div><span>{universityCount}+</span>
              <p>University Partners</p></div>
          </div>
          <div className='middle'>
            <img src={saperator} alt='saperator' />
          </div>
          <div className='right'>
            <div> <span>{careerCount.toLocaleString()}K+</span>
              <p>Careers Transformed</p></div>
          </div>
        </div>
        <button className='explore'>Explore Courses <i class="fa-solid fa-arrow-down"></i></button>
      </div>
      <div className='inside-hero'>
        <p className='herobox-para'>Study Abroad on a Budget: <br />
          International Degree Made Affordable</p>
        <div className='herobox'></div>
        <div className='cources'>
          <div className='cource-left'>
            <img src={Cources} alt='cources' />
            <p>300+ Cources</p>
          </div>
          <div className='cource-right'>
            <img src={Countries} alt='cources' />
            <p>15+ Countries</p>
          </div>
        </div>
        <div className='desireddegree'>
          <p>Desired Degree <span>*</span></p>
          <div>
            <button>Masters</button>
            <button>Bachelors</button>
          </div>
        </div>
        <div className='details'>
          <p>Enter your details <span>*</span></p>
          <input placeholder='Name *' />
        </div>
        <div className='number'>
          <div className='left'>
            <div className='flag'>
              <img src={flag} alt='flag' />
              <i class="fa-solid fa-caret-down"></i>
            </div>
            <p>+91</p>
          </div>
          <div className='nuright'>
            <input placeholder='Mobile  *' />
          </div>
        </div>
        <div className='email'>
          <input placeholder='Email  *' />
        </div>
        <button className='freecoun'>Book Your Free Counceling</button>
        <p className='lastpara'>By submitting this form, you agree to the
          <span> Terms of Use</span> and <span>Privacy Policy</span></p>
      </div>
    </div>
  )
}

export default Section1
