import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const STAT_KEYS = {
  approvedReports: "stats:approved_reports",
  searchDone: "stats:search_done",
} as const;

async function readRedisNumber(key: string): Promise<number> {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!redisUrl || !redisToken) {
    throw new Error("Redis is not configured");
  }

  const response = await fetch(`${redisUrl}/get/${encodeURIComponent(key)}`, {
    headers: { Authorization: `Bearer ${redisToken}` },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Redis request failed with status ${response.status}`);
  }

  const payload = (await response.json()) as { result?: number | string | null };
  const value = Number(payload.result);

  if (!Number.isFinite(value)) {
    throw new Error(`Redis returned an invalid value for ${key}`);
  }

  return value;
}

export async function GET() {
  try {
    const [approvedReports, searchDone] = await Promise.all([
      readRedisNumber(STAT_KEYS.approvedReports),
      readRedisNumber(STAT_KEYS.searchDone),
    ]);

    return NextResponse.json(
      { approvedReports, searchDone },
      { headers: { "Cache-Control": "no-store, max-age=0" } },
    );
  } catch {
    return NextResponse.json(
      { error: "Stats are temporarily unavailable" },
      { status: 503, headers: { "Cache-Control": "no-store, max-age=0" } },
    );
  }
}
