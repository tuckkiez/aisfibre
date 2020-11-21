import React, { Component } from 'react'
import {Image} from 'cloudinary-react'

export default class Esport extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="package-detail e-sport">
        <section className="banner">
          <picture>
            <source media="(min-width: 640px)" srcset="https://res.cloudinary.com/aisfibre59-com/image/upload/banner/package/eSport_1600x500.jpg"/>
            <Image cloudName="aisfibre59-com" publicId="banner/package/eSport_1040x1137.jpg" ></Image>
          </picture>
        </section>
        <div className="container power4-package">
          <Image cloudName="aisfibre59-com" publicId="banner/package/e-sport/esport-game.jpg"></Image>
          <Image cloudName="aisfibre59-com" publicId="banner/package/e-sport/esport-package.jpg"></Image>
          <div className="wrapper-button-esport">
            <a href="https://lin.ee/3qY2SjL" target="blank"><div className="package-button"><span>สมัคร</span></div></a>
            <a href="https://lin.ee/3qY2SjL" target="blank"><div className="package-button"><span>สมัคร</span></div></a>
            <a href="https://lin.ee/3qY2SjL" target="blank"><div className="package-button"><span>สมัคร</span></div></a>
          </div>
          <Image cloudName="aisfibre59-com" publicId="banner/package/e-sport/add100-th-esport.jpg"></Image>
          <Image cloudName="aisfibre59-com" publicId="banner/package/e-sport/esport-speed.jpg"></Image>
        </div>
      </div>
    )
  }
}
