import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from "../components/UserStore";
import axios from 'axios';
import { valueNames } from '../store/index';

const Complete = () => {
  const [post, setPost] = useContext(UserContext);
  const history = useHistory();
  const [resultData, setResultData] = useState({});
  const [rate, setRate] = useState([]);

  const ax = axios.create({
    headers: {"Content-Type": "application/json"},
  });


  

  // const [rate, setRate] = {
    
  // }
  const wonScore = resultData['wonScore'];

  const params = resultData;
  useEffect(() => {
    async function loadData() {
      try {
        const res = await ax.post(`http://www.career.go.kr/inspct/openapi/test/report?apikey=${post.apikey}`, post);
        const seq = res.data.RESULT['url'].slice(-11);         
        const ress = await axios.get(`https://www.career.go.kr/inspct/api/psycho/report?seq=${seq}`);
        setResultData(ress.data.result)
        
        const score = ress.data.result.wonScore.split(" ").filter(sc=>sc).map(i => {
          i.split("=");
          return {"no": i[0], "name":valueNames[i[0]], "count": i[2]}
        })

        setRate([...score].sort((a, b) => a.count - b.count))
        
      } catch (e) {
        if(resultData.length === 0)console.log("error")
      }
    }
    loadData(); 


    console.log(rate)

      
  }, [])

  // const [no1, no2] = [rate[rate.length-1], rate[rate.length-2]]
  
  function onClick() { 

        history.push({
        pathname: "/result",
        state: {rate}
        })
      }

  return (
    <div className="complete">
      <h2><span>{post['name']}</span>님 검사가 완료되었습니다.</h2>
      <h3>검사 결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고,
      중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</h3>
      
      {rate.length === 0? "" : 
        <h4>직업생활과 관련하여 {post['name']}님은 {rate[rate.length-1].name}(와)과 {rate[rate.length-2].name}(을)를 가장 중요하게 생각합니다.반면에 {rate[0].name}와 {rate[1].name}은(는) 상대적으로 덜 중요하게 생각합니다.</h4>
      }
      
      <button className="button is-info" onClick={onClick}>결과보기</button>
    </div>
  )
}

export default Complete
