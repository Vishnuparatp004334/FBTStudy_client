import React from 'react'
import "./section3.css"
import ImageFrame from "../../../assets/home/ImageFrame.png"
import ImageFrame2 from "../../../assets/home/ImageFrame1.png"
import ImageFrame3 from "../../../assets/home/ImageFrame2.png"
import downloadicon from "../../../assets/home/Icon.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
const Section3 = () => {
    const studyDestivation = [
        {
            id: 1,
            university: 'Enroll in job-oriented programs in USA: Top universities and scholarships on offer',
            imgSrc: ImageFrame,
            p1: "MBA in USA",
            p2: "CS in USA",
            p3: "Business School in USA",
            p4: "Data Science in USA"
        },
        {
            id: 2,
            university: 'Enroll in job-oriented programs in Germany: Top universities and scholarships on offer',
            imgSrc: ImageFrame2,
            p1: "MBA in Germany",
            p2: "CS in Germany",
            p3: "Data Science in Germany",
            p4: "Business School in Germany"
        },
        {
            id: 3,
            university: 'Enroll in job-oriented programs in UK: Top universities and scholarships on offer',
            imgSrc: ImageFrame3,
            p1: "MBA in UK",
            p2: "CS in UK",
            p3: "Business School in UK",
            p4: "Data Science in UK"
        },
        {
            id: 4,
            university: 'Enroll in job-oriented programs in USA: Top universities and scholarships on offer',
            imgSrc: ImageFrame2,
            p1: "MBA in USA",
            p2: "CS in USA",
            p3: "Business School in USA",
            p4: "Data Science in USA"
        }
    ];
    return (
        <div className='section3'>
            <div className='tophead3'>
                <div className='topleft3'>
                    <h1>Best Global <span>Study Destinations</span></h1>
                    <p>Learn the Detailed Process for Studying in Leading Study Abroad Destinations</p>
                </div>
            </div>
            <div className='studyprogram3'>
                <div className='sw-button-next arrow-left3'><i class="fa-solid fa-angle-left"></i></div>
                <div className='sw-button-prev custom-arrow-right arrow-right3'><i class="fa-solid fa-chevron-right"></i></div>
                <Swiper
                    grabCursor={true}
                    centeredSlides={true}
                    modules={[Autoplay, Navigation]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className='mySwiper'
                    navigation={{
                        nextEl: '.sw-button-next',
                        prevEl: '.sw-button-prev',
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
                            spaceBetween: 30,
                        }
                    }}
                >
                    {studyDestivation.map(program => (
                        <SwiperSlide key={program.id}>
                            <div className='studybox3'>
                                <div className='likeicon3'><i className="fa-regular fa-heart"></i></div>
                                <img src={program.imgSrc} alt='study' />
                                <p className='oxford3'>{program.university}</p>
                                <p className='msc3'>Explore Trending Searches:</p>
                                <div className='trending'>
                                    <p>{program.p1}</p>
                                    <p>{program.p2}</p>
                                    <p>{program.p3}</p>
                                    <p className='lastele'>{program.p4}</p>
                                </div>
                                <button className='bt13'>View Country</button>
                                <button className='bt23'><img src={downloadicon} alt='downloadIcon' />Country Guide</button>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default Section3
