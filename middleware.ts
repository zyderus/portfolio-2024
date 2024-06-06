import { chain } from './middlewares/chain';
import { i18nMiddleware } from './middlewares/i18nMiddleware';
import { rateLimitMiddleware } from './middlewares/rateLimitMiddleware';

const middlewares = [rateLimitMiddleware, i18nMiddleware];

export default chain(middlewares);

export const config = {
  matcher: [
    '/((?!_next/static|.*svg|.*png|.*jpg|.*jpeg|.*gif|.*webp|/image|favicon.ico).*)',
  ],
};
