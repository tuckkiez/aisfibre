import React, { Component } from 'react'
import {Image} from 'cloudinary-react'

export default class Workformhome extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="package-detail">
        <section className="banner">
          <picture>
            <img alt="workformhome" src="/images/package/workformhome_1600x500.jpeg"/>
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
