import React from 'react'
import "./section5.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// import 'swiper/css';
import imageFrame from "../../../assets/home/image123.png"
import imageFrame2 from "../../../assets/home/robert.png"
import University from "../../../assets/home/University_of_Oxford.png"
const slidesData = [
    {
        imgSrc: imageFrame,
        description:
            'FBT Study Abroad has significantly transformed the lives of students worldwide by providing access to high-quality international education. With a strong focus on academic excellence and global exposure, FBT has empowered students to pursue their dreams of studying in top universities across the globe.',
        name: 'Tom Cruise',
        qualification: 'MS Data Science, England',
        university: University,
    },
    {
        imgSrc: imageFrame2,
        description:
            'FBT Study Abroad has significantly transformed the lives of students worldwide by providing access to high-quality international education. With a strong focus on academic excellence and global exposure, FBT has empowered students to pursue their dreams of studying in top universities across the globe.',
        name: 'Robert Downey Jr.',
        qualification: 'MS Information Technology, England',
        university: University,
    },
    {
        imgSrc: imageFrame,
        description:
            'FBT Study Abroad has significantly transformed the lives of students worldwide by providing access to high-quality international education. With a strong focus on academic excellence and global exposure, FBT has empowered students to pursue their dreams of studying in top universities across the globe.',
        name: 'Emma Watson',
        qualification: 'MA Linguistics, UK',
        university: University,
    },
    {
        imgSrc: imageFrame2,
        description:
            'FBT Study Abroad has significantly transformed the lives of students worldwide by providing access to high-quality international education. With a strong focus on academic excellence and global exposure, FBT has empowered students to pursue their dreams of studying in top universities across the globe.',
        name: 'Emma Watson',
        qualification: 'MA Linguistics, UK',
        university: University,
    },
];
const Section5 = () => {
    return (
        <div className='section5'>
            <div className='section5top'>
                <h1>Achievement & <span>Progress Stories</span></h1>
                <p>See How FBT Study Abroad is Making a Difference</p>
                <div className='section5-con'>
                    <Swiper
                        grabCursor={true}
                        centeredSlides={false} // Set this to false so that slides are not centered
                        modules={[Autoplay, Navigation]}
                        autoplay={{ delay: 3500 }}
                        loop={true}
                        className='newSwiper'
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {slidesData.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className='section5-box'>
                                    <div className='section5-left'>
                                        <img src={slide.imgSrc} alt='imageFrame' />
                                    </div>
                                    <div className='section5-right'>
                                        <p>
                                            {slide.description}{' '}
                                            <span>...Read More</span>
                                        </p>
                                        <div className='nameof'>
                                            <h6 className='firstname'>{slide.name}</h6>
                                            <h6 className='firstpara'>{slide.qualification}</h6>
                                        </div>
                                        <div className='university'>
                                            <img src={slide.university} alt='University' />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

            </div>
        </div>
    )
}

export default Section5
