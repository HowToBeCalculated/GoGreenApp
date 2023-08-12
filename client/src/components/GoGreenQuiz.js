import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
  const handleAnswer = answer => () => onAnswer(answer);

  return (
    <div>
      <h2>{question.question}</h2>
      {
        question.type === 'MultipleChoice' ?
          question.answers.map((answer, index) =>
            <button key={index} onClick={handleAnswer(index)}>{answer}</button>
          ) :
          <div>
            <button onClick={handleAnswer(true)} className="mb-3">True</button>
            <button onClick={handleAnswer(false)}>False</button>
          </div>
      }
    </div>
  );
};

const Result = ({ questions, userAnswers }) => {
  const score = questions.reduce((score, question, index) =>
    question.correctAnswer === userAnswers[index] ? score + 1 : score,
    0
  );

  return (
    <div>
      <h2>Your score is {score} out of {questions.length}</h2>
      <button onClick={() => window.location.reload(false)}>Try Again</button>
    </div>
  );
};

const Quiz = () => {
  const questions = [
    {
        type: 'MultipleChoice',
        question: 'Which of the following activities produces the most carbon emissions?',
        answers: ['Driving a car', 'Eating meat', 'Watching TV', 'Planting a tree'],
        correctAnswer: 0
      },
      {
        type: 'TrueFalse',
        question: 'Carbon emissions can be significantly reduced by recycling and reducing waste?',
        correctAnswer: true
      },
      {
        type: 'MultipleChoice',
        question: 'Which of these is a way that you can personally help to reduce carbon emissions?',
        answers: ['Fly in airplanes more frequently', 'Increase consumption of processed foods', 'Reduce, Reuse, Recycle', 'All of the above'],
        correctAnswer: 2
      },
      {
        type: 'TrueFalse',
        question: 'Using public transportation instead of a personal car can help to reduce carbon emissions?',
        correctAnswer: true
      },
      {
        type: 'MultipleChoice',
        question: 'What is the effect of planting trees on carbon emissions?',
        answers: ['Increases carbon emissions', 'No effect on carbon emissions', 'Decreases carbon emissions', 'Trees are not related to carbon emissions'],
        correctAnswer: 2
      },
      {
        type: 'TrueFalse',
        question: 'Eating less meat and more plant-based foods can reduce carbon emissions?',
        correctAnswer: true
      },
      {
        type: 'MultipleChoice',
        question: 'Which form of energy contributes least to carbon emissions?',
        answers: ['Coal', 'Natural Gas', 'Solar', 'Petroleum'],
        correctAnswer: 2
      }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = answer => {
    const nextQuestion = currentQuestion + 1;
    setUserAnswers([...userAnswers, answer]);
    setCurrentQuestion(nextQuestion);
  };

  return (
    currentQuestion < questions.length ?
      <Question question={questions[currentQuestion]} onAnswer={handleAnswer} /> :
      <Result questions={questions} userAnswers={userAnswers} />
  );
};

export default Quiz;
