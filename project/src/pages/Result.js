import React, {useContext, useEffect, useState} from 'react'
import { UserContext } from "../components/UserStore";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spiner from '../components/Spiner';
import { Suspense } from 'react';

const Result = ({resultData}) => {
  const [post, setPost] = useContext(UserContext);
  
  // const date = ress['data'].result['endDtm'].slice(0, 10)

  //post 초기화 해야함
  return (
    <div className="result">
      <h1>| 직업가치관검사 결과표 |</h1>

      <div>직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과 신념입니다. 따라서 여러분의 직업생활과 관련하여 포기하지 않는 무게중심의 역할을 한다고 볼 수 있습니다. 직업가치관검사는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려줍니다. 또한 본인이 가장 중요하게 생각하는 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</div>

      <table className="table">
        <thead className="thead-light">
          <tr className="is-selected">
            <th scope="col">이름</th>
            <th scope="col">성별</th>
            <th scope="col">검사일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{post.name}</th>
            <td>{post.gender === "100323"? "남":"여"}</td>
            <td>{resultData['endDtm']? resultData['endDtm'].slice(0, 10) : ""}</td>
          </tr>
        </tbody>
      </table>


      <div>
        <h2>1. 직업가치관 결과</h2>

      </div>


      <div><h2>2. 나의 가치관과 관련이 높은 직업</h2></div>

      <Link to="/"><button className="button is-link is-focused is-large" onClick={sessionStorage.clear()}>다시 검사하기</button></Link>

    </div>
  )
}


export default Result

