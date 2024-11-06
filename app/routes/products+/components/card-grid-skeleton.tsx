import {Box, Skeleton} from '@mui/material';

type CardGridSkeletonProps = {
  count?: number;
};

export const CardGridSkeleton = ({count = 3}: CardGridSkeletonProps) => {
  const cards = [];

  for (let index = 0; index < count; index++) {
    cards.push(
      <Skeleton
        key={index}
        sx={{
          height: '329.3px',
          transform: 'none',
        }}
      />,
    );
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: 2,
      }}
    >
      {cards}
    </Box>
  );
};
