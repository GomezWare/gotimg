// Valid outputs formats
const outputs = ["png", "jpeg"];

/**
 * Checks if format is valid and is on outputs formats array
 *
 * @param {String} output
 * @return {boolean}
 */
const validateOutput = (output) => {
  if (!outputs.includes(output)) {
    return true;
  }
  return false;
};

export { validateOutput };
