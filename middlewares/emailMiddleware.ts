import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const emailMiddleware =
  (middleware: Function) => (request: NextRequest) => {
    console.log('TWO');
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/roll')) {
      console.log('= about');

      return NextResponse.redirect(new URL('/', request.url));
    }

    return middleware(request);
  };
