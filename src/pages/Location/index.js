import React, { Component } from 'react'

export default class Location extends Component {
  render() {
    return (
      <div className="check-location">
        <div className="container location-wrappper" id="top">
          <p>ลูกค้าสามารถเชคพื้นที่ให้บริการได้แบบง่ายๆโดยการแชร์โลเคชั่นของคุณ มาที่ Line <a className="line" href="https://lin.ee/3qY2SjL" target="blank">@Aisfibre59</a> ทางเรามีทีมงานคอยให้บริการเพื่อตรวจเช็คพื้นที่อย่างรวดเร็ว </p>
        </div>
        <a href="https://lin.ee/3qY2SjL" target="blank">
          <img alt="eSport" src="/images/location-footer.png"/>
        </a>
      </div>
    )
  }
}
