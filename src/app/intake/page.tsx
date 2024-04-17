"use client";

import React, { useState } from "react";
//import emailjs from "emailjs-com";

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    "whats your name?",
    "What is your phone?",
    "What is your budget?",
    "",
  ];

  const handleNext = (answer: any) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestionIndex]]: answer,
    };
    setAnswers(newAnswers);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      //   emailjs
      //     .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", newAnswers, "YOUR_USER_ID")
      //     .then((response) => console.log("Email successfully sent!", response))
      //     .catch((err) => console.log("Failed to send email.", err));
    }
  };

  return (
    <div>
      <h1>{questions[currentQuestionIndex]}</h1>
      <input
        type="text"
        onChange={(e) => handleNext(e.target.value)}
        placeholder="Your answer..."
      />
    </div>
  );
};

export default Questionnaire;
