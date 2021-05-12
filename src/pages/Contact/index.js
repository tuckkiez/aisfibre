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
              <a href="tel:0924456910" target="blank">
                <img alt="call" src="/images/icon/contact-call1.png"/>
              </a>
            </div>
            <div class="col-lg-6 col-sm-6 col-6">
              <a href="tel:0924457406" target="blank">
                <img alt="call" src="/images/icon/contact-call2.png"/>
              </a>
            </div>
            <div class="col-lg-6 col-sm-6 col-6">
              <a href="https://lin.ee/3qY2SjL" target="blank">
                <img alt="call" src="/images/icon/contact-line.png"/>
              </a>
            </div>
            <div class="col-lg-6 col-sm-6 col-6">
              <a href="https://www.facebook.com/AISfibre59/" target="blank">
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
          แจ้งปัญหาอินเทอร์เน็ต/ตั้งค่า ติดต่อที่เบอร์ <a href="tel:1175" target="blank">1175</a></div>
        </div>
      </div>
    )
  }
}
