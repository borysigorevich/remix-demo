import {remember} from '@epic-web/remember';
import {QueryClient} from '@tanstack/react-query';

//
//

export const queryClient = remember(
  'react-query',
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          // staleTime: 300_000, // 5 minutes
          staleTime: 5 * 60 * 1000,
          retry: 0,
        },
      },
    }),
);
