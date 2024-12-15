import type { APIRoute } from "astro";
import { generateSquare } from "@utils/generateSquare";
import { validateSize } from "@utils/validations/sizeCheck";

/**
 * Apiroute for generate squares
 *
 * @param {params} { params }
 * @return {Response}
 */
export const GET: APIRoute = ({ params }) => {
  // Validate width get by params
  if (validateSize(Number(params.width))) {
    // Return bad request if validation fails
    return new Response(null, { status: 400 });
  }

  // Return image via a Response
  return new Response(generateSquare(Number(params.width)), {
    headers: { "Content-Type": "image/jpeg" },
  });
};
