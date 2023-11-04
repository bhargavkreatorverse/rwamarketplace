import React, { useState } from 'react';
import Slider from 'react-slick';
import PropertiesCard from '../../atoms/propertiescard/PropertiesCard';
import styles from './PropertiesContainer.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PropertiesContainer = () => {
    // const settings = {
    //     dots: false,
    //     infinite: false,
    //     arrows: true,
    //     speed: 500,
    //     autoplay: false,
    //     className: 'slider',
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //             },
    //         },
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 2.1,
    //                 slidesToScroll: 1,
    //             },
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1.4,
    //                 slidesToScroll: 1,
    //             },
    //         },
    //         {
    //             breakpoint: 376,
    //             settings: {
    //                 slidesToShow: 1.2,
    //                 slidesToScroll: 1,
    //             },
    //         },
    //     ],
    // };

    // const [slider, setSlider] = useState(null);

    // const next = () => {
    //     slider.slickNext();
    // };

    // const previous = () => {
    //     slider.slickPrev();
    // };

    return (
        <div className={styles.propertiesContainer}>
            {/* <Slider ref={(c) => setSlider(c)} {...settings}> */}
                <PropertiesCard />
                <PropertiesCard />
                <PropertiesCard />
                <PropertiesCard />
                <PropertiesCard />
                <PropertiesCard />
                <PropertiesCard />
                <PropertiesCard />
            {/* </Slider> */}
            {/* <div style={{ textAlign: 'center' }}>
                <button className="button" onClick={previous}>
                    Previous
                </button>
                <button className="button" onClick={next}>
                    Next
                </button>
            </div> */}
        </div>
    );
};

export default PropertiesContainer;
