import React from 'react';
import styles from './PromoText.module.css'
const PromoText = () => {
    return (
      <section className={styles['promo-text']}>
          <h2>Online ordering food in our restaurant</h2>
          <p>
              we have collected the best dishes from Japanese cuisine,
              we cook from fresh and healthy products
          </p>
          <p>We also love to eat tasty, and we understand our visitors😉</p>
      </section>
    );
};

export default PromoText;
