import { createCanvas } from "canvas";

/**
 * Function to generate a square via canvas library and return a image buffer
 *
 * @param {Number} width
 * @return {Buffer}
 */
const generateSquare = (width) => {
  const canvas = createCanvas(width, width);
  const ctx = canvas.getContext("2d");

  // Gradient (If you have a better gradient send a pull request)
  const gradient = ctx.createLinearGradient(0, 0, width, width);
  gradient.addColorStop(0, "magenta");
  gradient.addColorStop(0.5, "cyan");
  gradient.addColorStop(1, "yellow");

  // Main fill
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, width);

  // Draw text
  ctx.font = `bold ${(width * 15) / 100}% Arial`;
  ctx.lineWidth = 5;
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.strokeText(`${width} x ${width}`, width / 2, width / 2);
  ctx.fillText(`${width} x ${width}`, width / 2, width / 2);

  // Return generated image buffer
  return canvas.toBuffer("image/jpeg");
};

export { generateSquare };
