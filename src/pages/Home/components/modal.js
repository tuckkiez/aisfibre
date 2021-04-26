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
            <img alt="aisfibre popup" src="/images/popup/popup-promotion-1.jpg"/>
          </a>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalBanner
