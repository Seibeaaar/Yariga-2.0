import { FC } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

type PaginationProps = {
  activePage: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({
  activePage,
  pages,
  onPageChange,
}) => {
  const leftArrowDisabled = activePage === 1;
  const rightArrowDisabled = activePage === pages;

  const onLeftArrowClick = () => {
    if (!leftArrowDisabled) {
      onPageChange(activePage - 1);
    }
  };

  const onRightArrowClick = () => {
    if (!rightArrowDisabled) {
      onPageChange(activePage + 1);
    }
  };

  return (
    <div className={`flex items-center gap-[16px] justify-end`}>
      <div
        onClick={onLeftArrowClick}
        className={`${leftArrowDisabled ? "text-secondary-light dark:text-secondary-dark" : "text-primary-light dark:text-primary-dark"}`}
      >
        <KeyboardArrowLeft color="inherit" className={`${leftArrowDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`} />
      </div>
      <div className="flex items-center gap-[12px]">
        {Array.from({ length: pages }).map((_, i) => {
          const isActive = activePage === i + 1;
          return (
            <div
              className={`w-[36px] h-[36px] cursor-pointer flex items-center justify-center rounded-[5px] border border-primary hover:bg-primary ${isActive ? "bg-primary" : "bg-transparent"}`}
            >
              <p className="text-white">{i + 1}</p>
            </div>
          );
        })}
      </div>
      <div
        onClick={onRightArrowClick}
        className={`${rightArrowDisabled ? "text-secondary-light dark:text-secondary-dark" : "text-primary-light dark:text-primary-dark"}`}
      >
        <KeyboardArrowRight color="inherit" className={`${rightArrowDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`} />
      </div>
    </div>
  );
};

export default Pagination;
