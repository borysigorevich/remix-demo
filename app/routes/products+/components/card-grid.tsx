import {useTranslation} from 'react-i18next';

import {Box, Stack, Typography} from '@mui/material';

import {AppButton} from '~/global/components/app-button';

import {ApiProduct} from '~/api-client/types';
import {ProductCard} from '~/routes/products+/components/card';
import {CardGridSkeleton} from '~/routes/products+/components/card-grid-skeleton';
import {useDeleteProductItem} from '~/routes/products+/hooks/use-delete-product-item';

type CardGridProps = {
  data?: ApiProduct[];
  isLoading: boolean;
};

type EmptyProductsCardGridProps = {
  actionURL?: string;
};

const EmptyProductsCardGrid = ({actionURL}: EmptyProductsCardGridProps) => {
  const {t} = useTranslation(['common']);

  return (
    <Stack p={3} alignItems="center" spacing={2}>
      <Typography variant="caption" fontSize="0.9rem">
        {t('common:noResults')}
      </Typography>

      {actionURL ? (
        <AppButton to={actionURL} variant="contained">
          {t('common:create')}
        </AppButton>
      ) : null}
    </Stack>
  );
};

export const ProductsCardGrid = ({isLoading, data}: CardGridProps) => {
  const doDeleteItem = useDeleteProductItem();

  return (
    <>
      {isLoading ? (
        <CardGridSkeleton />
      ) : !data?.length ? (
        <EmptyProductsCardGrid actionURL="/products/create" />
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: 2,
          }}
        >
          {data?.map(product => (
            <ProductCard key={product.productId} product={product} doDeleteItem={doDeleteItem} />
          ))}
        </Box>
      )}
    </>
  );
};
