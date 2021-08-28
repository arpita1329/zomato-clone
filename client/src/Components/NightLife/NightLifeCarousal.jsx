import React from "react";
import Slider from "react-slick";

// Components
import PictureCarousalCard from "../PictureCarousal";
import {NextArrow, PrevArrow} from "../CarousalArrow";

const NightLifeCarousal = () => {
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="w-full">
            <Slider { ...settings}>
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
            </Slider>
        </div>
    );
};

export default NightLifeCarousal;