export async function GET(req, { params }) {
  return new Response("OG Image for " + params.id);
}