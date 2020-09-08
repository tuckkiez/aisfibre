import React, { Component } from 'react'
import {Image} from 'cloudinary-react'

export default class Promotions extends Component {
  render() {
    const v = new Date().getTime()
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
              <a href="https://lin.ee/3qY2SjL" target="blank"><img src={`https://res.cloudinary.com/aisfibre59-com/image/upload/v1/banner/promotion/promotion-banner1.jpg?v=${v}`}/></a>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <a href="https://lin.ee/3qY2SjL" target="blank"><img src={`https://res.cloudinary.com/aisfibre59-com/image/upload/v1/banner/promotion/promotion-banner2.jpg?v=${v}`}/></a>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <a href="https://lin.ee/3qY2SjL" target="blank"><img src={`https://res.cloudinary.com/aisfibre59-com/image/upload/v1/banner/promotion/promotion-banner3.jpg?v=${v}`}/></a>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <a href="https://lin.ee/3qY2SjL" target="blank"><img src={`https://res.cloudinary.com/aisfibre59-com/image/upload/v1/banner/promotion/promotion-banner4.jpg?v=${v}`}/></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
