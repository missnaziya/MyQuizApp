import React, {useState} from "react";
import './MyQuizApp.css'

const MyQuizApp = () => {
  var Questionbank = [
    {
      Question: "What is the capital of India?",
      Answers: [
        { Answer: "Mumbai", isCorrect: false },
        { Answer: "Delhi", isCorrect: true },
        { Answer: "Banglore", isCorrect: false },
        { Answer: "Pune", isCorrect: false },
      ],
    },
    {
      Question: "Who is the PM of India?",
      Answers: [
        { Answer: "Modi", isCorrect: true },
        { Answer: "Amit", isCorrect: false },
        { Answer: "Kejriwal", isCorrect: false },
        { Answer: "Vekenya", isCorrect: false },
      ],
    },
    {
      Question: "2 + 3 = ?",
      Answers: [
        { Answer: "7", isCorrect: false },
        { Answer: "4", isCorrect: false },
        { Answer: "8", isCorrect: false },
        { Answer: "5", isCorrect: true },
      ],
    },
  ];

const [currentQuestion,setCurrentQuestion] =useState(0);
const [score,setScore]=useState(0);
const [showScore,setShowScore] =useState(false);


const handleAnswerResponse = (isCorrect)=>{
    if(isCorrect){
        setScore(score+1)
    }

    const nextQuestion = currentQuestion +1;
    if(nextQuestion<Questionbank.length){
        setCurrentQuestion(nextQuestion)
    }
    else{
        setShowScore(true);
    }
}

const resetQuiz = () =>{
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
}




console.log(Questionbank);


  return(

      <div id="main">

        {showScore? (
            <div>
                You have scored {score} out of {Questionbank.length}
               <>
               <button id="resetbtn" type="submit" onClick={resetQuiz}>Reset</button>
               
               </>   
                </div>
        )
        :  ( 
            <>
            <div>
                <h4>
                    <span>{currentQuestion+1}</span>/{Questionbank.length}
                </h4>

           <h3>
            {Questionbank[currentQuestion].Question}
           </h3>
            </div>

<div>
    {Questionbank[currentQuestion].Answers.map((answer)=>
    (
        <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
    ))}
</div>
            
            </>
        )
          }









  </div>
)
}

export default MyQuizApp;
