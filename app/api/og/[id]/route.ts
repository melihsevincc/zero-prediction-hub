import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="black"/>
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="64"
        fill="white"
        font-family="Arial, sans-serif"
      >
        Prediction ID: ${id}
      </text>
    </svg>
  `;

  return new ImageResponse(svg, {
    width: 1200,
    height: 630,
  });
}
