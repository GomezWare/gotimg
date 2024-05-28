import type { APIRoute } from "astro";
import { generateSquare } from "@utils/generateSquare";
import { validateSize } from "@utils/validations/sizeCheck";

export const GET: APIRoute = ({ params }) => {
  if (validateSize(params.width)) {
    return new Response(null, { status: 400 });
  }

  return new Response(generateSquare(Number(params.width)), {
    headers: { "Content-Type": "image/jpeg" },
  });
};
