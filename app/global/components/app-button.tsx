import {LinkProps} from '@remix-run/react';
import {forwardRef} from 'react';

import {Button, ButtonProps} from '@mui/material';

import {I18nLink} from './i18n-link';

export type AppButtonProps = LinkProps & ButtonProps;

export const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>(
  ({viewTransition = true, children, ...props}, ref) => {
    return (
      <Button component={I18nLink} viewTransition={viewTransition} {...props} ref={ref}>
        {children}
      </Button>
    );
  },
);

AppButton.displayName = 'AppButton';
