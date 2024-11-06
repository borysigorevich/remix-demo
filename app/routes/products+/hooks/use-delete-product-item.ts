import {useQueryClient} from '@tanstack/react-query';
import {useSnackbar} from 'notistack';
import {useTranslation} from 'react-i18next';

import {useMutationProductsDelete} from '~/services/products';

import {ApiProduct} from '~/api-client/types';

export const useDeleteProductItem = () => {
  const {t} = useTranslation(['common']);

  const {enqueueSnackbar} = useSnackbar();
  const queryClient = useQueryClient();

  const deleteItem = useMutationProductsDelete();

  const doDeleteItem = (item: ApiProduct) => {
    if (!window.confirm(t('common:deleteConfirm', {item: item.title.en || item.title.ar}))) return;

    deleteItem.mutate(
      {id: item.productId},
      {
        onSuccess: async result => {
          result?.meta?.message &&
            enqueueSnackbar({message: result?.meta?.message, variant: 'success'});
          queryClient.invalidateQueries({
            queryKey: ['products'],
          });
        },
        onError: err => {
          enqueueSnackbar({message: err?.message || 'unknown error', variant: 'error'});
        },
      },
    );
  };

  return doDeleteItem;
};
