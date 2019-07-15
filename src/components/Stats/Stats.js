import React from 'react';
import PropTypes from 'prop-types';
import gen from 'color-generator';
import styles from './Stats.module.css';

const Stats = ({ title, stats }) => {
  return (
    <div className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.list}>
        {stats.map(el => (
          <li
            key={el.id}
            className={styles.item}
            style={{ backgroundColor: gen(0.8, 0.25).hexString() }}
          >
            <span className={styles.label}>{el.label}</span>
            <span className={styles.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;
