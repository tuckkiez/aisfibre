import React, { Component } from 'react'
export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  componentDidMount() {
    var scrollComponent = this
    document.addEventListener('scroll', function(e) {
      scrollComponent.toggleVisibility()
    })
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        isVisible: true
      })
    } else {
      this.setState({
        isVisible: false
      })
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  render() {
    const { isVisible } = this.state

    return (
      <div >
        <footer class="footer-area">

          <div class="footer-wrapper">
            {isVisible && (
              <div class="backto-top" onClick={() => this.scrollToTop()}>
                <div>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </div>
              </div>
            )
            }
            <div class="row align-items-end row--0">
              <div class="col-lg-6">
                <div class="footer-left">
                  <div class="inner">
                    <span>ตรวจสอบพื้นที่ใช้บริการ
                    </span>
                    <h2>สมัครเอไอเอส<br/> ไฟเบอร์
                    </h2>
                    <a class="rn-button-style--2" href="https://lin.ee/3qY2SjL" target="blank"><span>ติดต่อเรา</span></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="footer-right" data-black-overlay="6">
                  <div class="row">
                    <div class="col-lg-6 col-sm-6 col-12">
                      <div class="footer-link">
                        <h4>Quick Link</h4>
                        <ul class="ft-link">
                          <li><a href="/package">แพ็กเกจ</a></li>
                          <li><a href="/#about">เกี่ยวกับเอไอเอสไฟเบอร์</a></li>
                          <li><a href="/location">ตรวจสอบพื้นที่ใช้บริการ</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                      <div class="footer-link">
                        <h4>Contact
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="0.8em" width="0.8em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72
                      c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68
                      c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44
                      l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"/>
                          </svg> </h4>
                        <ul class="ft-link">
                          <li><a href="tel:0924456910" target="blank">092-4456910</a></li>
                          <li><a href="tel:0924457406" target="blank">092-4457406</a></li></ul>
                        <div class="social-share-inner">
                          <ul class="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            <li>
                              <a href="https://lin.ee/3qY2SjL" target="blank">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1.67em" width="1.67em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M295.838,115.347l0.003-0.001l-0.092-0.76c-0.001-0.013-0.002-0.023-0.004-0.036c-0.001-0.011-0.002-0.021-0.004-0.032
                            l-0.344-2.858c-0.069-0.574-0.148-1.228-0.238-1.974l-0.072-0.594l-0.147,0.018c-3.617-20.571-13.553-40.093-28.942-56.762
                            c-15.317-16.589-35.217-29.687-57.548-37.878c-19.133-7.018-39.434-10.577-60.337-10.577c-28.22,0-55.627,6.637-79.257,19.193
                            C23.289,47.297-3.585,91.799,0.387,136.461c2.056,23.111,11.11,45.11,26.184,63.621c14.188,17.423,33.381,31.483,55.503,40.66
                            c13.602,5.642,27.051,8.301,41.291,11.116l1.667,0.33c3.921,0.776,4.975,1.842,5.247,2.264c0.503,0.784,0.24,2.329,0.038,3.18
                            c-0.186,0.785-0.378,1.568-0.57,2.352c-1.529,6.235-3.11,12.683-1.868,19.792c1.428,8.172,6.531,12.859,14.001,12.86
                            c0.001,0,0.001,0,0.002,0c8.035,0,17.18-5.39,23.231-8.956l0.808-0.475c14.436-8.478,28.036-18.041,38.271-25.425
                            c22.397-16.159,47.783-34.475,66.815-58.17C290.172,175.745,299.2,145.078,295.838,115.347z M92.343,160.561H66.761
                            c-3.866,0-7-3.134-7-7V99.865c0-3.866,3.134-7,7-7c3.866,0,7,3.134,7,7v46.696h18.581c3.866,0,7,3.134,7,7
                            C99.343,157.427,96.209,160.561,92.343,160.561z M119.03,153.371c0,3.866-3.134,7-7,7c-3.866,0-7-3.134-7-7V99.675
                            c0-3.866,3.134-7,7-7c3.866,0,7,3.134,7,7V153.371z M182.304,153.371c0,3.033-1.953,5.721-4.838,6.658
                            c-0.712,0.231-1.441,0.343-2.161,0.343c-2.199,0-4.323-1.039-5.666-2.888l-25.207-34.717v30.605c0,3.866-3.134,7-7,7
                            c-3.866,0-7-3.134-7-7v-52.16c0-3.033,1.953-5.721,4.838-6.658c2.886-0.936,6.045,0.09,7.827,2.545l25.207,34.717V99.675
                            c0-3.866,3.134-7,7-7c3.866,0,7,3.134,7,7V153.371z M233.311,159.269h-34.645c-3.866,0-7-3.134-7-7v-26.847V98.573
                            c0-3.866,3.134-7,7-7h33.57c3.866,0,7,3.134,7,7s-3.134,7-7,7h-26.57v12.849h21.562c3.866,0,7,3.134,7,7c0,3.866-3.134,7-7,7
                            h-21.562v12.847h27.645c3.866,0,7,3.134,7,7S237.177,159.269,233.311,159.269z"/>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/AISfibre59/" target="blank">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/aisfibre59/" target="blank">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/aisfibre59" target="blank">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="copyright-text">
                        <p>Copyright © 2020 AISFibre59. All Rights Reserved.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
