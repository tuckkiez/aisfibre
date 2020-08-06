import React, { Component } from 'react'
import {Image} from 'cloudinary-react'

export default class Promotions extends Component {
  render() {
    return (
      <div className="promotions-banner">
        <div className="container promotions-wrapper" id="top">
          <div class="section_head">
            <a>
              <div class="txt_sm txt_bef">โปรโมชั่นประจำเดือน</div>
              <div class="txt_big txt_aft_big">Promotion</div>
            </a>
          </div>
          <div class="row">
            <div class="col-lg-6 col-sm-12 col-12">
              <a href="https://lin.ee/3qY2SjL" target="blank"><Image cloudName="aisfibre59-com" publicId="banner/promotion/promotion-banner1.jpg" ></Image></a>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <a href="https://lin.ee/3qY2SjL" target="blank"><Image cloudName="aisfibre59-com" publicId="banner/promotion/promotion-banner2.jpg" ></Image></a>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <a href="https://lin.ee/3qY2SjL" target="blank"><Image cloudName="aisfibre59-com" publicId="banner/promotion/promotion-banner3.jpg" ></Image></a>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <a href="https://lin.ee/3qY2SjL" target="blank"><Image cloudName="aisfibre59-com" publicId="banner/promotion/promotion-banner4.jpg" ></Image></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
