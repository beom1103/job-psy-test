import React, { useState, useCallback, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../components/UserStore";


function User() {
  const [post, setPost] = useContext(UserContext);

  // 이름을 입력받는 state
  const [userName, setUserName] = useState("");

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const pattern1 = /[a-zA-Z]/; //영어 
  const pattern2 =  /[0-9]/;  //숫자
  const pattern3 = /\s/;  // 공백
  const pattern4 = /[~!@#$%^&*()_+|<>?:{}]/; //특수문자

  useEffect(() => {
     if (userName.length === 0) {
       setNameMessage('')
       setIsName(false)
      } else if (pattern1.test(userName)) {
        setNameMessage("한글로 입력해 주세요.")
        setIsName(false)
      } else if (pattern2.test(userName) || pattern3.test(userName) || pattern4.test(userName)){
        setNameMessage('이름에 특수문자(숫자) 및 공백을 포함할 수 없습니다.')
        setIsName(false)
      } else if (userName.length < 2 || userName.length > 5) {
        setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
        setIsName(false)
      } else {
        setNameMessage('올바른 이름 형식입니다')
        setIsName(true)
      }
   },[userName, post])



  // 오류메세지
  const [nameMessage, setNameMessage] = useState('')
  const [checkMessage, setCheckMessage] = useState('성별을 체크해주세요.')

 
  const onChangeName = useCallback((e) => {
    setUserName(e.target.value)
  }, [])
  
  
  const onChangeChecked = () => {
    setIsChecked(true)
    setCheckMessage('')

  }
  // post 객체에 데이터를 추가하는 함수
  const objHandler = useCallback((e) => {
    const {name, value} = e.target;
    setPost({
      ...post,
      [name]: value,
      })
      console.log(post)
  },[post])
  
  return (
    <div>
      <h1>
        직업가치관검사
      </h1>

      <form onChange={objHandler}>
        <div>
          <label htmlFor="이름">이름 : </label>
          <input 
            type="text"
            value = {userName} 
            name="name" 
            placeholder="이름을 입력하세요." 
            autoComplete="off"
            onChange={onChangeName} />
    
          <p>{nameMessage}</p>
        </div>
        <br />

        <div className="checkBox" >
          <span>
            <label htmlFor="gender">성별 : </label>
            <input type="radio" value="100323" name="gender" id="male" onClick={onChangeChecked} />남
            <input type="radio" value="100324" name="gender" id="female" onClick={onChangeChecked} />여
          </ span>  &nbsp;
          <span>{checkMessage}</span>
        </div>

        <br />

        <Link to="/testEx" post={post} objHandler={objHandler}>
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

export default React.memo(User);