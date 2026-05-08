interface Props {
  pages: number;
  onChangePage: (page: number) => void;
  activePage: number;
}
const VISIBLE_PAGES = 3;
const PAGINATION_SHIFT = 2;

export function Pagination(props: Props) {
  const { activePage, onChangePage, pages } = props;
  const half = Math.floor(VISIBLE_PAGES / 2);
  let startPage = activePage - half;
  let endPage = activePage + half;

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(VISIBLE_PAGES, pages);
  }

  if (endPage > pages) {
    endPage = pages;
    startPage = Math.max(1, pages - VISIBLE_PAGES + 1);
  }

  const visiblePageButtons = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <div className="flex items-center justify-center gap-2">
      {activePage - PAGINATION_SHIFT > 1 && <div>&lt;</div>}
      {visiblePageButtons.map((page) => (
        <button
          key={page}
          onClick={() => onChangePage(page)}
          className={`cursor-pointer ${activePage === page ? "active" : ""}`}
          aria-label={`Go to page ${page}`}
        >
          {page}
        </button>
      ))}
      {activePage + PAGINATION_SHIFT < pages && <div>&gt;</div>}
    </div>
  );
}
