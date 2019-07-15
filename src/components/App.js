import React, { Fragment } from 'react';
import Profile from './Profile/Profile';
import profile from '../assets/profile.json';
import Stats from './Stats/Stats';
import stats from '../assets/stats.json';

const App = () => {
  return (
    <Fragment>
      <Profile profile={profile} />
      <Stats stats={stats} />
    </Fragment>
  );
};

export default App;
