interface Props {
  pages: number;
  onChangePage: (page: number) => void;
  activePage: number;
}

export function Pagination(props: Props) {
  const { activePage, onChangePage, pages } = props;

  return (
    <div className="flex items-center justify-center gap-2 cursor-pointer ">
      {activePage - 2 > 1 && <div>&lt;</div>}
      {activePage - 1 !== 0 && (
        <button onClick={() => onChangePage(activePage - 1)}>
          {activePage - 1}
        </button>
      )}
      <button className="active" onClick={() => {}}>
        {activePage}
      </button>
      <button onClick={() => onChangePage(activePage + 1)}>
        {activePage + 1}
      </button>
      {activePage === 1 && (
        <button onClick={() => onChangePage(activePage + 2)}>
          {activePage + 2}
        </button>
      )}
      {activePage + 2 < pages && <div>&gt;</div>}
    </div>
  );
}
