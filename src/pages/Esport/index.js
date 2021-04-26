import React, { Component } from 'react'

export default class Esport extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="package-detail e-sport">
        <section className="banner">
          <picture>
            <img alt="eSport" src="/images/package/eSport_1600x500.jpeg"/>
          </picture>
        </section>
        <div className="container power4-package">
          <img alt="eSport" src="/images/esport/esport-game.png"/>
          <img alt="eSport" src="/images/esport/esport-package.png"/>
          <div className="wrapper-button-esport">
            <a href="https://lin.ee/3qY2SjL" target="blank"><div className="package-button"><span>สมัคร</span></div></a>
            <a href="https://lin.ee/3qY2SjL" target="blank"><div className="package-button"><span>สมัคร</span></div></a>
            <a href="https://lin.ee/3qY2SjL" target="blank"><div className="package-button"><span>สมัคร</span></div></a>
          </div>
          <img alt="eSport" src="/images/esport/add100-th-esport.png"/>
          <img alt="eSport" src="/images/esport/esport-speed.png"/>
        </div>
      </div>
    )
  }
}
