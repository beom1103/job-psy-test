import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";



const TestPageEx = () => {

  const [isChecked, setIsChecked] = useState(false);
  
  const onChangeChecked = (e) => {
  setIsChecked(true)
}
  const now = 0;
  return (
    // 진행바 구현해야 함.

    <div>
      <h1>검사예시</h1>
      {/* <span><ProgressBar now={now} label={`${now}% completed`}/></span> */}
      <Progress
        percent={0}
        
        theme={{
          error: {
            trailColor: 'pink',
            color: 'red'
          },
          default: {
            trailColor: 'lightblue',
            color: 'blue'
          },
          active: {
            trailColor: 'lightblue',
            color: '#fbc630'
          },
          success: {
            trailColor: 'lime',
            color: 'green'
          }
    
        }}
        />
        <div>
          직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 체크하세요.
          <br />
          가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해 보세요.
        </div>
        
        <h4>두개의 가치중 자신에게 더 중요한 가치를 선택하세요.</h4>
        <form onChange={onChangeChecked}>
          <input type="radio" value="1" name="answer" /> 능력발휘
          <input type="radio" value="2" name="answer" /> 자율성
        </form>
      
      <Link to="/test" >
        <button
            type="submit"
            disabled={!(isChecked)}
          >검사시작
          </button>
      </Link>
    </div>
  )
}

export default TestPageEx
