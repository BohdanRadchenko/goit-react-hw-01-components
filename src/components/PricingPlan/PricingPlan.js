import React from 'react';
import PropTypes from 'prop-types';
import style from './PricingPlan.module.css';
import PricingItem from '../PricingItem/PricingItem';

const PricingPlan = ({ pricingPlan }) => {
  return (
    <>
      <ul className={style.pricingPlan}>
        {pricingPlan.map(el => (
          <li className={style.pricingItem} key={el.id}>
            <PricingItem {...el} />
          </li>
        ))}
      </ul>
    </>
  );
};

PricingPlan.propTypes = {
  pricingPlan: PropTypes.instanceOf(Array).isRequired,
};

export default PricingPlan;
