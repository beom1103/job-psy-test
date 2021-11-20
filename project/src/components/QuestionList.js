import React, { useContext, useCallback } from "react";
import { UserContext } from "../components/UserStore";


const QuestionList = ({question}) => {

  
  function saveData(e) {
    const {name, value} = e.target
    const storage = localStorage.setItem(name, value);
  
  }
  
  const [post, setPost] = useContext(UserContext);
  const objHandler = useCallback((e) => {
    const {name, value} = e.target;
    setPost({
      ...post,
      [name]: value,
      })
      console.log(post)
  },[post])

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
                  onClick={saveData}
                  

                  />
                <span name="1">{question['answer01']} : </span> 
                <label htmlFor="1">{question['answer03']}</label>

                <br />

                <input 
                  type="radio" 
                  name={"B"+question['qitemNo']} 
                  value={question['answerScore02']} 
                  onClick={saveData}
                  
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
