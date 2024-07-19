import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { RATE_LIMIT_INTERVAL } from '@/lib/constants/constants';

const REQUEST_LIMIT = 1;
const REQUEST_INTERVAL_MS = RATE_LIMIT_INTERVAL * 1000;
const rateLimitMap = new Map();

interface IpData {
  count: number;
  updatedAt: number;
}

export const rateLimitMiddleware =
  (middleware: Function) => (request: NextRequest) => {
    const { pathname } = request.nextUrl;

    // Path /api/email
    if (pathname.startsWith('/api/email')) {
      const ip = (request.headers.get('x-forwarded-for') ?? '127.0.0.1').split(
        ','
      )[0];
      const now = Date.now();

      // set IP address for new connection
      if (!rateLimitMap.has(ip)) {
        rateLimitMap.set(ip, {
          count: 0,
          updatedAt: now,
        });
      }

      const ipData: IpData = rateLimitMap.get(ip);
      const remaining = Math.max(
        ipData.updatedAt + REQUEST_INTERVAL_MS - now,
        0
      );

      // if interval elapsed then set new timestamp
      if (!remaining) {
        ipData.count = 0;
        ipData.updatedAt = now;
      }

      if (ipData.count >= REQUEST_LIMIT) {
        return NextResponse.json(
          {
            error: `Too many requests. Please try again later`,
            remaining,
          },
          {
            status: 429,
            headers: {
              'X-RateLimit-Limit': REQUEST_LIMIT.toString(),
              'X-RateLimit-Remaining': remaining.toString(),
            },
          }
        );
      }

      ipData.count += 1;
      return;
    }

    // TODO: remove test path when done ts
    // Path /roll
    if (pathname.startsWith('/roll')) {
      console.log('middleware @ path /roll');
      return NextResponse.redirect(new URL('/', request.url));
    }

    return middleware(request);
  };
