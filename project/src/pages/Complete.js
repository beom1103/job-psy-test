import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from "../components/UserStore";


const Complete = () => {
  const [post, setPost] = useContext(UserContext);
  
  // useEffect(() => {
  //   setPost(JSON.stringify(post))
  // }, [])


  return (
    <div className="complete">
      <h2><span>{post['name']}</span>님 검사가 완료되었습니다.</h2>
      <h3>검사 결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고,
      중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</h3>
      
      <div>

      
      </div>

      <Link to="/result"><button className="button is-info">결과보기</button></Link>
    </div>
  )
}

export default Complete
