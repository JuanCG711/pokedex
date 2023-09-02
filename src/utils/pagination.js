const PaginateData = (items, currentPage) => {
  const itemsPerPage = 20;

  const sliceEnd = itemsPerPage * currentPage;
  const sliceStart = sliceEnd - itemsPerPage;

  const itemInCurrentPage = items.slice(sliceStart, sliceEnd);

  const lastPage = Math.ceil(items.length / itemsPerPage);

  const pagesPerBlock = 7;
  const actualBlock = Math.ceil(currentPage / pagesPerBlock);

  const PagesInCurrentBlock = [];
  const maxPage = actualBlock * pagesPerBlock;
  const minPage = maxPage - pagesPerBlock + 1;
  for (let i = minPage; i <= maxPage; i++) {
    if (i <= lastPage) {
      PagesInCurrentBlock.push(i);
    }
  }
return{
    PagesInCurrentBlock,
    itemInCurrentPage,
    lastPage
}

};

export { PaginateData };
