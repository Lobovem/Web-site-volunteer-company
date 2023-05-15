import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
// Example items, to simulate fetching from another resources.
import data from '../../data/data.json';
import s from './Pagination.module.scss';
import { NewsAll } from '../NewsAll/NewsAll';

export const Pagination = ({ itemsPerPage }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [item, setItem] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = item + itemsPerPage;
  const currentItems = data.slice(item, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItem(newOffset);
  };

  return (
    <>
      <NewsAll currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        nextClassName={s.pagination__btn}
        previousClassName={s.pagination__btn}
        renderOnZeroPageCount={null}
        className={s.pagination}
        pageLinkClassName={s.pagination__link}
        activeClassName={s.active}
        disabledLinkClassName={s.disabled}
        // hrefBuilder={(pageNumber, pageCount) => (pageNumber <= 3 && pageNumber <= pageCount ? `/page/${pageNumber}` : '#')}
        // hrefAllControls
      />
    </>
  );
};
