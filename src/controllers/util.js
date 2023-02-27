export const paginate = (query, { pageIndex, pageSize }) => {
  const offset = pageIndex * pageSize;
  const limit = pageSize;

  return {
    ...query,
    offset,
    limit,
  };
};