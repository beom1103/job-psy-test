# 검사 시작 시, 유저 설정 (User.js)
1. 성별 체크 시에 경고 문구가 사라지지 않는 오류 발견 후 수정. (onClick이벤트로 수정)

**`필수`**
- 이름을 입력할 수 있는 input form을 구현합니다. `**구현**` `=> User.js의 className이 input-box 라는form안에 구현` 
- 성별을 선택할 수 있는 input form을 구현합니다.`**구현**` `=> User.js의 className이 input-box 라는form안에 구현 `
- 이름 혹은 성별을 기입하지 않거나 선택하지 않을 경우 검사 시작 버튼이 비활성화 되어야 합니다. `**구현**` `=> state를 boolean 형태로 관리해 버튼에 disabled 속성 이용`

**`선택`** 
- 이름을 올바르게 입력하지 않았을 경우, 이에 대한 안내 메세지를 출력합니다. `**구현**`
- 성별을 선택하지 않았을 경우, 이에 대한 안내 메세지를 출력합니다. `**구현**`
```
<!-- ex -->
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
```


# 검사 예시 페이지 (TestEX.js)

**`필수`**

- 검사를 시작하기 전 앞으로의 진행 방식에 대해서 설명하는 페이지를 구현합니다. `**구현**` `=> TestEX.js`
- 진행 방식에 대한 검사 예제 문항이 한 문항을 화면에 표시합니다. `**구현**`  `=> TestEX.js`
- 검사 시작 버튼을 구현합니다. `**구현**` `=> TestEX.js`

**`선택`** 

- 검사 예제 문항을 진행하지 않으면 검사 시작 버튼이 비활성화 되어야 합니다. `**구현**` `=> TestEX.js // User.js의 버튼과 같은 기능으로 구현 `
- 검사 예시 페이지부터는 진행 표시줄(Progress bar)가 포함 되어야 있어야 하며, 검사 예시 페이지는 0%로 측정되어야 합니다.(진행 표시줄의 형태는 무관합니다.) `**구현**`



# 검사 시작 페이지 (Test.js)
1. axios로 get요청을 통해 모든 질문 문항 화면에 출력
2. map을 통해 그나마 깔끔한 코드 작성.


`**필수**`

- 페이지 당 5개의 문항이 보여야 합니다. `**구현**`
```
 // 해당 페이지의 마지막 index 번호
  const last = curPage * perPage;  
  // 해당 페이지의 첫번째 index 번호
  const first = last - perPage;
  // 각 페이지에서 보여질 배열
  const cur = question.slice(first, last);
  ```
- 페이지 내 문항을 모두 진행하기 전까지는 "다음" 버튼이 비활성화 상태여야 합니다. `**구현**`
```
  // 다음, 이전 이벤트 조작  
  useEffect(() => {
    //현재 페이지 X 문항 수 
    const i = curPage * 5

    // 체크된 문제의 수가 0이면 다음버튼 비활성화
    if (count === 0) {
      setButtonCtrl(false)

      현재 체크된 문제의 수를 i로 나눴을 때 나머지가 0이면 true
    } else if( count % i === 0 ) {
      setButtonCtrl(true)

      // 체크된 문제의 수가 i보다 크면 true
    } else if ( count > i){
      setButtonCtrl(true)

    }else {
      setButtonCtrl(false)
    } 
  }, [count, curPage])
  ```


**`선택`** 

- 각 문항을 선택할 때 마다 진행 표시줄과 퍼센트(%)가 갱신되어야 합니다. `**구현**`
`check값이 들어있는 객체의 길이를 통해 %갱신`

- "이전" 버튼을 클릭했을 때, 이전 페이지 문항에서 선택한 값이 유지된 상태여야 합니다. `**구현**`
`=> sessionStorage를 통해 값을 가져와서 checked 속성에 넣어줌`


# 검사 완료 페이지(Compelete.hs)
    
    `**필수**`
    
    - 검사가 완료되었다는 문구를 포함해야 하며, 검사결과에 대한 간단한 문장을 포함해야 합니다.
        - Ex) 사용자는 XX 성향이므로 XX 직업에 적합합니다.
    => 가져온 데이터를  state에 담은 후 sort해주는 함수를 통해 정렬
    한 후  `${1등} ${2등}` 이런 식으로 넣어줌.



#결과표 페이지(Result.page)
    
    `**필수**`
    - 유저의 기본 정보를 포함해야 합니다. (이름, 성별, 검사일)
    - 직업가치관결과에 대하여 항목 별로 수치를 표기해야 합니다. (ex. 막대 그래프)
    - 가치관과 관련이 높은 직업을 결과에 따라 분류하여 표기해야 합니다.
    - "다시 검사하기" 버튼 클릭 시, 진행했던 항목에 대한 기록은 모두 초기화되어야 합니다.

    Complete page에서 결과를  prop으로 가져와 chart에 뿌려줘서 구현,
    다시 검사하기 버튼은 sessionStorage.clear()함수를 통해 초기화





