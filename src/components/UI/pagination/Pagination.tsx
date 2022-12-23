import React from 'react';
import { getPagesArray } from '../../../utils/pages';
import Button from '../button/Button';

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement>{
  totalPages: number;
  page: number;
  setPage: (value: React.SetStateAction<number>) => void;
}

const Pagination = ({totalPages, page, setPage}: PaginationProps) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className='page__wrapper'>
      {pagesArray.map((p) => 
        <Button
          onClick={() => setPage(p)}
          key={p}
          styles={p === page ? ['page__button_current'] : ['page__button']}
        >
          {p}
        </Button>
      )}
    </div>
  );
};

export default Pagination;