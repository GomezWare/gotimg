import type { APIRoute } from "astro";
import { generateRectangleColorsOutput } from "@utils/generateRectangleColorsOutput";
import { validateSize } from "@utils/validations/sizeCheck";
import { validateColor } from "@utils/validations/colorCheck";
import { validateOutput } from "@utils/validations/outputCheck";

export const GET: APIRoute = ({ params }) => {
  if (
    validateSize(params.width) ||
    validateSize(params.height) ||
    validateColor(params.color) ||
    validateOutput(params.output)
  ) {
    return new Response(null, { status: 400 });
  }
  return new Response(
    generateRectangleColorsOutput(
      Number(params.width),
      Number(params.height),
      String(params.color),
      String(params.output)
    ),
    {
      headers: { "Content-Type": "image/jpeg" },
    }
  );
};
