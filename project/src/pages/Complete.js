import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../store/UserStore";
import axios from "axios";
import { valueNames } from "../store/index";

const Complete = () => {
  const [post, setPost] = useContext(UserContext);
  const history = useHistory();

  // 데이터를 저장하는 state
  const [resultData, setResultData] = useState({});

  // 데이터를 정렬해서 닮을 state
  const [rate, setRate] = useState([]);

  const ax = axios.create({
    headers: { "Content-Type": "application/json" },
  });

  useEffect(() => {
    async function loadData() {
      try {
        //url을 가져와서 seq저장
        const res = await ax.post(
          `http://www.career.go.kr/inspct/openapi/test/report?apikey=${post.apikey}`,
          post
        );
        const seq = res.data.RESULT["url"].slice(-11);

        //seq get을 통해 data 저장
        const ress = await axios.get(
          `https://www.career.go.kr/inspct/api/psycho/report?seq=${seq}`
        );
        setResultData(ress.data.result);

        //값의 오름차순대로 정렬
        const score = ress.data.result.wonScore
          .split(" ")
          .filter((sc) => sc)
          .map((i) => {
            i.split("=");
            return { no: i[0], name: valueNames[i[0]], count: i[2] };
          });

        //정렬한 값을 담음.
        setRate([...score].sort((a, b) => a.count - b.count));
      } catch (e) {
        if (resultData.length === 0) console.log("error");
      }
    }
    loadData();
    console.log(rate);
  }, []);

  //결과 테이블로 정렬한 데이터를 보낼 함수
  function onClick() {
    history.push({
      pathname: "/result",
      state: { rate },
    });
  }

  return (
    <div className="complete">
      <section class="hero is-info is-small">
        <div class="hero-body">
          <p class="title">| 검사 완료 |</p>
          <br />
          <p class="subtitle">
            <h2>
              <span>{post["name"]}</span>님 검사가 완료되었습니다.
            </h2>
          </p>
        </div>
      </section>

      <div className="result-box">
        {rate.length === 0 ? (
          ""
        ) : (
          <h3>
            직업생활과 관련하여 <span>{post["name"]}</span>님은{" "}
            <span className="best">{rate[rate.length - 1].name}</span>(와)과{" "}
            <span className="best">{rate[rate.length - 2].name}</span>(을)를
            가장 중요하게 생각합니다. 반면에{" "}
            <span className="worst">{rate[0].name}</span>와(과){" "}
            <span className="worst">{rate[1].name}</span>은(는) 상대적으로 덜
            중요하게 생각합니다.
          </h3>
        )}
      </div>

      <h3>
        검사 결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게
        생각하는지를 알려주고, 중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해
        볼 기회를 제공합니다.
      </h3>
      <button className="button is-info is-large" onClick={onClick}>
        결과보기
      </button>
    </div>
  );
};

export default Complete;
