import React, { Component } from 'react'
import Slider from 'react-slick'
import {Image} from 'cloudinary-react'

export default class Power4 extends Component {
  render() {
    const settings = {
      slidesToShow: 3,
      speed: 500,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
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
        <section className="banner">
          <picture>
            <source media="(min-width: 640px)" srcset="https://res.cloudinary.com/aisfibre59-com/image/upload/banner/package/power4special_1600x500.jpg"/>
            <Image cloudName="aisfibre59-com" publicId="banner/package/power4special_1040x1137.png" ></Image>
          </picture>
        </section>
        <div className="container power4-package">
          <div class="packageHead power4">
            <div class="package_h1">
              <div class="package_h1__txt1">POWER4 Special </div>
              <div class="package_h1__txt2">Package</div>
            </div>
            <div class="package_h2">
              <div class="package_h2__line"></div>
              <div class="package_h2__txt">เร็ว แรง คุ้มเต็มแมกซ์ ทั้งเน็ตบ้านและเน็ตมือถือ</div>
            </div>
          </div>
          <Slider {...settings}>
            <div>
              <Image cloudName="aisfibre59-com" publicId="banner/package/power4/power4-1.jpg"></Image>
              <div className="wrapper-package">
                <a href="https://lin.ee/3qY2SjL" target="blank"><div className="package-button"><span>สมัคร</span></div></a>
              </div>
            </div>
            <div >
              <Image cloudName="aisfibre59-com" publicId="banner/package/power4/power4-2.jpg"></Image>
              <div className="wrapper-package">
                <a href="https://lin.ee/3qY2SjL" target="blank"><div className="package-button"><span>สมัคร</span></div></a>
              </div>
            </div>
            <div>
              <Image cloudName="aisfibre59-com" publicId="banner/package/power4/power4-3.jpg"></Image>
              <div className="wrapper-package">
                <a href="https://lin.ee/3qY2SjL" target="blank"><div className="package-button"><span>สมัคร</span></div></a>
              </div>
            </div>
          </Slider>
          <div className="wrapper-speed">
            <Image cloudName="aisfibre59-com" publicId="banner/package/power4/speed.jpg" ></Image>
          </div>
        </div>
      </div>
    )
  }
}
