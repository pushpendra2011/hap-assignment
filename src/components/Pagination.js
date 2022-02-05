import React from 'react';
import './Pagination.css';

const Pagination = ({ handleChange, currentPage, totalPages }) => {
  const changeNumber = (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      handleChange(e, +e.target.value);
    }
  };
  return (
    <div className="pagination">
      <button
        onClick={(e) => {
          handleChange(e, currentPage - 1);
        }}
      >
        Previous
      </button>
      <input
        style={{
          maxWidth: '10px',
        }}
        type="text"
        defaultValue={currentPage}
        onKeyDown={changeNumber}
      ></input>
      <p>{` of ${totalPages} `}</p>
      <button
        onClick={(e) => {
          handleChange(e, currentPage + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
