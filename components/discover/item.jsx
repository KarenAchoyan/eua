import React from 'react';
import styles from "../../styles/discover.module.css";

const Item = ({item}) => {
    return (
        <div className={styles.item}>
            <img src={item.image} alt=""/>
            <div className={styles.overline}>
                <h5>{item.title}</h5>
            </div>
        </div>
    );
};

export default Item;