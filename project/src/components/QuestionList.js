import React, {useState, useEffect} from 'react'
import axios from 'axios';


const QuestionList = () => {
  const [question, setQusetion] = useState([]);
  const key = '5fcc4366025782ac126088744b9620ea';
  



  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await axios.get(`https://www.career.go.kr/inspct/openapi/test/questions?apikey=${key}&q=6`)
        setQusetion(res.data["RESULT"]);
        console.log(question)
      } catch (e) {
        console.log('Error!')
      }
    }

    fetchQuestions();

  }, [])
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
