import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../components/UserStore";


const QuestionList = ({question}) => {
  
  const [post,setPost] = useContext(UserContext);
  const [inputs, setInputs] = useState([]);
  
  
  const objHandler =((e) => {
    const {name, value} = e.target;
    
    setInputs((i) => {
      const newInputs = {...i};
      newInputs[name] = value
      return newInputs;
    })

  });

  useEffect(() => {
    const answerList = [];
    for (let i of Object.entries(inputs)) {
      answerList.push(i.join("="));
    }
    
      post.answers = answerList.join(" ");
      console.log(post)
      
  }, [inputs, post])

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
                  

                  />
                <span name="1">{question['answer01']} : </span> 
                <label htmlFor="1">{question['answer03']}</label>

                <br />

                <input 
                  type="radio" 
                  name={"B"+question['qitemNo']} 
                  value={question['answerScore02']} 
                  
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
