import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 500px;
  margin-top: 32px;
  background-color: #fff;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 35%) 0px 3px 3px -2px,
    rgb(0 0 0 / 35%) 0px 3px 4px 0px, rgb(0 0 0 / 35%) 0px 1px 8px 0px;

  td,
  th {
    border: 3px solid var(--color-table-border);
  }
`;

export const TransTableHead = styled.thead``;

export const TableHeadRow = styled.tr``;

export const TableHeaderCell = styled.th`
  width: calc(100% / 3);
  padding: 16px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fafafa;
  background-color: var(--color-bg-thead-tr);
`;

export const TableBody = styled.tbody``;

export const TableBodyRow = styled.tr`
  color: var(--color-secondary-text);
  text-align: center;
  font-weight: 500;
  &:nth-child(even) {
    background-color: var(--color-bg-tbody-tr-dif);
  }
`;
export const TableDataType = styled.td`
  padding: 16px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  text-transform: capitalize;
`;

export const TableData = styled.td``;
