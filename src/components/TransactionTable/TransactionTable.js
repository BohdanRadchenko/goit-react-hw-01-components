import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionTable.module.css';

const TransactionTable = ({ type, amount, currency }) => {
  return (
    <>
      <td className={styles.type}>{type}</td>
      <td className={styles.td}>{amount}</td>
      <td className={styles.td}>{currency}</td>
    </>
  );
};

TransactionTable.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionTable;
