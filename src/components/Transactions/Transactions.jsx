import PropTypes from 'prop-types';

import {
  TableBody,
  TableBodyRow,
  TableData,
  TableDataType,
  TableHeaderCell,
  TableHeadRow,
  TransactionTable,
  TransTableHead,
} from './Transactions.styled';

const Transactions = ({ items }) => {
  return (
    <TransactionTable>
      <TransTableHead>
        <TableHeadRow>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </TableHeadRow>
      </TransTableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableBodyRow key={id}>
            <TableDataType>{type}</TableDataType>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableBodyRow>
        ))}
      </TableBody>
    </TransactionTable>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Transactions;
