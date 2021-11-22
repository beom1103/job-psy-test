import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../components/UserStore";


const QuestionList = ({question, countHandler}) => {
  
  const [post,setPost] = useContext(UserContext);

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
  }, [inputs, post, perBar])


  return (
    <div>
        {question.map((question) => {
          return (
            <div key={question['qitemNo']}>
              <h3>
                {question['qitemNo']}번 {question['question']}
              </h3>
              <form onChange={objHandler}>
                <input 
                  type="radio" 
                  name={"B"+question['qitemNo']} 
                  value={question['answerScore01']}
                  checked={sessionStorage.getItem("B"+question['qitemNo']) === question['answerScore01']}
                  />
                <span name="1">{question['answer01']} : </span> 
                <label htmlFor="1">{question['answer03']}</label>

                <br />

                <input 
                  type="radio" 
                  name={"B"+question['qitemNo']} 
                  value={question['answerScore02']}
                  checked={sessionStorage.getItem("B"+question['qitemNo']) === question['answerScore02']}
                  />
                <span name="2">{question['answer02']} : </span>
                <label htmlFor="2">{question['answer04']}</label>
              </form>
            </div>
          )
        })}
        

    </div>
  )
}

export default QuestionList
