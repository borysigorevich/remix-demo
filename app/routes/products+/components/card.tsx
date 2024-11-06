import {formatRelative} from 'date-fns';
import {useTranslation} from 'react-i18next';

import {DeleteOutline} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';

import {AppButton} from '~/global/components/app-button';

import {ApiProduct} from '~/api-client/types';

type ProductCardProps = {
  product: ApiProduct;
  doDeleteItem: (item: ApiProduct) => void;
};

export const ProductCard = ({product, doDeleteItem}: ProductCardProps) => {
  const {t} = useTranslation(['products', 'common']);

  const title = product?.title.en || product?.title.ar;

  return (
    <Card
      sx={{
        border: '1px solid rgba(0,0,0,0.1)',
      }}
    >
      <CardMedia
        image={product.image || '/no-image.jpg'}
        height={140}
        component="img"
        sx={{
          m: '-16px',
          width: 'calc(100% + 32px)',
          objectFit: 'cover',
        }}
      />
      <CardContent
        sx={{
          '&.MuiCardContent-root': {
            pb: 2,
          },
          mt: 2,
        }}
      >
        <Typography
          component="p"
          title={title}
          fontWeight={700}
          fontSize={16}
          lineHeight={1.35}
          overflow="hidden"
          textOverflow="ellipsis"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {title}
        </Typography>

        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
          <Stack direction="row" alignItems="center" gap={1}>
            <Typography color="black" variant="caption" fontSize={18} fontWeight={700}>
              {product.price ? '$' + Number(product.price).toLocaleString() : '---'}
            </Typography>
            <Typography
              variant="caption"
              color="black"
              fontSize={12}
              sx={{
                textDecoration: 'line-through',
              }}
            >
              {product.priceSale ? '$' + Number(product.priceSale).toLocaleString() : '---'}
            </Typography>
          </Stack>
          {product.isActive ? (
            <Typography variant="caption" color="success" mt={1} display="inline-block">
              {t('common:active')}
            </Typography>
          ) : null}
        </Stack>

        <Box mt={1}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="caption" color="textDisabled">
              {t('common:createdAt')}
            </Typography>
            <Typography variant="caption" color="textPrimary">
              {formatRelative(new Date(product.createdAt), new Date())}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="caption" color="textDisabled">
              {t('common:updatedAt')}
            </Typography>
            <Typography variant="caption" color="textPrimary">
              {product.updatedAt && product.updatedAt !== product.createdAt
                ? formatRelative(new Date(product.updatedAt), new Date())
                : '---'}
            </Typography>
          </Stack>
        </Box>
      </CardContent>
      <CardActions>
        <Stack width="100%" direction="row-reverse" justifyContent="space-between">
          <AppButton to={`/products/${product.productId}`} variant="contained" size="small">
            {t('common:edit')}
          </AppButton>
          <Button variant="text" onClick={() => doDeleteItem(product)} size="small">
            <DeleteOutline />
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};
