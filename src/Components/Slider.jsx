import React, { Component } from "react";
import './Slider.css';
import Slider from "react-slick";


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
        };

    return (
      <div>
        <div className="jumbotron-fluid">
          <Slider {...settings}>
            <div className="slider-image-1 slick-slide" style="display: inline-block">
              <h3>1</h3>
            </div>
            <div className=" slider-image-2 slick-slide" style="display: inline-block">
              <h3>2</h3>
            </div>
            <div className="slider-image-1 slick-slide" style="display: inline-block">
              <h3>3</h3>
            </div>
            <div className=" slider-image-2 slick-slide" style="display: inline-block">
              <h3>4</h3>
            </div>
            <div className="slider-image-1 slick-slide" style="display: inline-block">
              <h3>5</h3>
            </div>
            <div className=" slider-image-2 slick-slide" style="display: inline-block">
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
      );
    }
}