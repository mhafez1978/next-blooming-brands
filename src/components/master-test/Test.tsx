"use client";

import React, { useState } from "react";

const CodeGenerator = () => {
  const [questions, setQuestions]: any = useState([]);
  const [questionInput, setQuestionInput]: any = useState("");

  const handleAddQuestion = () => {
    setQuestions((prev: any) => [...prev, questionInput]);
    setQuestionInput("");
  };

  const generateCode = () => {
    const componentCode = `
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = ${JSON.stringify(questions)};
  
  const handleNext = (answer) => {
    const newAnswers = { ...answers, [questions[currentQuestionIndex]]: answer };
    setAnswers(newAnswers);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', newAnswers, 'YOUR_USER_ID')
        .then(response => console.log('Email successfully sent!', response))
        .catch(err => console.log('Failed to send email.', err));
    }
  };

  return (
    <div>
      <h1>{questions[currentQuestionIndex]}</h1>
      <input type="text" onChange={(e) => handleNext(e.target.value)} placeholder="Your answer..." />
    </div>
  );
};

export default Questionnaire;
`;
    return componentCode;
  };

  return (
    <div>
      <input
        value={questionInput}
        onChange={(e) => setQuestionInput(e.target.value)}
        placeholder="Enter your question"
      />
      <button onClick={handleAddQuestion}>Add Question</button>
      <textarea
        title="answers"
        rows={10}
        cols={50}
        readOnly
        value={generateCode()}
      />
    </div>
  );
};

export default CodeGenerator;
