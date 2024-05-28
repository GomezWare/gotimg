const validateSize = (size) => {
  if (
    !size ||
    isNaN(Number(size)) ||
    Number(size) > 4000 ||
    Number(size) <= 0
  ) {
    return true;
  }
  return false;
};

export { validateSize };
