import type { NextApiRequest, NextApiResponse } from 'next'
import {NextFetchEvent, NextResponse} from "next/server";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const runtime = 'edge';

export default function handler(req: NextApiRequest, event: NextFetchEvent) {
    return NextResponse.json({ name: 'John Doe' })
}
