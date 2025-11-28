export async function GET() {
  return Response.json({ events: [] });
}
export async function POST(req) {
  return Response.json({ ok: true });
}