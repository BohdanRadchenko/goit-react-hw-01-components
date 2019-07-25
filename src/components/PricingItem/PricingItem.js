import React from 'react';
import PropTypes from 'prop-types';
import style from './PricingItem.module.css';

const PricingItem = ({ label, icon, capacity, price, description, color }) => {
  return (
    <>
      <div className={style.pricingItem}>
        {/* <img className={style.icon} src={icon} alt="images" /> */}
        <i
          className={style.icons}
          style={{ backgroundImage: `url(${icon})` }}
        />
        <h2 className={style.label}>{label}</h2>
        <p className={style.capacity}>{capacity}</p>
        <p className={style.description}>{description}</p>
        <p className={style.price}>${price}/MO</p>
        <button
          type="button"
          className={style.button}
          style={{ backgroundColor: color }}
        >
          Get Started
        </button>
      </div>
    </>
  );
};

PricingItem.defaultProps = {
  color: '#c0c0c0',
};

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default PricingItem;
