import { NextRequest } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, { params }: Params) {
  return Response.json({ event: params.id });
}
