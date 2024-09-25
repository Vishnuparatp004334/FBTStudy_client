import React from 'react'
import "./section6.css"
import study from "../../../assets/home/blogsimg.png"
import Calander from "../../../assets/home/calender.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
const Section6 = () => {
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
            degree: 'MSc in Advanced Computer Science',
            duration: '12 Months',
            location: 'UK',
            imgSrc: study,
        }
    ];
    return (
        <div className='section6'>
            <div className='tophead'>
                <div className='topleft'>
                    <h1>Discover Insights from <span>Study Abroad Blogs</span></h1>
                    <p>Get clarity on your most asked questions by exploring our blogs</p>
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
                        1440: {
                            spaceBetween: 20,
                        }
                    }}
                >
                    {studyPrograms.map(program => (
                        <SwiperSlide key={program.id}>
                            <div className='newstudybox'>
                                <img src={program.imgSrc} alt='study' />
                                <p className='msc'>{program.degree}</p>
                                <div>
                                    <div className='date'>
                                        <img src={Calander} alt='calander'/>
                                        <p>23 Sep'24</p>
                                    </div>
                                    <p className='more'>...Read More</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default Section6
