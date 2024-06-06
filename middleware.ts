import { chain } from './middlewares/chain';
import { i18nMiddleware } from './middlewares/i18nMiddleware';
import { emailMiddleware } from './middlewares/emailMiddleware';

const middlewares = [emailMiddleware, i18nMiddleware];

export default chain(middlewares);

export const config = {
  matcher: [
    '/((?!api|_next/static|.*svg|.*png|.*jpg|.*jpeg|.*gif|.*webp|/image|favicon.ico).*)',
  ],
};
