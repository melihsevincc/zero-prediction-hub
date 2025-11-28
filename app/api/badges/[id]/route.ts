import { NextRequest } from "next/server";

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    return Response.json({
        badge: {
            id,
            name: "Prediction Winner",
            level: 1
        }
    });
}
