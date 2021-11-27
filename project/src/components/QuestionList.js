import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../components/UserStore";


const QuestionList = ({question, countHandler}) => {
  
  const [post] = useContext(UserContext);

  // check값을 닮을 state
  const [inputs, setInputs] = useState([]);


  const objHandler =((e) => {
    const {name, value} = e.target;
    setInputs((i) => {
      const newInputs = {...i};
      newInputs[name] = value 
      return newInputs; 
    })
    sessionStorage.setItem(name, value)
    console.log(post)
  });
  
  const perBar = Object.keys(inputs).length
  // 객체를 배열로 변환해서 post에 알맞은 형태로 변환해주는 함수
  
  useEffect(() => {
    const answerList = [];    
    for (let i of Object.entries(inputs)) {
      answerList.push(i.join("="));
    } 
      post.answers = answerList.join(" ");
      countHandler(perBar) //문항수 체크 후 부모 TestPage로 값을 넘겨줌.      
  }, [inputs])

  return (
    <div>
        {question.map((question) => {
          return (
            <div className="container-lg" key={question['qitemNo']}>
              <h5>
                {question['qitemNo']}번 : <span> {question['question']}</span>
              </h5>
              <form className="qsBox" onChange={objHandler}>
                <div className="op1">
                <span>{question['answer01']} :  </span>
                  <input
                    id={question['answerScore01']}
                    type="radio"
                    name={"B"+question['qitemNo']}
                    value={question['answerScore01']}
                    readOnly 
                    checked={sessionStorage.getItem("B"+question['qitemNo']) === question['answerScore01']}
                    />
                  <label
                    htmlFor={question['answerScore01']}> {question['answer03']}</label>
                  
                </div>

                <div className="op2">
                <span>{question['answer02']} :  </span>
                  <input
                    id={question['answerScore02']}
                    type="radio"
                    name={"B"+question['qitemNo']}
                    readOnly 
                    value={question['answerScore02']}
                    checked={sessionStorage.getItem("B"+question['qitemNo']) === question['answerScore02']}
                    />
                  <label
                    htmlFor={question['answerScore02']}
                    >{question['answer04']}</label>
                 
                </div>
              </form>
            </div>
          )
        })}
        

    </div>
  )
}

export default QuestionList
