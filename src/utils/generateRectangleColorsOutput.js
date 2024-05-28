import { createCanvas } from "canvas";

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

  return canvas.toBuffer("image/" + output);
};

export { generateRectangleColorsOutput };
