/**
 * Check if any size is valid
 *
 * @param {Number} size
 * @return {boolean}
 */
const validateSize = (size) => {
  // Max size is 4000 px to avoid server usage
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
