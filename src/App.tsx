import "./App.css";
import { FilterBar } from "./components/Filter";
import { UsersList } from "./components/List";
import { Loader } from "./components/Loader";
import { Pagination } from "./components/Pagination";
import { useUsersList } from "./hooks";

function App() {
  const {
    searchState,
    userList,
    totalPages,
    isLoading,
    isError,
    handleFilterChange,
    handleChangePage,
  } = useUsersList();

  return (
    <>
      <section className="flex flex-col md:gap-3 gap-4 md:py-5 p-2">
        <div>
          <h1 className="leading-none">Find a possible blood donor</h1>
          <p className="md:px-10 text-center">
            Select a blood group to find potential donors. Click on the
            pagination buttons to navigate through the list of donors. Each
            donor's profile card provides detailed information about their
            person and contact details.
          </p>
        </div>
        <FilterBar
          onChange={handleFilterChange}
          currentQuery={searchState.filterQuery}
        />
        {isLoading && <Loader />}
        {isError && (
          <p className="text-red-500" role="alert">
            There is an expected error during fetching users. Please try later.
          </p>
        )}
        {totalPages === 0 && (
          <div className="flex flex-col items-center gap-3 py-16 text-center">
            <div className="text-5xl">🩸</div>

            <h3 className="text-xl font-semibold">No matching donors found</h3>

            <p className="max-w-md text-gray-500">
              Try selecting a different blood group or Rh factor.
            </p>
          </div>
        )}
        {totalPages > 0 && !isLoading && (
          <>
            <UsersList users={userList} />
            <Pagination
              pages={totalPages}
              onChangePage={handleChangePage}
              activePage={searchState.currentPage}
            />
          </>
        )}
      </section>
    </>
  );
}

export default App;
