import React from 'react';
import cartIcon from '../../assets/img/icons/cart-4-svgrepo-com.svg'
import styles from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
    return (
      <button className={styles.button}>
          <span className={styles.icon}><img src={cartIcon} alt="cartIcon"/></span>
          <span>Cart</span>
          <span className={styles.badge}>0</span>
      </button>
    );
};

export default HeaderCartButton;
