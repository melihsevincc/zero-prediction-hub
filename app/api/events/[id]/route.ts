export async function GET(req, { params }) {
  return Response.json({ event: params.id });
}