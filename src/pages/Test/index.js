import React, { Component } from 'react'
import {Image} from 'cloudinary-react'

export default class Test extends Component {
  render() {
    return (
      <div className="page-contact">
        <div className="container contact-wrapper" id="top">
          <div class="row">
            <div class="col-lg-6 col-sm-6 col-6">
              <Image cloudName="aisfibre59-com" publicId="test/test2.jpg"></Image>
            </div>
            <div class="col-lg-6 col-sm-6 col-6">
              <Image cloudName="aisfibre59-com" publicId="test/test1.jpg"></Image>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
