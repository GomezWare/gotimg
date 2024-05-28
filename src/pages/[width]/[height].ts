import type { APIRoute } from "astro";
import { generateRectangle } from "@utils/generateRectangle";
import { validateSize } from "@utils/validations/sizeCheck";

export const GET: APIRoute = ({ params }) => {
  if (validateSize(params.width) || validateSize(params.height)) {
    return new Response(null, { status: 400 });
  }
  return new Response(
    generateRectangle(Number(params.width), Number(params.height)),
    {
      headers: { "Content-Type": "image/jpeg" },
    }
  );
};
