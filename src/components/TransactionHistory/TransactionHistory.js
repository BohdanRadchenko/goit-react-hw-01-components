import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import TransactionTable from '../TransactionTable/TransactionTable';

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.container}>
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(el => (
            <tr key={el.id}>
              <TransactionTable {...el} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default TransactionHistory;
