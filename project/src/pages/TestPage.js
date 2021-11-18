import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react/cjs/react.development';



const TestPage = () => {



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
      <div>
        <h1>검사진행</h1>
        {/*여기에 진행 막대기 넣어야함.*/}
      </div>
      
      <div>
        <h3></h3>
        <form action="">
          <input type="radio" name="answer" />
          <input type="radio" name="answer" />

        </form>

      </div>
      
    </div>
  )
}

export default TestPage
