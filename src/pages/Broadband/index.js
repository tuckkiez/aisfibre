import React, { Component } from 'react'
import Slider from 'react-slick'

export default class Broadband extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const settings = {
      slidesToShow: 3,
      speed: 500,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            className: 'center',
            centerMode: true,
            infinite: true,
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
            infinite: true,
            centerPadding: '60px',
            slidesToShow: 1,
            speed: 1500
          }
        }
      ]
    }
    return (
      <div className="package-detail">
        <section className="banner">
          <picture>
            <img alt="200mb" src="/images/package/200m_1600x500.jpeg"/>
          </picture>
        </section>
        <div className="container power4-package">
          <div class="packageHead power4">
            <div class="package_h1">
              <div class="package_h1__txt1">BROADBAND </div>
              <div class="package_h1__txt2">Package</div>
            </div>
            <div class="package_h2">
              <div class="package_h2__line"></div>
              <div class="package_h2__txt">เน็ตบ้านคุณภาพ แรงสะใจ ด้วยไฟเบอร์ออพติก 100%</div>
            </div>
          </div>
          <Slider {...settings}>
            <div>
              <img alt="200mb" src="/images/broadband/package1.jpg"/>
              <div className="wrapper-package">
                <a href="https://lin.ee/3qY2SjL" target="blank"><div className="package-button"><span>สมัคร</span></div></a>
              </div>
            </div>
            <div >
              <img alt="200mb" src="/images/broadband/package2.jpg"/>
              <div className="wrapper-package">
                <a href="https://lin.ee/3qY2SjL" target="blank"><div className="package-button"><span>สมัคร</span></div></a>
              </div>
            </div>
            <div className="d-none"/>
          </Slider>
          <div className="wrapper-speed">
            <img alt="200mb" src="/images/broadband/speed.jpg"/>
          </div>
          <div className="wrapper-speed">
            <img alt="200mb" src="/images/broadband/banner2.jpg"/>
          </div>
        </div>
      </div>
    )
  }
}
