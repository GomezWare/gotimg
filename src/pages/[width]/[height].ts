import type { APIRoute } from "astro";
import { generateRectangle } from "@utils/generateRectangle";
import { validateSize } from "@utils/validations/sizeCheck";

/**
 * Apiroute for generate custom size images
 *
 * @param {params} { params }
 * @return {Response}
 */
export const GET: APIRoute = ({ params }) => {
  // Validate width|height get by params
  if (validateSize(params.width) || validateSize(params.height)) {
    // Return bad request if validation fails
    return new Response(null, { status: 400 });
  }

  // Return image via a Response
  return new Response(
    generateRectangle(Number(params.width), Number(params.height)),
    {
      headers: { "Content-Type": "image/jpeg" },
    }
  );
};
