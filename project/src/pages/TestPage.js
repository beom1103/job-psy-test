import React, { useState, useEffect } from 'react';
import QuestionList from '../components/QuestionList';
import Pagination from '../components/Pagination';
import axios from 'axios';


const TestPage = () => {
  const [question, setQusetion] = useState([]);
  const key = '5fcc4366025782ac126088744b9620ea';
  
  // 현재 페이지
  const [curPage, setCurPage] = useState(1);

  // 페이지 당 문항수
  const [perPage, setPerPage] = useState(5);


  // 다음, 이전 이벤트 조작 
  const next = () => {
  
    setCurPage(curPage+1)
  };
  const prev = () => {
    
    setCurPage(curPage-1)
  };
  const paginate = (pageNumber) => setCurPage(pageNumber);

  //문항 수 체크

  // 해당 페이지의 마지막 index 번호
  const last = curPage * perPage;  

  // 해당 페이지의 첫번째 index 번호
  const first = last - perPage;

  // 각 페이지에서 보여질 배열
  const cur = question.slice(first, last);

  // API 요청
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
  console.log("렌더링이 되었습니다.")

  return (
    <div>
      <div>
        <h1>검사진행</h1>
        {/*여기에 진행 막대기 넣어야함.*/}
      </div>
      <QuestionList question={cur}  />
      <Pagination 
        perPage={perPage} 
        total={question.length} 
        paginate={paginate}
        next={next}
        prev={prev}
        curPage={curPage} />
      
      <button>제출
      </button>

    </div>
  )
}

export default TestPage
