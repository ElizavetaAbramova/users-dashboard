export const getURL = (limitPerPage: number, skip: number, filter?: string) => {
  const baseURL = "https://dummyjson.com/users";
  return filter
    ? `${baseURL}/filter?key=bloodGroup&value=${filter}&limit=${limitPerPage}&skip=${skip}`
    : `${baseURL}?limit=${limitPerPage}&skip=${skip}`;
};
