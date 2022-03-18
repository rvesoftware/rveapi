const getPagination = (page, size, all) => {
  const limit = size ? +size : all;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

export default getPagination;
