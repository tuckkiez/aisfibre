import React, { useState } from 'react'
import { Popover, OverlayTrigger, Button, Modal } from 'react-bootstrap'
import './styles.css'

function PopoverContact() {
  const [showTel, setShowTel] = useState(false)
  const handleCloseTel = () => setShowTel(false)
  const handleShowTel = () => setShowTel(true)

  const [showLine, setShowLine] = useState(false)
  const handleCloseLine = () => setShowLine(false)
  const handleShowLine = () => setShowLine(true)

  return (
    <div>
      <div className="modal-tel">
        <Modal show={showTel} onHide={handleCloseTel} >
          <Modal.Header closeButton>
            <Modal.Title>ติดต่อสอบถามข้อมูลเพิ่มเติม</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="tel-more mt-2 mb-1"><a href="tel:0924456910" target="blank">092-4456910</a></div>
            <div className="tel-more mb-2 "><a href="tel:0924457406" target="blank">092-4457406</a></div>
          </Modal.Body>
        </Modal>
      </div>

      <div className="modal-linee">
        <Modal show={showLine} onHide={handleCloseLine}>
          <Modal.Header closeButton>
            <Modal.Title className="line-title">แชทผ่าน LINE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="line-body">
              <div className="">สแกน QR Code เพื่อแชทกับเรา</div>
              <div className="qr-line"><img src="https://res.cloudinary.com/aisfibre59-com/image/upload/icon/qr-line.png"/></div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <OverlayTrigger
        trigger="click"
        key={'left'}
        placement={'left'}
        overlay={
          <Popover id={`popover-positioned-left`}>
            <Popover.Title as="h3">ติดต่อสอบถาม</Popover.Title>
            <Popover.Content>
              <div className="contact-popover">
                <img onClick={ handleShowTel } className="icon-phone" alt="icon-contact-phone" src="https://res.cloudinary.com/aisfibre59-com/image/upload/icon/call_icon.png"/>
                <img onClick={ handleShowLine }alt="icon-contact-line" src="https://res.cloudinary.com/aisfibre59-com/image/upload/v1596100069/icon/line_k0dipe.png"/>
              </div>
            </Popover.Content>
          </Popover>
        }
      >
        <Button className="popover-button" variant="secondary">
          <div>
            <img alt="icon-contact" src="https://res.cloudinary.com/aisfibre59-com/image/upload/v1596555798/icon/chat.png"/>
          </div>
        </Button>
       
      </OverlayTrigger>
    </div>
  )
}

export default PopoverContact
