import React, {useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/banner.module.css"

const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [images, setImages] = useState([
        {id: 1, image: "https://eua.am/storage/images/aEiKa78nh8fq4fqGiKShAsEH732tTdqqNfM3MFLG.jpg"},
        {id: 2, image: "https://eua.am/storage/images/aEiKa78nh8fq4fqGiKShAsEH732tTdqqNfM3MFLG.jpg"},
        {id: 3, image: "https://eua.am/storage/images/aEiKa78nh8fq4fqGiKShAsEH732tTdqqNfM3MFLG.jpg"},
    ])
    return (
        <div className={styles.banner}>
            <Slider {...settings}>
                {images.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt=""/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;