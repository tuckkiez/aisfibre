import React, { Component } from 'react'
import {Image} from 'cloudinary-react'

export default class About extends Component {
  render() {
    function FadeInSection(props) {
      const [isVisible, setVisible] = React.useState(false)
      const domRef = React.useRef()
      React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => setVisible(entry.isIntersecting))
        })
        observer.observe(domRef.current)
      }, [])
      return (
        <div
          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
          ref={domRef}
        >
          {props.children}
        </div>
      )
    }

    return (
      <div className="about">
        <section className="container">
          <h1>บริการ AIS Fibre คืออะไร</h1>
          <p> บริการอินเทอร์เน็ตความเร็วสูงผ่านเทคโนโลยีไฟเบอร์ออพติก 100% คุณภาพสัญญาณแรง ไม่มีสะดุด มีเสถียรภาพสูง ไร้สัญญาณรบกวน พร้อมตอบสนองการใช้งานไม่จำกัด</p>
          <p> รองรับการใช้งานมัลติมีเดียอย่างเต็มรูปแบบ เช่น ดูทีวีผ่านเน็ต เล่นเกมออนไลน์ ใช้งานกล้องวงจรปิด</p>
          <p> เชื่อมต่อการใช้งานอินเทอร์เน็ตจาก AIS ได้ทุกที่ทุกเวลา</p>
          <p> สนุกกับความบันเทิงระดับพรีเมี่ยมครบในกล่องเดียวกับ AIS PLAYBOX ทั้งภาพยนตร์ ซีรีส์ รายการทีวี และ คาราโอเกะ พร้อมสัมผัสสุดยอดความคมชัด ให้คุณสนุกจนไม่อยากพลาดจากหน้าจอ</p>
          <p> ติดตั้งได้รวดเร็ว พร้อมบริการหลังการขายจากทีมงานคุณภาพ</p>
          <h4>AIS Fibre</h4>
          <div className="about-desktop d-none d-sm-block">
            <div class="row">
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-left">
                <FadeInSection><div class="about-left fade-in">
                  <Image cloudName="aisfibre59-com" publicId="banner/ookla-aw.png" ></Image>
                </div>
                </FadeInSection>
              </div>
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-right">
                <FadeInSection>
                  <div class="about-right fade-in">
                    <h5>เร็วกว่า</h5>
                    <span>เน็ตบ้านคุณภาพ เร็วแรงที่สุดในไทย ตอกย้ำรางวัลการันตีระดับโลก 2019 โดย Ookla® Speedtest® ผู้ให้บริการทดสอบความเร็วอินเทอร์เน็ตอันดับต้นของโลก ที่มีผู้ใช้มากกว่า 100 ล้านรายใน 190 ประเทศทั่วโลก เอไอเอส ไฟเบอร์ ได้รับรางวัล เครือข่ายอินเทอร์เน็ตบ้านที่เร็วที่สุดในประเทศไทย (Thailand’s Fastest ISP) ปี 2562 คะแนนความเร็วในการให้บริการอินเทอร์เน็ต 101.37 ความเร็วเฉลี่ยการดาวน์โหลด 240.64 Mbps ความเร็วเฉลี่ยการอัปโหลด 166.70 Mbps ค่าหน่วงเวลาในการตอบสนอง 10 ms
                    </span>
                  </div>
                </FadeInSection>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-left">
                <FadeInSection>
                  <div class="about-left fade-in">
                    <h5>ดีกว่า</h5>
                    <span>มอบประสบการณ์ Content ที่ดีที่สุดในโลก กับความบันเทิงหลากหลายคอนเทนต์ บน Apple TV พร้อมชมรายการทีวี และภาพยนตร์ออนดีมานด์ รวมถึงโชว์ต่างๆ ผ่านแอปฯ AIS PLAY
                    </span>
                  </div>
                </FadeInSection>
              </div>
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-right">
                <FadeInSection>
                  <div class="about-right fade-in">
                    <Image cloudName="aisfibre59-com" publicId="banner/apple_tv.png" ></Image>
                  </div>
                </FadeInSection>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-left">
                <FadeInSection>
                  <div class="about-left fade-in">
                    <Image cloudName="aisfibre59-com" publicId="banner/speed-toggle.jpg"/>
                  </div>
                </FadeInSection>
              </div>
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-right">
                <FadeInSection>
                  <div class="about-right fade-in">
                    <h5>ง่ายกว่า</h5>
                    <span>ให้ลูกค้าเอไอเอส ไฟเบอร์ ปรับสปีดอินเทอร์เน็ตด้วยตัวเองกับฟีเจอร์ Speed Toggle ให้ตอบโจทย์ทุกเวลาที่ต้องการใช้งาน ในรูปแบบต่างๆ ทั้งในเวลาที่ต้องทำงาน Work from Home สามารถปรับสปีดความเร็วอัปโหลด/ดาวน์โหลด เท่ากัน หรือ สตรีมหนัง เกมออนไลน์ ขายของออนไลน์ ด้วยการปรับให้เต็มสปีดค่าอัปโหลด และในช่วงเวลาอื่นๆ ที่ต้องการ โดยสามารถปรับสปีดได้ถึง 5 รูปแบบ สำหรับลูกค้าเอไอเอส ไฟเบอร์ ที่มีแพ็กเกจความเร็ว 100 Mbps ขึ้นไป
                    </span>
                  </div>
                </FadeInSection>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-left">
                <FadeInSection>
                  <div class="about-left fade-in">
                    <h5>Wi-Fi ดีทั้งบ้าน ตั้งแต่วันแรกที่ติดตั้ง</h5>
                    <span>ด้วย SuperMESH WiFi Router เพื่อสร้างประสบการณ์ ให้ลูกค้าสามารถเชื่อมโยงสัญญาณ ในลักษณะโครงข่ายถึงกัน ได้ในทุกบริเวณของตัวบ้าน ไม่ต้องเดินสายเพิ่ม หมดปัญหาจุดอับสัญญาณ ใช้เน็ตบ้านได้เต็มประสิทธิภาพยิ่งขึ้นกว่าเดิม เชื่อมต่อเป็น MESH WiFi ช่วยกระจายสัญญาณให้เร็ว แรง และครอบคลุมสม่ำเสมอทั่วทุกมุมในบ้านเต็มสปีด 1 Gbps บน WiFi
                    </span>
                  </div>
                </FadeInSection>
              </div>
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-right">
                <FadeInSection>
                  <div class="about-right fade-in">
                    <Image cloudName="aisfibre59-com" publicId="banner/home_wifi.png"></Image>
                  </div>
                </FadeInSection>
              </div>
              <div class="about-center">
                <FadeInSection>
                  <Image cloudName="aisfibre59-com" publicId="banner/play_channel.png"></Image>
                </FadeInSection>
              </div>
            </div>
          </div>

          <div className="about-mobile d-block d-sm-none">
            <div class="row">
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-left">
                <FadeInSection><div class="about-left fade-in">
                  <h5>เร็วกว่า</h5>
                  <span>เน็ตบ้านคุณภาพ เร็วแรงที่สุดในไทย ตอกย้ำรางวัลการันตีระดับโลก 2019 โดย Ookla® Speedtest® ผู้ให้บริการทดสอบความเร็วอินเทอร์เน็ตอันดับต้นของโลก ที่มีผู้ใช้มากกว่า 100 ล้านรายใน 190 ประเทศทั่วโลก เอไอเอส ไฟเบอร์ ได้รับรางวัล เครือข่ายอินเทอร์เน็ตบ้านที่เร็วที่สุดในประเทศไทย (Thailand’s Fastest ISP) ปี 2562 คะแนนความเร็วในการให้บริการอินเทอร์เน็ต 101.37 ความเร็วเฉลี่ยการดาวน์โหลด 240.64 Mbps ความเร็วเฉลี่ยการอัปโหลด 166.70 Mbps ค่าหน่วงเวลาในการตอบสนอง 10 ms
                  </span>
                </div>
                </FadeInSection>
              </div>
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-right">
                <FadeInSection>
                  <div class="about-right fade-in">
                    <Image cloudName="aisfibre59-com" publicId="banner/ookla-aw.png" ></Image>
                  </div>
                </FadeInSection>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-left">
                <FadeInSection>
                  <div class="about-left fade-in">
                    <h5>ดีกว่า</h5>
                    <span>มอบประสบการณ์ Content ที่ดีที่สุดในโลก กับความบันเทิงหลากหลายคอนเทนต์ บน Apple TV พร้อมชมรายการทีวี และภาพยนตร์ออนดีมานด์ รวมถึงโชว์ต่างๆ ผ่านแอปฯ AIS PLAY
                    </span>
                  </div>
                </FadeInSection>
              </div>
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-right">
                <FadeInSection>
                  <div class="about-right fade-in">
                    <Image cloudName="aisfibre59-com" publicId="banner/apple_tv.png" ></Image>
                  </div>
                </FadeInSection>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-left">
                <FadeInSection>
                  <div class="about-left fade-in">
                    <h5>ง่ายกว่า</h5>
                    <span>ให้ลูกค้าเอไอเอส ไฟเบอร์ ปรับสปีดอินเทอร์เน็ตด้วยตัวเองกับฟีเจอร์ Speed Toggle ให้ตอบโจทย์ทุกเวลาที่ต้องการใช้งาน ในรูปแบบต่างๆ ทั้งในเวลาที่ต้องทำงาน Work from Home สามารถปรับสปีดความเร็วอัปโหลด/ดาวน์โหลด เท่ากัน หรือ สตรีมหนัง เกมออนไลน์ ขายของออนไลน์ ด้วยการปรับให้เต็มสปีดค่าอัปโหลด และในช่วงเวลาอื่นๆ ที่ต้องการ โดยสามารถปรับสปีดได้ถึง 5 รูปแบบ สำหรับลูกค้าเอไอเอส ไฟเบอร์ ที่มีแพ็กเกจความเร็ว 100 Mbps ขึ้นไป
                    </span>
                  </div>
                </FadeInSection>
              </div>
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-right">
                <FadeInSection>
                  <div class="about-right fade-in">
                    <Image cloudName="aisfibre59-com" publicId="banner/speed-toggle.jpg"/>
                  </div>
                </FadeInSection>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-left">
                <FadeInSection>
                  <div class="about-left fade-in">
                    <h5>Wi-Fi ดีทั้งบ้าน ตั้งแต่วันแรกที่ติดตั้ง</h5>
                    <span>ด้วย SuperMESH WiFi Router เพื่อสร้างประสบการณ์ ให้ลูกค้าสามารถเชื่อมโยงสัญญาณ ในลักษณะโครงข่ายถึงกัน ได้ในทุกบริเวณของตัวบ้าน ไม่ต้องเดินสายเพิ่ม หมดปัญหาจุดอับสัญญาณ ใช้เน็ตบ้านได้เต็มประสิทธิภาพยิ่งขึ้นกว่าเดิม เชื่อมต่อเป็น MESH WiFi ช่วยกระจายสัญญาณให้เร็ว แรง และครอบคลุมสม่ำเสมอทั่วทุกมุมในบ้านเต็มสปีด 1 Gbps บน WiFi
                    </span>
                  </div>
                </FadeInSection>
              </div>
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-right">
                <FadeInSection>
                  <div class="about-right fade-in">
                    <Image cloudName="aisfibre59-com" publicId="banner/home_wifi.png"></Image>
                  </div>
                </FadeInSection>
              </div>
              <div class="about-center">
                <FadeInSection>
                  <Image cloudName="aisfibre59-com" publicId="banner/play_channel.png"></Image>
                </FadeInSection>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
