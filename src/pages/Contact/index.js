import React, { Component } from 'react'

export default class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="page-contact">
        <div className="container contact-wrapper" id="top">
          <div class="row">
            <div class="col-lg-6 col-sm-6 col-6">
              <a href="tel:025499172" target="blank">
                <img alt="call" src="/images/icon/contact-call1.png"/>
              </a>
            </div>
            <div class="col-lg-6 col-sm-6 col-6">
              <a href="tel:1175" target="blank">
                <img alt="call" src="/images/icon/contact-call2.png"/>
              </a>
            </div>
            <div class="col-lg-6 col-sm-6 col-6">
              <a href="https://lin.ee/3qY2SjL" target="blank">
                <img alt="call" src="/images/icon/contact-line.png"/>
              </a>
            </div>
            <div class="col-lg-6 col-sm-6 col-6">
              <a href="https://www.facebook.com/%E0%B9%80%E0%B8%99%E0%B9%87%E0%B8%97%E0%B9%84%E0%B8%9F%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99-%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%94-Ais-Fibre-113351610997425" target="blank">
                <img alt="call" src="/images/icon/contact-facebook.png"/>
              </a>
            </div>
            <div class="col-lg-6 col-sm-6 col-6">
              <a href="https://www.instagram.com/aisfibre59/" target="blank">
                <img alt="call" src="/images/icon/contact-instragram.png"/>
              </a>
            </div>
            <div class="col-lg-6 col-sm-6 col-6">
              <a href="https://twitter.com/aisfibre59" target="blank">
                <img alt="call" src="/images/icon/contact-twitter.png"/>
              </a>
            </div>
          </div>
          <div class="contact-support">
            แจ้งปัญหาในการใช้งานอินเทอร์เน็ต/การตั้งค่า ติดต่อ <a href="tel:1175" target="blank">1175</a>
          </div>
          <div></div>
        </div>
      </div>
    )
  }
}
