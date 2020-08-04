import React, { Component } from 'react'
import Slider from 'react-slick'
import { NavLink } from 'react-router-dom'
import {Image} from 'cloudinary-react'

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
      <div className="package-top-banner">
        <Slider {...settings}>
          <NavLink to="/power4">
            <picture>
              <source media="(min-width: 640px)" srcset="https://res.cloudinary.com/aisfibre59-com/image/upload/banner/package/power4special_1600x500.jpg"/>
              <Image cloudName="aisfibre59-com" publicId="banner/package/power4special_1040x1137.png" ></Image>
            </picture>
          </NavLink>
          <NavLink to="/workfromhome">
            <picture>
              <source media="(min-width: 640px)" srcset="https://res.cloudinary.com/aisfibre59-com/image/upload/banner/package/workformhome_1600x500.jpg"/>
              <Image cloudName="aisfibre59-com" publicId="banner/package/workformhome_1040x1137.jpg" ></Image>
            </picture>
          </NavLink>
          <NavLink to="/broadband">
            <picture>
              <source media="(min-width: 640px)" srcset="https://res.cloudinary.com/aisfibre59-com/image/upload/banner/package/200m_1600x500.jpg"/>
              <Image cloudName="aisfibre59-com" publicId="banner/package/200m_1040x1137.jpg" ></Image>
            </picture>
          </NavLink>
          <NavLink to="/e-sport">
            <picture>
              <source media="(min-width: 640px)" srcset="https://res.cloudinary.com/aisfibre59-com/image/upload/banner/package/eSport_1600x500.jpg"/>
              <Image cloudName="aisfibre59-com" publicId="banner/package/eSport_1040x1137.jpg" ></Image>
            </picture>
          </NavLink>
          <NavLink to="/serenade">
            <picture>
              <source media="(min-width: 640px)" srcset="https://res.cloudinary.com/aisfibre59-com/image/upload/banner/package/serenade_1600x500.jpg"/>
              <Image cloudName="aisfibre59-com" publicId="banner/package/serenade_1040x1137.jpg" ></Image>
            </picture>
          </NavLink>
        </Slider>
      </div>
    )
  }
}
