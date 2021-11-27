import React from "react";

const Pagination = ({next, prev, curPage, buttonCtrl}) => {

  return (

    <div>
      <button
        className="btn btn-outline-danger" 
        onClick={prev}
        disabled={(curPage === 1)}
      >이전</button>
      <span className="prnx">{curPage}/6</span>
        <button
          className="btn btn-outline-success" 
          onClick={next}
          disabled={(curPage === 6 || buttonCtrl===false)}
        >다음</button>
    </div>


  );
};

export default Pagination;