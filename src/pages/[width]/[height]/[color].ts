import type { APIRoute } from "astro";
import { generateRectangleColors } from "@utils/generateRectangleColors";
import { validateSize } from "@utils/validations/sizeCheck";
import { getColor, validateColor } from "@utils/validations/colorCheck";

export const GET: APIRoute = ({ params }) => {
  if (
    validateSize(params.width) ||
    validateSize(params.height) ||
    validateColor(params.color)
  ) {
    return new Response(null, { status: 400 });
  }
  return new Response(
    generateRectangleColors(
      Number(params.width),
      Number(params.height),
      getColor(params.color)
    ),
    {
      headers: { "Content-Type": "image/jpeg" },
    }
  );
};
