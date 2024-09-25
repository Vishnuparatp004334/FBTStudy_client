import React from 'react';
import './section7.css';
import SearchSymbol from "../../../assets/home/search_symbol.png";

const Section7 = () => {
  const topics = [
    "Study Abroad Exams", "Study Abroad Guide", "Study Abroad Consultants", 
    "Study Abroad Packing List", "How to Study Abroad After 12th", 
    "SOP for MS", "Admission Criteria for Study Abroad", "Study Abroad Guide",
    "SGPA Full Form", "How to Apply for Student VISA", 
    "Are There Scholarships Available", 
    "Placement Guarantee After Study Abroad"
  ];

  return (
    <div className="newgraybox">
      <div className="searchimage">
        <img src={SearchSymbol} alt="Search Symbol" />
      </div>
      <div className="insidenewgray-box">
        <div className="insidenew-left">
          <div className='divcontain'>
            <h1>Popular Search Queries</h1>
            <p>Key Topics in Demand</p>
          </div>
        </div>
        <div className="insidenew-right">
          <div className="topic-list">
            {topics.map((topic, index) => (
              <button key={index} className="topic-button">{topic}</button>
            ))}
          </div>
          <div className="view-more">
            <button className="view-more-button">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
