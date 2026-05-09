import { useCallback, useEffect, useState } from "react";
import type { UserProfile } from "../types&interfaces";
import { getURL } from "../utils";

const LIMIT_PER_PAGE = 10;

export const useUsersList = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [userList, setUserList] = useState<UserProfile[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const skip = (page - 1) * LIMIT_PER_PAGE;
        const value = encodeURIComponent(filter);
        const url = getURL(LIMIT_PER_PAGE, skip, value);

        const res = await fetch(url, {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();

        setUserList(data.users);
        setTotalPages(Math.ceil(data.total / LIMIT_PER_PAGE));
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();

    return () => controller.abort();
  }, [page, filter]);

  const handleFilterChange = useCallback((query: string) => {
    setFilter(query);
    setPage(1);
  }, []);

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  return {
    searchState: { currentPage: page, filterQuery: filter },
    userList,
    totalPages,
    isLoading,
    isError,
    handleFilterChange,
    handleChangePage,
  };
};
