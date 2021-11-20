import React, { useState } from 'react'
import { Link } from "react-router-dom";


const TestPageEx = () => {

  const [isChecked, setIsChecked] = useState(false);
  
  const onChangeChecked = (e) => {
  setIsChecked(true)
}

  return (
    // 진행바 구현해야 함.

    <div>
      <h1>검사예시</h1>


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
