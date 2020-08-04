import React, { Component } from 'react'
import './styles.css'

class Sidebar extends Component {
  render () {
    return (
      <nav role="navigation">
        <div id="menuToggle" className="hamburger">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="/"><li>หน้าแรก</li></a>
            <a href="/package"><li>แพ็กเกจ</li></a>
            <a href="/#about"><li>เอไอเอสไฟเบอร์</li></a>
            <a href="/location"><li>ตรวจสอบพื้นที่ให้บริการ</li></a>
            <a href="#"><li>ติดต่อเรา</li></a>

          </ul>
        </div>
      </nav>
    )
  }
}

export default Sidebar
