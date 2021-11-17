import React, { useState, useCallback } from "react";

function User({ onInsert }) {

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  // 이름을 입력받는 state
  const [userName, setUserName] = useState("");

  // 오류메세지
  const [nameMessage, setNameMessage] = useState('')
  const [checkMessage, setCheckMessage] = useState('성별을 체크해주세요.')


  const onChangeName = useCallback((e) => {
    setUserName(e.target.value)
    if (userName.length === 0) {
      setNameMessage('')
      setIsName(false)
    } else if (userName.length < 2 || userName.length > 5) {
      setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
      setIsName(false)
    } else {
      setNameMessage('올바른 이름 형식입니다')
      setIsName(true)
    }
  }, [userName])

  
  const onChangeChecked = () => {
    setIsChecked(true)
    if (checkMessage === true) {
      setCheckMessage("")
    }
  }

  return (
    <div>
      <h1>
        직업가치관검사
      </h1>

      <form>
        <div>
          <label for="이름">이름 : </label>
          <input 
            type="text"
            value = {userName} 
            name="이름" 
            placeholder="이름을 입력하세요." 
            onChange={onChangeName} />
    
          <p>{nameMessage}</p>
        </div>
        <br />

        <div className="checkBox" onChange={onChangeChecked}>
          <span>
            <label for="gender">성별 : </label>
            <input type="radio" value="M" name="gender" id="male" />남
            <input type="radio" value="F" name="gender" id="female" />여
          </ span>  &nbsp;
          <span>{checkMessage}</span>
        </div>

        <br />
        {/* 재사용 컴포넌트로 만들어야함. */}
        <button 
          type="submit"
          disabled={!(isName && isChecked)}
        >검사시작</button>
        
      </form>
    </div>

  )
}

export default User;