import React, { Component } from 'react'

export default class Promotions extends Component {
  render() {
    const v = new Date().getTime()
    return (
      <div className="promotions-banner">
        <div className="container promotions-wrapper" id="top">
          <div class="section_head">
            <a>
              <div class="txt_sm txt_bef">โปรโมชั่นติดเน็ตบ้าน เอไอเอส ไฟเบอร์
              (AIS FIBRE) สำหรับเดือนนี้</div>
              {/* <div class="txt_big txt_aft_big">Promotion</div> */}
            </a>
          </div>
          <div class="row">
            <div class="col-lg-6 col-sm-12 col-12">
              <a href="https://lin.ee/3qY2SjL" target="blank">
                <img alt="aisfibre promotion" src="/images/promotionBanner/promotion-banner1.jpg"/>
              </a>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <a href="https://lin.ee/3qY2SjL" target="blank">
                <img alt="aisfibre promotion" src="/images/promotionBanner/promotion-banner2.jpg"/>
              </a>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <a href="https://lin.ee/3qY2SjL" target="blank">
                <img alt="aisfibre promotion" src="/images/promotionBanner/promotion-banner3.jpg"/>
              </a>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <a href="https://lin.ee/3qY2SjL" target="blank">
                <img alt="aisfibre promotion" src="/images/promotionBanner/promotion-banner4.jpg"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
