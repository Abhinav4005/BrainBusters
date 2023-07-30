import React, { useState } from "react";
import "./Quiz.css";
import question from "./QuizData";
import QuizResult from "./QuizResult";

const Quiz =()=>{
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] =useState(0);
    const [correctAnswer,setCorrectAnswer] =useState(0);
    const [showResult,setShowResult] =useState(false);
    const [clicked,setClicked] =useState(false);
    const handleNextOptions=()=>{
        setClicked(false)
        const nextQuestion =currentQuestion+1;
        if(nextQuestion<question.length){
        setCurrentQuestion(nextQuestion);
        }
        else{
            setShowResult(true);
        }
    }

    const handlePlayAgain=()=>{
        setCurrentQuestion(0);
        setScore(0);
        setCorrectAnswer(0);
        setShowResult(false);
    }


    const handleAnswer=(isCorrect)=>{
        if(isCorrect){
            setScore(score+5);
            setCorrectAnswer(correctAnswer+1);
        }
        setClicked(true);
    }
    return(
        <>
        <div className="app">
            {showResult?(<QuizResult score={score} correctAnswer={correctAnswer} handlePlayAgain={handlePlayAgain}/>):(
            <>
            <div className="question-section">
                <h5>Score:{score}</h5>
                <div className="question-count">
                    <span>Question {currentQuestion+1} of {question.length}</span>
                </div>
                <div className="question-text">
                    {question[currentQuestion].questionText}
                </div>
            </div>
            <div className="answer-section">
                {question[currentQuestion].answerOptions.map((ans,i)=>{
                    return <button className={`button ${clicked && ans.isCorrect?"correct":"button"}`}
                    disabled={clicked} 
                    key={i} onClick={()=>handleAnswer(ans.isCorrect)}
                    >{ans.answerText}</button>
                })}
                <div className="actions">
                <button onClick={handlePlayAgain}>Quit</button>
                <button disabled={!clicked} onClick={handleNextOptions}>Next</button>
            </div>
            </div>
            </>
            )}
        </div>
        </>
    )
}

export default Quiz;