import {remember} from '@epic-web/remember';
import {QueryClient} from '@tanstack/react-query';

export const STALE_TIME = 5 * 60 * 1000; // 5 minutes

export const queryClient = remember(
  'react-query',
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 0,
        },
      },
    }),
);
