import React, { useState, useEffect } from 'react';
import QuestionList from '../components/QuestionList';
import Pagination from '../components/Pagination';
import ProgressBar from '../components/ProgressBar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TestPage = () => {
  const [question, setQusetion] = useState([]);
  const key = '5fcc4366025782ac126088744b9620ea';

  // 진행상황 컨트롤
  const [count, setCount] = useState(0); //문항 수 체크
  const [buttonCtrl, setButtonCtrl] = useState(false);
  const countHandler = (perBar) => {
    setCount(perBar)
  }; // 문항수 체크 후 
  
 

  // 현재 페이지
  const [curPage, setCurPage] = useState(1);
  // 페이지 당 문항수
  const [perPage, setPerPage] = useState(5);
  // 다음, 이전 이벤트 조작  
  useEffect(() => {
    const i = curPage * 5
    if (count === 0) {
      setButtonCtrl(false)
    } else if( count % i === 0 ) {
      setButtonCtrl(true)
    } else {
      setButtonCtrl(false)
    } 
    console.log(i)
  }, [count, curPage])
  
  //버튼을 제어하는 state
  const next = () => {
    setCurPage(curPage+1)
  };

  const prev = () => {
    setCurPage(curPage-1)
    setButtonCtrl(true)
  };
  
   
  // const paginate = (pageNumber) => setCurPage(pageNumber);

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
      } catch (e) {
        console.log('Error!')
      }
    }
    fetchQuestions();
  }, [])

  return (
    <div className="test">
      <h1>| 검사진행 |</h1>
      <div>
        <div className="pgs">
          <p>{count}/28</p>
          <ProgressBar count={count} />
        </div>
      </div>
      <QuestionList question={cur} countHandler={countHandler} />
      <Pagination 
        next={next}
        prev={prev}
        curPage={curPage}
        buttonCtrl={buttonCtrl}
        />
      
      <Link to="/test/complete">
        <button 
          className="button is-link is-focused is-large"
          hidden={(count != 28)}>제출
        </button>
      </Link>

    </div>
  )
}

export default TestPage
