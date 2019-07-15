import React, { Fragment } from 'react';
import Profile from './Profile/Profile';
import profile from '../assets/profile.json';
import Stats from './Stats/Stats';
import stats from '../assets/stats.json';
import PricingPlan from './PricingPlan/PricingPlan';
import pricingPlanItem from '../assets/pricing-plan.json';

const App = () => {
  return (
    <Fragment>
      <Profile profile={profile} />
      <Stats stats={stats} />
      <PricingPlan pricingPlan={pricingPlanItem} />
    </Fragment>
  );
};

export default App;
