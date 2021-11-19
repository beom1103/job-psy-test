import React from "react";

const Pagination = ({ perPage, total, paginate, next, prev, curPage }) => {
  const pageNumber = [];
  
  // Math.ceil: 올림, 
  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumber.push(i);
  }


  return (

    <div className="pagination">

      <button 
        onClick={prev}
        disabled={(curPage === 1)}
      >이전</button>

        {pageNumber.map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => paginate(pageNum)}
              >
                <span aria-hidden="true">
                {pageNum}
                </span>
              </button>
        ))}
        <button 
          onClick={next}
          disabled={(curPage === 6)}
        >다음</button>


    </div>


  );
};

export default Pagination;