import React, { Component } from 'react'
import Slider from 'react-slick'

export default class EventBanner extends Component {
  render() {
    function SampleNextArrow(props) {
      const { className, style, onClick } = props
      return (
        <div
          className={className}
          style={{ ...style, display: 'block' }}
          onClick={onClick}
        />
      )
    }
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props
      return (
        <div
          className={className}
          style={{ ...style, display: 'block' }}
          onClick={onClick}
        />
      )
    }
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      className: 'center',
      centerMode: true,
      arrows: true,
      centerPadding: '60px',
      speed: 500,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <div className="package eventBanner">
        <Slider {...settings} className="slider-package">
          <div className="nav-img">
            <img src="/images/covid/covid1.jpeg"/>
          </div>
          <div className="nav-img">
            <img src="/images/covid/covid2.jpeg"/>
          </div>
          <div className="nav-img">
            <img src="/images/covid/covid3.jpeg"/>
          </div>
          <div className="nav-img">
            <img src="/images/covid/covid4.jpeg"/>
          </div>
          <div className="nav-img">
            <img src="/images/covid/covid5.jpeg"/>
          </div>
        </Slider>
      </div>
    )
  }
}
