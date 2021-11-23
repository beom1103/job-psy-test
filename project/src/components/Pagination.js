import React from "react";

const Pagination = ({next, prev, curPage, buttonCtrl}) => {

  return (

    <div>
      <button 
        onClick={prev}
        disabled={(curPage === 1)}
      >이전</button>
      <span>{curPage}/6</span>
        <button 
          onClick={next}
          disabled={(curPage === 6) || buttonCtrl < 5}
        >다음</button>
    </div>


  );
};

export default Pagination;