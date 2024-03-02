import React from 'react';
import styles from "../../styles/news.module.css";

const Item = ({item}) => {
    return (
        <div className={styles.item}>
            <img src={item.image} alt=""/>
            <h2>{item.title}</h2>
        </div>
    );
};

export default Item;