import React, { Component } from 'react'
import Slider from 'react-slick'

export default class Serenade extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const settings = {
      slidesToShow: 3,
      speed: 500,
      arrows: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            className: 'center',
            centerMode: true,
            infinite: false,
            centerPadding: '60px',
            slidesToShow: 1,
            speed: 500
          }
        },
        {
          breakpoint: 480,
          settings: {
            className: 'center',
            centerMode: true,
            infinite: false,
            centerPadding: '60px',
            slidesToShow: 1,
            speed: 1500
          }
        }
      ]
    }
    return (
      <div className="package-detail">
        <section className="banner" id="banner">
          <picture>
            <img alt="serenade" src="/images/package/serenade_1600x500.jpeg"/>
          </picture>
        </section>
        <div className="container power4-package">
          <div class="packageHead power4">
            <div class="package_h1">
              <div class="package_h1__txt1">Serenade </div>
              <div class="package_h1__txt2">Package</div>
            </div>
            <div class="package_h2">
              <div class="package_h2__line"></div>
              <div class="package_h2__txt">แพ็กเกจเน็ต พร้อมความบันเทิงผ่านกล่อง AIS PLAYBOX</div>
            </div>
          </div>
          <Slider {...settings}>
            <div>
              <img alt="power4special" src="/images/serenade/serenade1.jpg"/>
              <div className="wrapper-package">
                <a href="https://lin.ee/3qY2SjL" target="blank"><div className="package-button"><span>สมัคร</span></div></a>
              </div>
            </div>
            
            <div className="d-none"/>
          </Slider>
          <div className="wrapper-speed serenade-speed">
            <img alt="power4special" src="/images/serenade/speed-serenade.jpg"/>
          </div>
        </div>
      </div>
    )
  }
}
