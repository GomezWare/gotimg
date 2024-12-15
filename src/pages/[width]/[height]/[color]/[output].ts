import type { APIRoute } from "astro";
import { generateRectangleColorsOutput } from "@utils/generateRectangleColorsOutput";
import { validateSize } from "@utils/validations/sizeCheck";
import { validateColor } from "@utils/validations/colorCheck";
import { validateOutput } from "@utils/validations/outputCheck";

/**
 * Apiroute for generate custom size
 * With colors and custom format
 *
 * @param {params} { params }
 * @return {Response}
 */
export const GET: APIRoute = ({ params }) => {
  // Validate width|height|color|format get by params
  if (
    validateSize(Number(params.width)) ||
    validateSize(Number(params.height)) ||
    validateColor(String(params.color)) ||
    validateOutput(String(params.output))
  ) {
    // Return bad request if validation fails
    return new Response(null, { status: 400 });
  }
  // Return image via a Response
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
