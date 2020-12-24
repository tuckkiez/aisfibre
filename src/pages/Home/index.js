import React, { Component } from 'react'
import TopBanner from './components/topBanner'
import PackageBanner from './components/packageBanner'
import About from '../../components/About'
import ModalBanner from './components/modal'
import Promotions from './components/promotions'
import EvenetBanner from './components/eventBanner'

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
                <div><EvenetBanner/></div>
                <div><Promotions/></div>
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
