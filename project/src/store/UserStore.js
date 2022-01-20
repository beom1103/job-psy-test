import React, { useState, createContext } from "react";

// context api로 전역적으로 prop 전달
export const UserContext = createContext();

// 전달 초기 값
const UserStore = (props) => {
  const [post, setPost] = useState({
    apikey: process.env.REACT_APP_KEY,
    qestrnSeq: "6",
    trgetSe: "100029",
    name: "",
    grade: "",
    gender: "",
    startDtm: new Date().getTime(),
    answers: "",
  });

  return (
    <UserContext.Provider value={[post, setPost]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;
