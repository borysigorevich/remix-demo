import {Paper, Table, TableBody, TableContainer} from '@mui/material';

import {TableRowEmpty} from '~/global/components/table-row-empty';

import {ApiProduct} from '~/api-client/types';
import {useDeleteProductItem} from '~/routes/products+/hooks/use-delete-product-item';

import {ProductsTableHead} from './table-head';
import {ProductsTableRow} from './table-row';
import {ProductsTableRowSkeleton} from './table-row-skeleton';

export const ProductsTable = ({data, isLoading}: {data?: ApiProduct[]; isLoading: boolean}) => {
  const doDeleteItem = useDeleteProductItem();

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}}>
        <ProductsTableHead />
        <TableBody>
          {isLoading ? (
            <ProductsTableRowSkeleton />
          ) : !data?.length ? (
            <TableRowEmpty actionURL="/products/create" colSpan={4} />
          ) : (
            data?.map(row => (
              <ProductsTableRow key={row.productId} row={row} doDeleteItem={doDeleteItem} />
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
