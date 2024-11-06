import React from 'react';

import {Box} from '@mui/material';

type ViewSwitcherProps = {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
  isLoading?: boolean;
};

export const ProductsViewSwitcher = ({desktop, mobile}: ViewSwitcherProps) => {
  return (
    <>
      <Box
        sx={{
          display: {xs: 'none', md: 'block'},
        }}
      >
        {desktop}
      </Box>
      <Box
        sx={{
          display: {xs: 'block', md: 'none'},
        }}
      >
        {mobile}
      </Box>
    </>
  );
};
