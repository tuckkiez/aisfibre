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
      <div className="package-top-banner">
        <Slider {...settings}>
          <NavLink to="/power4">
            <picture>
              <img alt="power4special" src="/images/package/power4special_1600x500.jpeg"/>
            </picture>
          </NavLink>
          {/*<NavLink to="/workfromhome">
            <picture>
              <img alt="workformhome" src="/images/package/workformhome_1600x500.jpeg"/>
            </picture>
          </NavLink>
    */}
          <NavLink to="/broadband">
            <picture>
              <img alt="200mb" src="/images/package/200m_1600x500.jpeg"/>
            </picture>
          </NavLink>
          <NavLink to="/e-sport">
            <picture>
              <img alt="eSport" src="/images/package/eSport_1600x500.jpeg"/>
            </picture>
          </NavLink>
          <NavLink to="/serenade">
            <picture>
              <img alt="serenade" src="/images/package/serenade_1600x500.jpeg"/>
            </picture>
          </NavLink>
        </Slider>
      </div>
    )
  }
}
