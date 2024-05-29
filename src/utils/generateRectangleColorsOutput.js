import { createCanvas } from "canvas";

/**
 * Function to generate a custom size image and custom color via canvas library and return a image buffer
 * Also you can select the buffer format
 *
 * @param {Number} width
 * @param {Number} height
 * @param {String} color
 * @param {String} output
 * @return {Buffer}
 */
const generateRectangleColorsOutput = (width, height, color, output) => {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Main fill
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);

  // Draw text
  ctx.font = `bold ${(width * 15) / 100}% Arial`;
  ctx.lineWidth = 5;
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.strokeText(`${width} x ${height}`, width / 2, height / 2);
  ctx.fillText(`${width} x ${height}`, width / 2, height / 2);

  // Return generated image buffer
  return canvas.toBuffer("image/" + output);
};

export { generateRectangleColorsOutput };
