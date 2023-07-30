import React from "react";

const QuizResult =(props)=>{
    return(
        <>
        <div className="score-section">
            <h2>Completed!</h2>
            <h2>Total Score {props.score}/20</h2>
            <h2>Your Correct question {props.correctAnswer} out of 4</h2>
            <button onClick={props.handlePlayAgain}>Play Again</button>
        </div>
        </>
    )
}

export default QuizResult;