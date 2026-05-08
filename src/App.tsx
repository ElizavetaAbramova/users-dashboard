import { useCallback, useEffect, useState } from "react";

import "./App.css";
import { FilterBar } from "./components/Filter";
import { UsersList } from "./components/List";
import { Pagination } from "./components/Pagination";
import { type SearchState, type UserProfile } from "./types&interfaces";

const LIMIT_PER_PAGE = 10;

function App() {
  const [searchState, setSearchState] = useState<SearchState>({
    currentPage: 1,
    filterQuery: "",
  });
  const [userList, setUserList] = useState<UserProfile[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const skip = (searchState.currentPage - 1) * LIMIT_PER_PAGE;
      const value = encodeURIComponent(searchState.filterQuery);

      const url = searchState.filterQuery
        ? `https://dummyjson.com/users/filter?key=bloodGroup&value=${value}&limit=${LIMIT_PER_PAGE}&skip=${skip}`
        : `https://dummyjson.com/users?limit=${LIMIT_PER_PAGE}&skip=${skip}`;

      const res = await fetch(url);
      const data = await res.json();

      setUserList(data.users);
      setTotalPages(Math.ceil(data.total / LIMIT_PER_PAGE));
    };

    fetchUsers().finally(() => setIsLoading(false));
  }, [searchState.currentPage, searchState.filterQuery]);

  const handleFilter = useCallback((query: string) => {
    setSearchState({
      currentPage: 1,
      filterQuery: query,
    });
  }, []);

  const handleChangePage = (page: number) => {
    setSearchState((prev) => ({
      ...prev,
      currentPage: page,
    }));
  };

  return (
    <>
      <section className="flex flex-col gap-3 md:py-5">
        <div>
          <h1>Find a possible blood donor</h1>
          <p className="md:px-10 text-center">
            Select a blood group to find potential donors. Click on the
            pagination buttons to navigate through the list of donors. Each
            donor's profile card provides detailed information about their blood
            type and contact details.
          </p>
        </div>
        <FilterBar
          onClick={handleFilter}
          currentQuery={searchState.filterQuery}
        />
        {isLoading && <p>Loading...</p>}
        {totalPages === 0 && (
          <div className="flex items-center justify-center">
            <p className="text-2xl">
              No users found with the selected blood group.
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
