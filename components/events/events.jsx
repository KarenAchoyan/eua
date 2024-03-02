import React, {useState} from 'react';
import styles from "../../styles/events.module.css"
import Item from "./item";
import Image from "next/image";
import Slider from "react-slick";
const Events = () => {
    const [events, setEvents] = useState([
        {id:1, title:"Մշտադիտարկում՝ Հայաստանի եվրոպական համալսարանում"},
        {id:2, title:"Մշտադիտարկում՝ Հայաստանի եվրոպական համալսարանում"},
        {id:3, title:"Մշտադիտարկում՝ Հայաստանի եվրոպական համալսարանում"},
        {id:4, title:"Մշտադիտարկում՝ Հայաստանի եվրոպական համալսարանում"},
        {id:5, title:"Մշտադիտարկում՝ Հայաստանի եվրոպական համալսարանում"},
        {id:6, title:"Մշտադիտարկում՝ Հայաստանի եվրոպական համալսարանում"},

    ])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <Image width={20} height={20} alt='arrow' src={'/left-arrow.png'}/>,
        nextArrow: <Image  width={20} height={20} alt='arrow' src={'/right-arrow.png'}/>,
    };
    return (
        <div className={styles.container}>
            <h1>Իրադարձություններ</h1>
            <Slider {...settings}>
                {events.map((item) => (
                    <Item item={item} key={item.id}/>
                ))}
            </Slider>
        </div>
    );
};

export default Events;