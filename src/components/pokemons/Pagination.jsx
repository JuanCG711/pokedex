const firstPage = 1;

const Pagination = ({
  PagesInCurrentBlock,
  lastPage,
  setCurrentPage,
  currentPage,
}) => {
  const handleNextPage = () => {
    setCurrentPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= lastPage) return nextPage;
      return prevState;
    });
  };

  const handleLastPage = () => setCurrentPage(lastPage);

  const handleBackPage = () => {
    setCurrentPage((prevState) => {
      const nextPage = prevState - 1;
      if (nextPage >= firstPage) return nextPage;
      return prevState;
    });
  };

  const handleFirstPage = () => setCurrentPage(firstPage);

  return (
    <ul className="flex justify-center items-center gap-0.5 cursor-pointer mb-12 px-4 sm:gap-2 lg:gap-5">

      {currentPage > firstPage && (
        <li className="bg-[#DD1A1A] text-white p-1 rounded-md sm:p-4" onClick={handleFirstPage}>
          <i className="bx bx-chevrons-left"></i>
        </li>
      )}
      {currentPage > firstPage && (
        <li className="bg-[#DD1A1A] text-white p-1 rounded-md sm:p-4" onClick={handleBackPage}>
          <i className="bx bx-chevron-left"></i>
        </li>
      )}

      {PagesInCurrentBlock.map((page) => (
        <li
          className={`p-2 ${
            currentPage === page ? "bg-[#DD1A1A] text-white p-1 rounded-md sm:py-4 sm:px-5" : ""
          }`}
          onClick={() => setCurrentPage(page)}
          key={page}
        >
          {page}
        </li>
      ))}
      {currentPage < lastPage && (
        <li className="bg-[#DD1A1A] text-white p-1 rounded-md sm:p-4" onClick={handleNextPage}>
          <i className="bx bx-chevron-right"></i>
        </li>
      )}
      {currentPage < lastPage && (
        <li className="bg-[#DD1A1A] text-white p-1 rounded-md sm:p-4" onClick={handleLastPage}>
          <i className="bx bx-chevrons-right"></i>
        </li>
      )}
    </ul>
  );
};
export default Pagination;
