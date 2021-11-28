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
  const pattern3 = /\s/;  // 공백W
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
        setNameMessage("")
        setIsName(true)
      }
   },[userName, post])



  // 오류메세지
  const [nameMessage, setNameMessage] = useState('')
  const [checkMessage, setCheckMessage] = useState('성별을 체크해주세요.')

 
  //input값이 변할때마다 화면에 이름을 나타내는 함수
  const onChangeName = useCallback((e) => {
    setUserName(e.target.value)
  }, [])
  
  // 성별을 체크했는지 확인하는 함수
  const onChangeChecked = () => {
    setIsChecked(true)
    setCheckMessage('')
    console.log(post)

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
    <div className="User">
      <h1>
         | 직업가치관검사 |
      </h1>
      <h3>당신의 가치관과 적합한 직업은 무엇일까요?</h3>
      <form className="inputBox" onChange={objHandler}>
        <div>
          <label htmlFor={userName}>이름</label> 
          <input 
          name="name"
          className="input is-info is-rounded is-focused" 
          type="text" 
          placeholder="이름을 입력하세요."
          autoComplete="off"
          value={userName}
          onChange={onChangeName}
          /> 
          <br />
          <p>{nameMessage}</p>
        </div>
          
        <div className="checkBox" >

          <span className="mf">
            <div>성별</div>
                <span className="m">
                  <input type="radio" value="100323" name="gender" id="male" onClick={onChangeChecked} />
                  <label htmlFor="male">남자</label>
                </span>
                
                <span className="f">
                  <input type="radio" value="100324" name="gender" id="female" onClick={onChangeChecked} />
                  <label htmlFor="female">여자</label>
                </span>
          </span>
         
          <br />
          <p>{checkMessage}</p>
          
        </div>
            
        


        <br />

        <Link to="/testEx">
        <button 
          className="button is-link is-rounded is-large"
          type="submit"
          disabled={!(isName && isChecked)}>
          검사시작
        </button>
        </Link>
      </form>
    </div>

  )
}

export default React.memo(User);