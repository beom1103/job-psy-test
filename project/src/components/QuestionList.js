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
        {question.map((question)=> {
          return (
            <div>
              <p>
                {question['question']}
              </p>
              <form>
                <input type="radio" name="answer" />
                <input type="radio" name="answer" />
              </form>
            </div>
          )
        })}
        

    </div>
  )
}

export default QuestionList
