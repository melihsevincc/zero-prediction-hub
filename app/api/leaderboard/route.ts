import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return Response.json({
    leaderboard: [
      { address: "0x1234", score: 12 },
      { address: "0x9876", score: 9 }
    ]
  });
}
