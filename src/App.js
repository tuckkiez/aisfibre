import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Routing from './routes'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <div className="my-app">
        <Sidebar/>
        <nav className="navbar top-menu fixed-top" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a href="/"><img src="https://image.makewebeasy.net/makeweb/0/Sa2wvRXov/DefaultData/aisfibre.png" alt="AISFIBRE LOGO" /> </a>
            </div>
            <div className="navbar-menu ">
              <div className="navbar-end">
                <NavLink exact to="/" activeClassName="is-active" className="navbar-item">หน้าแรก</NavLink>
                <NavLink to="/package" activeClassName="is-active" className="navbar-item">แพ็กเกจ</NavLink>
                <a href="/#about" activeClassName="is-active" className="navbar-item">เอไอเอสไฟเบอร์</a>
                <NavLink to="/location/#top" activeClassName="is-active" className="navbar-item">ตรวจสอบพื้นที่ให้บริการ</NavLink>
                <NavLink to="/contact" activeClassName="is-active" className="navbar-item">ติดต่อเรา</NavLink>

                <div>
                  <div className="nav-tel">
                    <div className="tel-1">
                      <a href="tel:0924456910" target="blank">
                        <img alt="aisfibre contact" src="/images/icon/contact-call1.png"/>
                      </a>
                    </div>
                    <div>
                      <a href="tel:0924457406" target="blank">
                        <img alt="aisfibre contact" src="/images/icon/contact-call2.png"/>
                      </a>
                    </div>
                  </div>
                  <div className="nav-line">
                    <a href="https://lin.ee/3qY2SjL" target="blank">
                      <img alt="aisfibre contact" src="/images/icon/contact-line.png"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="contact-mobile">
          <div className="nav-tel-mobile">
            <div className="tel-1">
              <a href="tel:0924456910" target="blank">
                <img alt="aisfibre contact" src="/images/icon/contact-call1.png"/>
              </a>
            </div>
            <div>
              <a href="tel:0924457406" target="blank">
                <img alt="aisfibre contact" src="/images/icon/contact-call2.png"/>
              </a>
            </div>
          </div>
          <div className="nav-line">
            <a href="https://lin.ee/3qY2SjL" target="blank">
              <img alt="aisfibre contact" src="/images/icon/contact-line.png"/>
            </a>
          </div>
        </div>
        <Routing />
        <Footer/>
      </div>
    )
  }
}

export default App
