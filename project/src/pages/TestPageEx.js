import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";



const TestPageEx = () => {
  //검사를 체크했는지 확인하는 state
  const [isChecked, setIsChecked] = useState(false);
  //체크 되었다면 true!!
  const onChangeChecked = (e) => {
  setIsChecked(true)
}

  return (
    <div className="TestEx">
      <h1>| 검사예시 |</h1>
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

        <div className="text">
          직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 체크하세요.
          <br />
          <br />
          가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해 보세요.
        </div>
        
        <img className="tLogo" src="img/checklist.png" alt="test_logo" />
        
        <div className="container">
        <h4>연습 : 두개의 가치중 자신에게 더 중요한 가치를 선택하세요.</h4>
          <div className="qsBoxEx">
            
            <form onChange={onChangeChecked}>
              <div className="optionBox">
                  <div className="ex1">
                    <input id ="option1" type="radio" className="btn-check"  value="1" name="answer" />
                    <label className="btn btn-outline-success" htmlFor="option1">(1)능력발휘</label>
                    <span>(1)직업을 통해 자신의 능력을 발휘하는 것입니다.</span>
                </div>

              
                  <div className="ex2">
                    <input id="option2" type="radio" className="btn-check" value="2" name="answer" />
                    <label className="btn btn-outline-danger" htmlFor="option2">(2)자율성</label>
                    <span>(2)일하는 시간과 방식에 대해서 스스로 결정할 수 있는 것입니다.</span>                   
                  </div> 
                </div>
            </form>
          </div>
        </div>
      
      
      <Link to="/test" >
        
        <button 
          className="button is-link is-rounded is-large"
          type="submit"
          disabled={!(isChecked)}>
          검사시작
        </button>

      </Link>
    </div>
  )
}

export default TestPageEx
