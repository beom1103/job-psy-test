import React, { useState, createContext} from 'react'

// context api로 전역적으로 prop 전달
export const UserContext = React.createContext();

// 전달 초기 값
const UserStore = (props) => {
  const [post, setPost] = useState({
    "apikey": "5fcc4366025782ac126088744b9620ea",
    "qestrnSeq": "6",
    "trgetSe": "100029",
    "name" : "",
    "gender": "",
    "startDtm": new Date().getFullYear,
    "answers" : ""
  })

  return (
    <UserContext.Provider value={[post, setPost]}>{props.children}</UserContext.Provider>
  )
}

export default UserStore;