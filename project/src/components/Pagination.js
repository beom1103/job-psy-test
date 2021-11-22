import React, {useState, useEffect} from "react";
import styled from 'styled-components';


const Pagination = ({next, prev, curPage, buttonCtrl}) => {
//  perPage, total, paginate, 
  //   const PageUl = styled.ul`
//   float:left;
//   list-style: none;
//   text-align:center;
//   border-radius:3px;
//   color:white;
//   padding:1px;
//   border-top:3px solid #186EAD;
//   border-bottom:3px solid #186EAD;
//   background-color: rgba( 0, 0, 0, 0.4 );
// `;

// const PageLi = styled.li`
//   display:inline-block;
//   font-size:17px;
//   font-weight:600; 
//   padding:5px;
//   border-radius:5px;
//   width:25px;
//   &:hover{
//     cursor:pointer;
//     color:white;
//     background-color:#263A6C;
//   }
//   &:focus::after{
//     color:white;
//     background-color:#263A6C;
//   }
// `;

// const PageSpan = styled.span`
//   &:hover::after,
//   &:focus::after{
//     border-radius:100%;
//     color:white;
//     background-color:#263A6C;
//   }
// `;

// const Button = styled.button`
//   float:left;
//   display:inline-block;
//   text-align:center;
//   border-radius:3px;
//   color:white;
//   padding:1px;
//   border-top:3px solid #186EAD;
//   border-bottom:3px solid #186EAD;
//   background-color: rgba( 0, 0, 0, 0.4 );

//   font-size:17px;
//   font-weight:600; 
//   padding:5px;
//   margin-top: 16px;

//   &:hover{
//     cursor:pointer;
//     color:white;
//     background-color:#263A6C;
//   }
//   &:focus::after{
//     color:white;
//     background-color:#263A6C;
//   }
// `

  // const pageNumber = [];
  // // Math.ceil: 올림, 
  // for (let i = 1; i <= Math.ceil(total / perPage); i++) {
  //   pageNumber.push(i);
  // }
  


  return (

    <div>

      <button 
        onClick={prev}
        disabled={(curPage === 1)}
      >이전</button>
      <span>{curPage}/6</span>
        {/* {pageNumber.map((pageNum) => (

                <PageUl className="pagination">
                  <PageLi className="page-item"
                    key={pageNum}
                    onClick={() => {
                      paginate(pageNum)
                    
                    }}
                  >
                    <PageSpan aria-hidden="true">
                    {pageNum}
                    </PageSpan>
                  </PageLi>
                </PageUl>
        ))} */}
        <button 
          onClick={next}
          disabled={(curPage === 6) || buttonCtrl < 5}
        >다음</button>


    </div>


  );
};

export default Pagination;