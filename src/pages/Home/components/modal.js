import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Slider from 'react-slick'
import { NavLink } from 'react-router-dom'

function ModalBanner() {
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false)
  // const v = new Date().getTime()
  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    )
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    )
  }
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    speed: 300,
    autoplay: true
  }
  return (
    <div className="home-modal">
      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Header closeButton/>
        <Modal.Body >
          <div className="nav-img">
            <NavLink to="#" activeClassName="is-active" className="navbar-item">
              <img alt="aisfibre-promotionBanner" src="/images/promotionBanner/popup-1.jpg"/>
            </NavLink>
          </div>
          {/* <Slider {...settings} className="slider-promotionBanner">
            <div className="nav-img">
              <NavLink to="#" activeClassName="is-active" className="navbar-item">
                <img alt="aisfibre-promotionBanner" src="/images/promotionBanner/popup-1.jpg"/>
              </NavLink>
            </div>
            <div className="nav-img">
              <NavLink to="#" activeClassName="is-active" className="navbar-item">
                <img alt="aisfibre-promotionBanner" src="/images/promotionBanner/popup-2.jpg"/>
              </NavLink>
            </div>
            <div className="nav-img">
              <NavLink to="#" activeClassName="is-active" className="navbar-item">
                <img alt="aisfibre-promotionBanner4" src="/images/promotionBanner/popup-3.jpg"/>
              </NavLink>
            </div>
            <div className="nav-img">
              <NavLink to="#" activeClassName="is-active" className="navbar-item">
                <img alt="aisfibre-promotionBanner5" src="/images/promotionBanner/popup-4.jpg"/>
              </NavLink>
            </div>
            <div className="nav-img">
              <NavLink to="#" activeClassName="is-active" className="navbar-item">
                <img alt="aisfibre-promotionBanner5" src="/images/promotionBanner/popup-5.jpg"/>
              </NavLink>
            </div>
            <div className="nav-img">
              <NavLink to="#" activeClassName="is-active" className="navbar-item">
                <img alt="aisfibre-promotionBanner5" src="/images/promotionBanner/popup-6.jpg"/>
              </NavLink>
            </div>
  </Slider> */}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalBanner
