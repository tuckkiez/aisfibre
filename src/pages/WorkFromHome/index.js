import React, { Component } from 'react'
import {Image} from 'cloudinary-react'

export default class Workformhome extends Component {
  render() {
    return (
      <div className="package-detail">
        <section className="banner">
          <picture>
            <source media="(min-width: 640px)" srcset="https://res.cloudinary.com/aisfibre59-com/image/upload/v1596362191/banner/workformhome_1600x500_ilbag4.jpg"/>
            <img src="https://res.cloudinary.com/aisfibre59-com/image/upload/v1596365403/banner/workformhome_1040x1137_ycmbqk.jpg" alt="ais responsive images ais-workfromhome"/>
          </picture>
        </section>
        <div className="container power4-package">
          <div className="packageHead power4">
            <div className="package_h1">
              <div className="package_h1__txt1">Working from Home  </div>
              <div className="package_h1__txt2">Package</div>
            </div>
            <div className="package_h2">
              <div class="package_h2__line"></div>
              <div className="package_h2__txt">เปลี่ยนบ้านให้เป็นโฮมออฟฟิศได้ง่ายๆ</div>
            </div>
          </div>
          <div className="package-banner">
            <Image cloudName="aisfibre59-com" publicId="banner/package/workfromhome/package1.jpg"></Image>
            <div className="wrapper-package">
              <a href="https://lin.ee/3qY2SjL" target="blank"><div className="package-button"><span>สมัคร</span></div></a>
            </div>
          </div>
          <div className="wrapper-speed">
            <Image cloudName="aisfibre59-com" publicId="banner/package/workfromhome/speed.jpg"></Image>
          </div>
        </div>
      </div>
    )
  }
}
