import React from "react";

function User({ onInsert }) {
  return (
    <div>
      <h1>
        직업가치관검사
      </h1>

      <form>
        이름 : <input type="text" placeholder="이름을 입력하세요." />
        <br />
        <button>검사시작</button>
        
      </form>
    </div>

  )
}

export default User;