import type { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function chain(functions: Function[], index = 0): Function {
  const current = functions[index];

  if (current) {
    const next = chain(functions, index + 1);
    return current(next);
  }

  return (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    return response;
  };
}
