import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserStats.module.css';

const UserStats = ({ users }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.followersText}>Followers</span>
        <span className={styles.followersCount}>{users.stats.followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.viewsText}>Views</span>
        <span className={styles.viewsCount}>{users.stats.views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.likesText}>Likes</span>
        <span className={styles.likesCount}>{users.stats.likes}</span>
      </li>
    </ul>
  );
};

UserStats.propTypes = {
  users: PropTypes.shape({
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
export default UserStats;
