import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import {Image} from 'cloudinary-react'

function ModalBanner() {
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false)
  return (
    <div className="home-modal">
      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Header closeButton/>
        <Modal.Body>
          <a href="https://lin.ee/3qY2SjL" target="blank"><Image cloudName="aisfibre59-com" publicId="banner/Promotion/popup-promotion.jpg" ></Image></a>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalBanner