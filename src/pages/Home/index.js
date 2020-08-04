import React, { Component } from 'react'
import TopBanner from './components/topBanner'
import PackageBanner from './components/packageBanner'
import About from '../../components/About'
import ModalBanner from './components/modal'
export default class Home extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <section className="wrapper-top-banner">
          <TopBanner/>
          <div className="container">
            <section className="home-promotion">
              <div>
                <div><PackageBanner/></div>
              </div>
            </section>
            <div id="about">
              <ModalBanner/>
              <About/>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
