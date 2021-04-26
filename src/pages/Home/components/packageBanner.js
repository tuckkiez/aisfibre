import React, { Component } from 'react'
import Slider from 'react-slick'
import { NavLink } from 'react-router-dom'

export default class PackageBanner extends Component {
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
      speed: 1000,
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
      <div className="package">
        <div class="section_head">
          <a>
            <div class="txt_sm txt_bef">แพ็กเกจ</div>
            <div class="txt_big txt_aft_big">PACKAGE</div>
          </a>
        </div>
        <Slider {...settings} className="slider-package">
          <div className="nav-img">
            <NavLink to="/power4" activeClassName="is-active" className="navbar-item">
              <img alt="aisfibre-package1" src="/images/package/package1.jpeg"/>
            </NavLink>
          </div>
          <div className="nav-img">
            <NavLink to="/broadband" activeClassName="is-active" className="navbar-item">
              <img alt="aisfibre-package3" src="/images/package/package3.jpeg"/>
            </NavLink>
          </div>
          <div className="nav-img">
            <NavLink to="/e-sport" activeClassName="is-active" className="navbar-item">
              <img alt="aisfibre-package4" src="/images/package/package4.jpeg"/>
            </NavLink>
          </div>
          <div className="nav-img">
            <NavLink to="/serenade" activeClassName="is-active" className="navbar-item">
              <img alt="aisfibre-package5" src="/images/package/package5.jpeg"/>
            </NavLink>
          </div>
        </Slider>
      </div>
    )
  }
}
