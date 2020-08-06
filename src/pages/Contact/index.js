import React, { Component } from 'react'
import {Image} from 'cloudinary-react'

export default class Contact extends Component {
  render() {
    return (
      <div className="page-contact">
        <div className="container contact-wrapper" id="top">
          <div class="row">
            <div class="col-lg-6 col-sm-6 col-6">
              <a href="tel:0924456910" target="blank"><Image cloudName="aisfibre59-com" publicId="icon/contact-call1.png" ></Image></a>
            </div>
            <div class="col-lg-6 col-sm-6 col-6">
              <a href="tel:0924457406" target="blank"><Image cloudName="aisfibre59-com" publicId="icon/contact-call2.png" ></Image></a>
            </div>
            <div class="col-lg-6 col-sm-6 col-6">
              <a href="https://lin.ee/3qY2SjL" target="blank"><Image cloudName="aisfibre59-com" publicId="icon/contact-line.png" ></Image></a>
            </div>
            <div class="col-lg-6 col-sm-6 col-6">
              <a href="https://www.facebook.com/AISfibre59/" target="blank"><Image cloudName="aisfibre59-com" publicId="icon/contact-facebook.png" ></Image></a>
            </div>
            <div class="col-lg-6 col-sm-6 col-6">
              <a href="https://www.instagram.com/aisfibre59/" target="blank"><Image cloudName="aisfibre59-com" publicId="icon/contact-instragram.png" ></Image></a>
            </div>
            <div class="col-lg-6 col-sm-6 col-6">
              <a href="https://twitter.com/aisfibre59" target="blank"><Image cloudName="aisfibre59-com" publicId="icon/contact-twitter.png" ></Image></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
