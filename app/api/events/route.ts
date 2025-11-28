import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return Response.json({
    events: [
      { id: "1", title: "Example Event 1", status: "open" },
      { id: "2", title: "Example Event 2", status: "closed" }
    ]
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  return Response.json({
    ok: true,
    received: body
  });
}
