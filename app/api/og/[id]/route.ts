export const runtime = "edge";

export async function GET() {
  return new Response("OG endpoint disabled", { status: 200 });
}
