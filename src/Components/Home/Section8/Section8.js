import React, { useState } from 'react';
import './section8.css';

const Section8 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    "Which country is the best for studying abroad?",
    "Is 20 lakhs enough to study abroad?",
    "What is the eligibility to study abroad?",
    "Which is the cheapest country to study?",
    "What are the questions that come to your mind when choosing to study abroad?"
  ];

  const answers = [
    "The best country for studying abroad depends on your field of study and preferences. Some popular choices are the USA, UK, Canada, and Australia.",
    "20 lakhs can be enough for some countries with lower tuition fees and living costs. Consider countries like Germany, France, and Norway for affordable education.",
    "Eligibility criteria vary by country and course. Generally, a good academic record and language proficiency (IELTS/TOEFL) are required.",
    "The cheapest countries to study are Germany, Norway, and Poland, where tuition fees are low or even free for some courses.",
    "Some common questions include cost of living, tuition fees, visa requirements, part-time work options, and career opportunities after graduation."
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {questions.map((question, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAccordion(index)}>
              <span>{question}</span>
              <span className={`faq-icon ${activeIndex === index ? 'active' : ''}`}>+</span>
            </div>
            {activeIndex === index && (
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p>{answers[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="view-more-btn">View More</button>
    </div>
  );
};

export default Section8;
