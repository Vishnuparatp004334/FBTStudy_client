import React from 'react'
import filter from "../../../assets/home/filter.png"
import study from "../../../assets/home/study.png"
import downloadicon from "../../../assets/home/SyllabusIcon.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import "./section2.css"
const Section2 = () => {
  const studyPrograms = [
    {
      id: 1,
      university: 'Oxford University',
      degree: 'MSc in Advanced Computer Science',
      duration: '12 Months',
      location: 'England',
      imgSrc: study,
    },
    {
      id: 2,
      university: 'Harvard University',
      degree: 'MSc in Data Science',
      duration: '24 Months',
      location: 'USA',
      imgSrc: study,
    },
    {
      id: 3,
      university: 'MIT',
      degree: 'MSc in AI and Robotics',
      duration: '18 Months',
      location: 'USA',
      imgSrc: study,
    },
    {
      id: 4,
      university: 'Cambridge University',
      degree: 'MSc in Machine Learning',
      duration: '12 Months',
      location: 'UK',
      imgSrc: study,
    }
  ];
  return (
    <div className='section2'>
      <div className='tophead'>
        <div className='topleft'>
          <h1>Global <span>Study Programs</span></h1>
          <p>Begin in India, Finish Top-Tier Courses in Abroad</p>
        </div>
        <div className='topright'>
          <div><img src={filter} alt='filter' /><p>Filters</p></div>
        </div>
      </div>

      <div className='studyprogram'>
      <div className='swiper-button-next arrow-left'><i class="fa-solid fa-angle-left"></i></div>
      <div className='swiper-button-prev custom-arrow-right arrow-right'><i class="fa-solid fa-chevron-right"></i></div>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3500 }}
          loop={true}
          className='mySwiper'
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            320: {   // For phones
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {   // For tablets
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {  // For laptops and larger screens
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440:{
              spaceBetween: 20,
            }
          }}
        >
         {studyPrograms.map(program => (
            <SwiperSlide key={program.id}>
              <div className='studybox'>
                <div className='likeicon'><i className="fa-regular fa-heart"></i></div>
                <img src={program.imgSrc} alt='study' />
                <p className='oxford'>{program.university}</p>
                <p className='msc'>{program.degree}</p>
                <div>
                  <div className='inside-icon'><i className="fa-solid fa-graduation-cap"></i><p>Master’s Degree</p></div>
                  <div className='inside-icon'><i className="fa-regular fa-clock"></i><p>{program.duration}</p></div>
                  <div className='inside-icon'><i className="fa-solid fa-location-dot"></i><p>{program.location}</p></div>
                </div>

                <button className='bt1'><img src={downloadicon} alt='downloadIcon' />Syllabus</button>
                <button className='bt2'>Check Availibility</button>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
        <button className='viewcourses'>View All Courses <i class="fa-solid fa-chevron-right"></i></button>
      </div>

    </div>
  )
}

export default Section2
