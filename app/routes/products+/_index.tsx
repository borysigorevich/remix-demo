import type {MetaFunction} from '@remix-run/node';
import {redirect} from '@remix-run/react';
import {useTranslation} from 'react-i18next';

import {Stack} from '@mui/material';

import {useQueryProductsList} from '~/services/products';

import {AppButton} from '~/global/components/app-button';
import {SkeletonOnLoading} from '~/global/components/skeleton-on-loading';

import {ProductsCardGrid} from '~/routes/products+/components/card-grid';
import {ProductsViewSwitcher} from '~/routes/products+/components/view-switcher';

import {ProductsTable} from './components/table';

export const handle = {i18n: ['common', 'products']};
export const meta: MetaFunction = () => [{title: 'Remix App - Products'}];

export const clientLoader = async () => {
  if (!window.localStorage.getItem('_at')) return redirect('/');

  return null;
};

export default function Products() {
  const {t} = useTranslation(['common']);
  const {data, isLoading} = useQueryProductsList();

  return (
    <>
      <Stack alignItems="flex-end" my={2}>
        <SkeletonOnLoading isLoading={isLoading}>
          <AppButton to="/products/create" variant="contained">
            {t('common:create')}
          </AppButton>
        </SkeletonOnLoading>
      </Stack>

      <ProductsViewSwitcher
        desktop={<ProductsTable data={data?.result} isLoading={isLoading} />}
        mobile={<ProductsCardGrid data={data?.result} isLoading={isLoading} />}
      />
    </>
  );
}
