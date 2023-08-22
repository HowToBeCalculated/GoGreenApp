import React, { useState, useEffect } from "react";

// const Question = ({ question, onAnswer }) => {
//   const handleAnswer = answer => () => onAnswer(answer);

import {
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
  Box,
} from "@mui/material";
import leaves from "./GoGreenSignin.png";

const Question = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setSelectedAnswer(null);
  }, [question]);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (

    <Grid
      container
      spacing={3}
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Grid item xs={4} md={4} lg={4} xl={4}>
        <img src={leaves} alt="Leaves" style={{ width: "100%", height: "100%"}}/>
      </Grid>
      <Grid item xs={8} md={8} lg={8} xl={8}>
        <div className="question" >
          <Typography variant="h6" fontWeight="bold" marginBottom="20px">
            {question.question}
          </Typography>
          {question.type === "MultipleChoice" ? (
            <RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
              {question.answers.map((answer, index) => (
                <FormControlLabel
                  key={index}
                  value={index.toString()}
                  control={<Radio />}
                  label={answer}
                />
              ))}
            </RadioGroup>
          ) : (
            <RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
              <FormControlLabel value="true" control={<Radio />} label="True" />
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="False"
              />
            </RadioGroup>
          )}
        </div>
        <Button
          onClick={() => {
            if (selectedAnswer !== null) {
              onAnswer(Number(selectedAnswer));
            }
          }}
          disabled={selectedAnswer === null}
          variant="contained"
          style={{
            position: "relative",
            marginTop: `50px`,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Next
        </Button>
      </Grid>
    </Grid>

  );
};

const Result = ({ questions, userAnswers }) => {
  const score = questions.reduce(
    (score, question, index) =>
      question.correctAnswer === userAnswers[index] ? score + 1 : score,
    0
  );

  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Grid item xs={4} md={4} lg={4} xl={4}>
        <img src={leaves} alt="Leaves" style={{ width: "100%"}}/>
      </Grid>
      <Grid item xs={8} md={8} lg={8} xl={8}>
        <Typography variant="h6" fontWeight="bold" marginBottom="20px">
          Your score is {score} out of {questions.length}
        </Typography>
        <Button
          onClick={() => window.location.reload(false)}
          variant="contained"
          style={{
            position: "relative",
            marginTop: "10px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Try Again
        </Button>
      </Grid>
    </Grid>
  );
};

const Quiz = () => {
  const questions = [
    {
      type: "MultipleChoice",
      question:
        "Which of the following activities produces the most carbon emissions?",
      answers: [
        "Driving a car",
        "Eating meat",
        "Watching TV",
        "Planting a tree",
      ],
      correctAnswer: 0,
    },
    {
      type: "TrueFalse",
      question:
        "Carbon emissions can be significantly reduced by recycling and reducing waste?",
      correctAnswer: true,
    },
    {
      type: "MultipleChoice",
      question:
        "Which of these is a way that you can personally help to reduce carbon emissions?",
      answers: [
        "Fly in airplanes more frequently",
        "Increase consumption of processed foods",
        "Reduce, Reuse, Recycle",
        "All of the above",
      ],
      correctAnswer: 2,
    },
    {
      type: "TrueFalse",
      question:
        "Using public transportation instead of a personal car can help to reduce carbon emissions?",
      correctAnswer: true,
    },
    {
      type: "MultipleChoice",
      question: "What is the effect of planting trees on carbon emissions?",
      answers: [
        "Increases carbon emissions",
        "No effect on carbon emissions",
        "Decreases carbon emissions",
        "Trees are not related to carbon emissions",
      ],
      correctAnswer: 2,
    },
    {
      type: "TrueFalse",
      question:
        "Eating less meat and more plant-based foods can reduce carbon emissions?",
      correctAnswer: true,
    },
    {
      type: "MultipleChoice",
      question: "Which form of energy contributes least to carbon emissions?",
      answers: ["Coal", "Natural Gas", "Solar", "Petroleum"],
      correctAnswer: 2,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (answer) => {
    const nextQuestion = currentQuestion + 1;
    setUserAnswers([...userAnswers, answer]);
    setCurrentQuestion(nextQuestion);
  };

  const handleTryAgain = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return currentQuestion < questions.length ? (
    <Question question={questions[currentQuestion]} onAnswer={handleAnswer} />
  ) : (
    <Result
      questions={questions}
      userAnswers={userAnswers}
      onTryAgain={handleTryAgain}
    />
  );
};

//     <div>
//       <h2>{question.question}</h2>
//       {
//         question.type === 'MultipleChoice' ?
//           question.answers.map((answer, index) =>
//             <button key={index} onClick={handleAnswer(index)}>{answer}</button>
//           ) :
//           <div>
//             <button onClick={handleAnswer(true)} className="mb-3">True</button>
//             <button onClick={handleAnswer(false)}>False</button>
//           </div>
//       }
//     </div>
//   );
// };

// const Result = ({ questions, userAnswers }) => {
//   const score = questions.reduce((score, question, index) =>
//     question.correctAnswer === userAnswers[index] ? score + 1 : score,
//     0
//   );

//   return (
//     <div>
//       <h2>Your score is {score} out of {questions.length}</h2>
//       <button onClick={() => window.location.reload(false)}>Try Again</button>
//     </div>
//   );
// };

// const Quiz = () => {
//   const questions = [
//     {
//         type: 'MultipleChoice',
//         question: 'Which of the following activities produces the most carbon emissions?',
//         answers: ['Driving a car', 'Eating meat', 'Watching TV', 'Planting a tree'],
//         correctAnswer: 0
//       },
//       {
//         type: 'TrueFalse',
//         question: 'Carbon emissions can be significantly reduced by recycling and reducing waste?',
//         correctAnswer: true
//       },
//       {
//         type: 'MultipleChoice',
//         question: 'Which of these is a way that you can personally help to reduce carbon emissions?',
//         answers: ['Fly in airplanes more frequently', 'Increase consumption of processed foods', 'Reduce, Reuse, Recycle', 'All of the above'],
//         correctAnswer: 2
//       },
//       {
//         type: 'TrueFalse',
//         question: 'Using public transportation instead of a personal car can help to reduce carbon emissions?',
//         correctAnswer: true
//       },
//       {
//         type: 'MultipleChoice',
//         question: 'What is the effect of planting trees on carbon emissions?',
//         answers: ['Increases carbon emissions', 'No effect on carbon emissions', 'Decreases carbon emissions', 'Trees are not related to carbon emissions'],
//         correctAnswer: 2
//       },
//       {
//         type: 'TrueFalse',
//         question: 'Eating less meat and more plant-based foods can reduce carbon emissions?',
//         correctAnswer: true
//       },
//       {
//         type: 'MultipleChoice',
//         question: 'Which form of energy contributes least to carbon emissions?',
//         answers: ['Coal', 'Natural Gas', 'Solar', 'Petroleum'],
//         correctAnswer: 2
//       }
//   ];

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [userAnswers, setUserAnswers] = useState([]);

//   const handleAnswer = answer => {
//     const nextQuestion = currentQuestion + 1;
//     setUserAnswers([...userAnswers, answer]);
//     setCurrentQuestion(nextQuestion);
//   };

//   return (
//     currentQuestion < questions.length ?
//       <Question question={questions[currentQuestion]} onAnswer={handleAnswer} /> :
//       <Result questions={questions} userAnswers={userAnswers} />
//   );
// };

export default Quiz;
