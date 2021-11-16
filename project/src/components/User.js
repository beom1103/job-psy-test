import React from "react";

function User({ onInsert }) {
  return (
    <div>
      <h1>
        직업가치관검사
      </h1>

      <form>
        <div>
          이름 : <input type="text" placeholder="이름을 입력하세요." />
        </div>
        {/* 한개만 체크할 수 있도록 구현 */}
        <div>
          <input type="checkbox" name="남자" />
          <label for="남자">남자</label>
          <input type="checkbox" name="여자" />
          <label for="여자">여자</label>
        </div>

        
        
        <button>검사시작</button>
        
      </form>
    </div>

  )
}

export default User;