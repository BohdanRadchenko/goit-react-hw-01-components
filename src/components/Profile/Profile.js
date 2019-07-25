import React from 'react';
import PropTypes from 'prop-types';
import Description from '../Description/Description';
import UserStats from '../UserStats/UserStats';

import styles from './Profile.module.css';

const Profile = ({ profile }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <Description users={profile} />
        <UserStats users={profile} />
      </div>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.instanceOf(Object).isRequired,
};

export default Profile;
