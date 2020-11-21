import React, { Component } from 'react'
import Slider from 'react-slick'
import {Image} from 'cloudinary-react'

export default class Serenade extends Component {
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
        <section className="banner" id="banner">
          <picture>
            <source media="(min-width: 640px)" srcset="https://res.cloudinary.com/aisfibre59-com/image/upload/banner/package/serenade_1600x500.jpg"/>
            <Image cloudName="aisfibre59-com" publicId="banner/package/serenade_1040x1137.jpg" ></Image>
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
              <Image cloudName="aisfibre59-com" publicId="banner/package/serenade/serenade1.jpg" ></Image>
              <div className="wrapper-package">
                <a href="https://lin.ee/3qY2SjL" target="blank"><div className="package-button"><span>สมัคร</span></div></a>
              </div>
            </div>
            <div >
              <Image cloudName="aisfibre59-com" publicId="banner/package/serenade/serenade2.jpg" ></Image>
              <div className="wrapper-package">
                <a href="https://lin.ee/3qY2SjL" target="blank"><div className="package-button"><span>สมัคร</span></div></a>
              </div>
            </div>
            <div className="d-none"/>
          </Slider>
          <div className="wrapper-speed serenade-speed">
            <Image cloudName="aisfibre59-com" publicId="banner/package/serenade/serenade_add100.jpg"></Image>
            <Image cloudName="aisfibre59-com" publicId="banner/package/serenade/speed-serenade.jpg"></Image>
          </div>
        </div>
      </div>
    )
  }
}
