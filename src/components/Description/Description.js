import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.module.css';

const Description = ({ users }) => (
  <div>
    <img className={styles.avatar} src={users.avatar} alt={users.alt} />
    <p className={styles.name}>{users.name}</p>
    <p className={styles.tag}>{users.tag}</p>
    <p className={styles.location}>{users.location}</p>
  </div>
);

Description.propTypes = {
  users: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    alt: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};
export default Description;
