/*eslint-disable*/
import React, { Fragment } from 'react';
import Profile from './Profile/Profile';
import profile from '../assets/profile.json';
import Stats from './Stats/Stats';
import stats from '../assets/stats.json';
import PricingPlan from './PricingPlan/PricingPlan';
import pricingPlanItem from '../assets/pricing-plan.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../assets/transactions.json';

const App = () => {
  return (
    <Fragment>
      <Profile profile={profile} />
      <Stats stats={stats} title="Upload stats" />
      <PricingPlan pricingPlan={pricingPlanItem} />
      <TransactionHistory items={transactions} />
    </Fragment>
  );
};

export default App;
