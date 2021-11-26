import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from "../components/UserStore";
import axios from 'axios';


const Complete = () => {
  const [post, setPost] = useContext(UserContext);
  
  const [resultData, setResultData] = useState({});
  // const [seq, setSeq] = useState("");

  const ax = axios.create({
    headers: {"Content-Type": "application/json"},
  });

  const wonScore = resultData['wonScore'];

  // const [rate, setRate] = {
    
  // }

  const params = resultData;
  useEffect(() => {
    async function loadData() {
      try {
        const res = await ax.post(`http://www.career.go.kr/inspct/openapi/test/report?apikey=${post.apikey}`, post);
        const seq = res.data.RESULT['url'].slice(-11);         
        const ress = await axios.get(`https://www.career.go.kr/inspct/api/psycho/report?seq=${seq}`);
        setResultData(ress.data.result)
      } catch (e) {
        if(resultData === {})console.log("error")
      }
    }

    loadData(); 
    console.log(resultData)
    
  }, [])

  return (
    <div className="complete">
      <h2><span>{post['name']}</span>님 검사가 완료되었습니다.</h2>
      <h3>검사 결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고,
      중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</h3>
      
      <h4>직업생활과 관련하여 {post['name']}님은 {1}(와)과 {1}(을)를 가장 중요하게 생각합니다.반면에 {1, 1}은 상대적으로 덜 중요하게 생각합니다.</h4>

      <Link to="/result"><button className="button is-info">결과보기</button></Link>
    </div>
  )
}

export default Complete
