import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  return new ImageResponse(
    (
      <div
        style= {{
    width: "100%",
    height: "100%",
    background: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 48
  }}
      >
  Prediction ID: { id }
</div>
    ),
{
  width: 1200,
    height: 630
}
  );
}
