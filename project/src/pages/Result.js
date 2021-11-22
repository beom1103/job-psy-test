import React, {useContext, useEffect} from 'react'
import { UserContext } from "../components/UserStore";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Result = () => {

  const [post, setPost] = useContext(UserContext);
  const key = '5fcc4366025782ac126088744b9620ea';

  const ax = axios.create({
    baseURL: `https://www.career.go.kr/inspct/openapi/test/report?apikey=${key}&q=6`,
    headers: {"Content-Type": "application/json"},
  });

  useEffect(() => {
    async function get() {
      try {
        const res = await ax.post(`result`, post);
        return res.data.RESULT;
      } catch (e) {
        console.log('Error!')
      }
    }
    get();
  }, [])


  return (
    <div>
      <h1>직업가치관검사 결과표</h1>



      <Link to="/"><button onClick={sessionStorage.clear()}>다시 검사하기</button></Link>
    </div>
  )
}

export default Result
