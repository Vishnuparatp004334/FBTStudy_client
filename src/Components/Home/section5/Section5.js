import React from 'react'
import "./section5.css"
import imageFrame from "../../../assets/home/image123.png"
import University from "../../../assets/home/University_of_Oxford.png"
const Section5 = () => {
    return (
        <div className='section5'>
            <div className='section5top'>
                <h1>Achievement & <span>Progress Stories</span></h1>
                <p>See How FBT Study Abroad is Making a Difference</p>
                <div className='section5-con'>
                    <div className='section5-box'>
                        <div className='section5-left'>
                            <img src={imageFrame} alt='imageFrame' />
                        </div>
                        <div className='section5-right'>
                            <p>FBT Study Abroad has significant12pxly transformed the lives of students worldwide by providing access to high-quality international education. With a strong focus on academic excellence and global exposure, FBT has empowered students to pursue their dreams of studying in top universities across the globe <span>...Read More</span></p>
                            <div className='nameof'>
                                <h6 className='firstname'>Tom Cruise</h6>
                                <h6 className='firstpara'>MS Data Science, England</h6>
                            </div>
                            <div className='university'>
                                <img src={University} alt='University'/>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section5
