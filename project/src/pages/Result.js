import React, {useContext, useEffect, PureComponent} from 'react'
import { UserContext } from "../components/UserStore";
import { Link, useLocation } from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from 'recharts';
import { blue } from '@mui/material/colors';


const Result = () => {
  const [post, setPost] = useContext(UserContext);
  const location = useLocation()
  const { rate } = location.state
  
  useEffect(() => {
    console.log(location)
    console.log(rate)
  }, [location])
  // const date = ress['data'].result['endDtm'].slice(0, 8)

  const today = new Date()
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2)
  const dateString = year + '-' + month  + '-' + day;
  //post 초기화 해야함
  const data = [
    {
      "subject": rate[0].name,
      "A": parseInt(rate[0].count),
      "fullMark": 7
    },
    {
      "subject":  rate[1].name,
      "A": parseInt(rate[1].count),
      "fullMark": 7
    },
    {
      "subject":  rate[2].name,
      "A": parseInt(rate[2].count),
      "fullMark": 7
    },
    {
      "subject": rate[3].name,
      "A": parseInt(rate[3].count),
      "fullMark": 7
    },
    {
      "subject": rate[4].name,
      "A": parseInt(rate[4].count),
      "fullMark": 7
    },
    {
      "subject": rate[5].name,
      "A": parseInt(rate[5].count),
      "fullMark": 7
    },
    {
      "subject": rate[6].name,
      "A": parseInt(rate[6].count),
      "fullMark": 7
    },
    {
      "subject": rate[7].name,
      "A": parseInt(rate[7].count),
      "fullMark": 7
    },
    

  ]
  
                              
  return (
    <div className="result">
      <h1>| 직업가치관검사 결과표 |</h1>

      

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
            <td>{post.gender === "10323"? "남":"여"}</td>
            <td>{dateString}</td>
          </tr>
        </tbody>
      </table>
      <div>직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과 신념입니다. 따라서 여러분의 직업생활과 관련하여 포기하지 않는 무게중심의 역할을 한다고 볼 수 있습니다. 직업가치관검사는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려줍니다. 또한 본인이 가장 중요하게 생각하는 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</div>

        <h2>1. 직업가치관 결과</h2>
        
        
        <RadarChart className="aaaa" outerRadius={100} width={730} height={300} data={data} >
          <PolarGrid  />
          <PolarAngleAxis dataKey="subject" stroke="#000000"/>
          <PolarRadiusAxis angle={30} domain={[0, 8]} stroke="#000000"/>
          <Radar name={post.name} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Legend height={0}/>
        </RadarChart>



      <div><h2>2. 나의 가치관과 관련이 높은 직업</h2></div>

      <Link to="/"><button className="button is-link is-focused is-large" onClick={sessionStorage.clear()}>다시 검사하기</button></Link>

    </div>
  )
}


export default Result

