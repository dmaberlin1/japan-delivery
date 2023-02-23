import React from 'react';
import styles from './Header.module.css'
import sushi from '../../assets/img/sushi.jpg'
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    const {onHideCart,onShowCart}=props
    //on  because its name of customs  event

    return (
      <>
       <header className={styles.header}><h1>Japan delivery</h1></header>

          <HeaderCartButton/>
       <div className={styles['mainImage']}><img src={sushi} alt="sushi"/></div>
      </>
    );
};

export default Header;
