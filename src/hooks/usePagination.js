import { useState } from 'react';

function usePagination(list, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(list.length / itemsPerPage);

  function presentList() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return list.slice(begin, end);
  }

  function moveTo(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, totalPages));
  }

  return { moveTo, presentList, currentPage, totalPages };
}

export default usePagination;
