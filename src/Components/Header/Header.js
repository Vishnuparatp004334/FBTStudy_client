import React from 'react'
import "./header.css"
import logo from "../../assets/fbtstudylogo.png"
const Header = () => {
    return (
        <div className='header'>
            <div className='inside-header'>
                <div className='logo'>
                    <div>
                        <img src={logo} alt='website_logo' />
                    </div>
                </div>
                <div className='explorecourcebtn'>
                    <button>Explore Courses <i class="fa-solid fa-arrow-down"></i></button>
                    <div className='line'></div>
                </div>
                <div className='navbar'>
                    <p>Countries</p>
                    <p>Exams</p>
                    <p>Resources</p>
                    <p>More</p>
                    <p>Sign In</p>
                </div>
            </div>
        </div>
    )
}

export default Header
