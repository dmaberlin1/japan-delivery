import React from 'react';
import styles from './MealItem.module.css'
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    const {name, description, price, id} = props
    const formattedPrice = `$${price.toFixed(2)}`
    return (
      <li className={styles.meal}>
          <div>
              <h3>{name}</h3>
              <div className={styles.description}>{description}</div>
              <div className={styles.price}>{formattedPrice}</div>
          </div>
          <div>
              <MealItemForm id={id}></MealItemForm>
          </div>
      </li>
    );
};

export default MealItem;
