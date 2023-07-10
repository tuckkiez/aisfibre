/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import Slider from 'react-slick'
import { NavLink } from 'react-router-dom'
export default class TopBanner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false
    }
    return (
      // <div className="top-banner">
      //   <img src="/images/topbanner/fibre_branding_1600x500.png"/>
      // </div>
      <div className="top-banner">
        <Slider {...settings}>
          <NavLink to="/">
            <picture>
              <img alt="aisfibre" src="/images/home/slide2.jpeg"/>
            </picture>
          </NavLink>
          <NavLink to="/">
            <picture>
              <img alt="aisfibre" src="/images/home/slide1.jpeg"/>
            </picture>
          </NavLink>
          <NavLink to="/power4">
            <picture>
              <img alt="aisfibre" src="/images/home/AIS_Fibre_Branding_Banner_Jul_Hero_Official_1600x500_TH.jpeg"/>
            </picture>
          </NavLink>
          <NavLink to="/broadband">
            <picture>
              <img alt="aisfibre" src="/images/home/1630476593842.jpeg"/>
            </picture>
          </NavLink>
        </Slider>
      </div>
    )
  }
}
