import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import {Image} from 'cloudinary-react'

function ModalBanner() {
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false)
  const v = new Date().getTime()
  return (
    <div className="home-modal">
      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Header closeButton/>
        <Modal.Body>
          <a href="https://lin.ee/3qY2SjL" target="blank">
          <img src={`https://res.cloudinary.com/aisfibre59-com/image/upload/v1/banner/promotion/popup-promotion-1.jpg?v=${v}`}/></a>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalBanner
