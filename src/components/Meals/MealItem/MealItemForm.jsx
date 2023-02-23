import React from 'react';
import styles from 'MealItemForm.module.css'
import Input from "../../UI/Input";
const MealItemForm = (props) => {
    const {id}=props
    return (
      <form className={styles.form}>
          <Input
            label={'amount'}
                 input={
              {
                  id:id,
                  type:'number',
                  min:'1',
                  step:'1',
                  defaultValue:'1'
              }
          }/>
          <button></button>
      </form>
    );
};

export default MealItemForm;
