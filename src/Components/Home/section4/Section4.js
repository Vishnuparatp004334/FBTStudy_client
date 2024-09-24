import React from 'react'
import "./section4.css"
import ScholarShip from "../../../assets/home/scholarships.png"
import downloadicon from "../../../assets/home/Icon.png"
const Section4 = () => {
  return (
    <div className='graybox'>
      <div className='insidegray-box'>
        <div className='gray-left'>
            <div>
                <h2>Scholarship Opportunities</h2>
                <p>Take the first leap toward your academic dreams with our curated scholarship platform.</p>
                <button><img src={downloadicon} alt='downloadIcon' />Search for Scholarships</button>
            </div>
        </div>
        <div className='gray-right'>
            <img src={ScholarShip} alt='ScholarShip'/>
        </div>
      </div>
    </div>
  )
}

export default Section4
