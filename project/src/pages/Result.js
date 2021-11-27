import React, {useState, useContext, useEffect, PureComponent} from 'react'
import { UserContext } from "../components/UserStore";
import { Link, useLocation } from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from 'recharts';
import { major, job } from '../store';
import axios from 'axios';


const Result = () => {
  const [post, setPost] = useContext(UserContext);
  const location = useLocation()
  const { rate } = location.state
  const [majors, setMajors] = useState(null);
  const [jobs, setJobs] = useState(null);
  
  useEffect(() => {
    async function fetchJB() {
      try {
        const jobRes = await axios.get(`https://inspct.career.go.kr/inspct/api/psycho/value/jobs?no1=${rate[rate.length-1].no}&no2=${rate[rate.length-2].no}`)

        await setJobs(jobRes['data'])

        const majRes = await axios.get(`https://inspct.career.go.kr/inspct/api/psycho/value/majors?no1=${rate[rate.length-1].no}&no2=${rate[rate.length-2].no}`)


        setMajors(majRes['data']);


        console.log(jobs, majors)
      }
      catch (e) {
        console.log("get Error!!!")
      }
      
    }
    fetchJB();


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
      <section className="hero is-info is-small">
        <div className="hero-body">
          <p className="title">
          | 직업가치관검사 결과표 |
          </p>
          <p className="subtitle">
            for {post.name} 님
          </p>
        </div>
      </section>
      

      <table className="table">
        <thead className="thead-light">
          <tr className="table-success">
            <th scope="col">이름</th>
            <th scope="col">성별</th>
            <th scope="col">검사일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{post.name}</th>
            <td>{post.gender === "100323"? "남":"여"}</td>
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



      <div>
        <h2>2. 나의 가치관과 관련이 높은 직업</h2>
        <p> 내가 중요하게 생각하는 {rate[rate.length-1].name}(와)과 {rate[rate.length-2].name}을(를)만족시킬 수 있는 직업은 다음과 같습니다.</p>
      </div>

      <div>
        <h4>종사자 평균 학력별</h4>
        <table className="table">
          <thead className="thead-light">
            <tr className="is-selected">
              <th> 분야</th>
              <td>직업명</td>
            </tr>
          </thead>
          
          <tbody>
            {job.map(
                (jobLevel, idx) => {
                  const jobData = (jobs || []).filter((i) => {
                    return i?.[2] === idx+1;
                  });
                  return (
                    <tr>
                      <th
                      style={
                        jobData.length <= 0
                          ? { display: "none" }
                          : {}
                      }
                      >{jobLevel}</th>


                      <td>
                        {jobData.map((level) => {
                          const [key, value] = level;
                          return (
                            <a
                              className="mr-2" 
                              href={`https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${key}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {value}
                            </a>
                          );
                        })}
                      </td>
                    </tr>  
                  )}
              )}
          </tbody>
        </table>

      </div>

      <div>
        <h4>종사자 평균 전공별</h4>
        <table className="table">
          <thead className="thead-light">
            <tr className="is-selected">
              <th> 분야</th>
              <td>직업명</td>
            </tr>
          </thead>
          
          <tbody>
            {major.map(
                (majorLevel, idx) => {
                  const majData = (majors || []).filter((i) => {
                    return i?.[2] === idx+1;
                  });
                  return (
                    <tr>
                      <th
                        style={
                          majData.length <= 0
                            ? { display: "none" }
                            : {}
                        }
                      >{majorLevel}</th>

                      <td>
                        {majData.map((level) => {
                          const [key, value] = level;
                          return (
                            <a
                              className="mr-2" 
                              href={`https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${key}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {value}
                            </a>
                          );
                        })}
                      </td>
                    </tr>  
                  )}
              )}
          </tbody>
        </table>
      </div>













      <Link to="/"><button className="button is-link is-focused is-large" onClick={sessionStorage.clear()}>다시 검사하기</button></Link>

    </div>
  )
}


export default Result

