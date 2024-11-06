import {LinkProps} from '@remix-run/react';
import {forwardRef} from 'react';

import {Link as MuiLink, LinkProps as MuiLinkProps} from '@mui/material';

import {I18nLink} from './i18n-link';

//
//

type MuiAppI18nLinkProps = LinkProps & Omit<MuiLinkProps, 'href' | 'component'>;

export const AppLink = forwardRef<HTMLAnchorElement, MuiAppI18nLinkProps>(
  ({children, ...props}, ref) => {
    return (
      <MuiLink component={I18nLink} {...props} ref={ref}>
        {children}
      </MuiLink>
    );
  },
);

AppLink.displayName = 'AppLink';
