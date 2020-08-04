import React, { Component } from 'react'
import {Image} from 'cloudinary-react'

export default class TopBanner extends Component {
  render() {
    return (
      <div className="top-banner">
        <picture>
          <source media="(min-width: 640px)" srcset="https://res.cloudinary.com/aisfibre59-com/image/upload/banner/fibre_branding_1600x500.png"/>
          <Image cloudName="aisfibre59-com" publicId="banner/fibre_branding_1040x1137.jpg" ></Image>
        </picture>
      </div>
    )
  }
}
