"use client";
import { FC, ReactElement } from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import Link from "next/link";

interface PaginationProps {
  onPageChange: (page: any) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

export const Pagination: FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: PaginationProps): ReactElement | null => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  // const onNext = (): void => {
  //   onPageChange(currentPage + 1);
  // };

  // const onPrevious = (): void => {
  //   onPageChange(currentPage - 1);
  // };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="pagination">
      <nav className="inline-flex -space-x-px rounded-md" aria-label="Pagination">
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <span
                key={index}
                className="relative inline-flex items-center rounded border px-4 py-2 text-sm font-semibold focus:outline-offset-0"
              >
                &#8230;
              </span>
            );
          }
          return (
            <Link
              href="#"
              key={index}
              className={classnames(
                "relative inline-flex items-center rounded border px-4 py-2 text-sm font-semibold hover:bg-slate-800 hover:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-slate-800 focus:z-20 focus:outline-offset-0",
                {
                  "bg-orange-600 text-white dark:text-slate-800": pageNumber === currentPage - 1,
                },
                { "text-gray-900 dark:text-white": pageNumber !== currentPage - 1 }
              )}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

