import type { APIRoute } from "astro";
import { generateRectangleColors } from "@utils/generateRectangleColors";
import { validateSize } from "@utils/validations/sizeCheck";
import { getColor, validateColor } from "@utils/validations/colorCheck";

/**
 * Apiroute for generate custom size images
 * With colors
 *
 * @param {params} { params }
 * @return {Response}
 */
export const GET: APIRoute = ({ params }) => {
  // Validate width|height|color get by params
  if (
    validateSize(Number(params.width)) ||
    validateSize(Number(params.height)) ||
    validateColor(Number(params.color))
  ) {
    // Return bad request if validation fails
    return new Response(null, { status: 400 });
  }
  // Return image via a Response
  return new Response(
    generateRectangleColors(
      Number(params.width),
      Number(params.height),
      getColor(Number(params.color))
    ),
    {
      headers: { "Content-Type": "image/jpeg" },
    }
  );
};
