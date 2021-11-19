import React from 'react'


const QuestionList = ({question}) => {
  
  return (
    <div>
        {question.map((question) => {
          return (
            <div key={question['qitemNo']}>
              <h3>
                {question['qitemNo']}번 {question['question']}
              </h3>
              <form>
                <input type="radio" name="answer" value={question['answerScore01']}/>
                <span name="1">{question['answer01']} : </span> 
                <label htmlFor="1">{question['answer03']}</label>
                <br />
                <input type="radio" name="answer" value={question['answerScore02']} />
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
