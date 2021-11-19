import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";


function User() {

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  // 이름을 입력받는 state
  const [userName, setUserName] = useState("");

  // 오류메세지
  const [nameMessage, setNameMessage] = useState('')
  const [checkMessage, setCheckMessage] = useState('성별을 체크해주세요.')

  useEffect(() => {
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
  },[userName])

  const onChangeName = useCallback((e) => {
    setUserName(e.target.value)
  }, [])
  
  
  const onChangeChecked = () => {
    setIsChecked(true)
    setCheckMessage('')
    
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
            autoComplete="off"
            onChange={onChangeName} />
    
          <p>{nameMessage}</p>
        </div>
        <br />

        <div className="checkBox" >
          <span>
            <label for="gender">성별 : </label>
            <input type="radio" value="M" name="gender" id="male" onClick={onChangeChecked} />남
            <input type="radio" value="F" name="gender" id="female" onClick={onChangeChecked} />여
          </ span>  &nbsp;
          <span>{checkMessage}</span>
        </div>

        <br />

        <Link to="/testEx">
          <button
            type="submit"
            disabled={!(isName && isChecked)}
          >검사시작
          </button>
        </Link>
        
      </form>
    </div>

  )
}

export default User;