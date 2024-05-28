const outputs = ["png", "jpeg"];

const validateOutput = (output) => {
  if (!outputs.includes(output)) {
    return true;
  }
  return false;
};

export { validateOutput };
