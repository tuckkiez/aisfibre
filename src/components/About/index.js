import React, { Component } from 'react'
import ReactPlayer from 'react-player'
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
          <div className="row awn">
            <div class="col-lg-12 col-sm-12 col-12">
              <FadeInSection>
                <div class="mb-20 fade-in">
                  <img alt="aisfibre speed-toggle" src="/images/home/awn1.jpg"/>
                </div>
              </FadeInSection>
            </div>
          </div>
          <div className="row awn">
            <div class="col-lg-12 col-sm-12 col-12">
              <FadeInSection>
                <div class="mb-20 fade-in">
                  <img alt="aisfibre speed-toggle" src="/images/home/awn2.jpg"/>
                </div>
              </FadeInSection>
            </div>
          </div>
          <div className="row awn">
            <div class="col-lg-12 col-sm-12 col-12">
              <FadeInSection>
                <div class="mb-20 fade-in">
                  <img alt="aisfibre speed-toggle" src="/images/home/awn.jpg"/>
                </div>
              </FadeInSection>
            </div>
          </div>
          <h4>ตัวแทนจำหน่ายติดตั้งอินเตอร์เน็ตบ้าน อย่างเป็นทางการจาก AIS Fibre ที่ผ่านมาตรฐานการบริการทั้งด้านเทคนิค และบริการที่ใส่ใจในงานบริการติดตั้งอินเตอร์เน็ตบ้านในทุกรายละเอียด เพื่อบริการให้กับผู้สนใจติดตั้งอินเตอร์เน็ตบ้านที่มีคุณภาพสูงจาก AIS Fibre สามารถเข้าหน้างานได้เร็วที่สุด
          บริษัท เซนเธียร์ (ประเทศไทย) จำกัด
          ตัวแทนติดตั้งอินเตอร์เน็ต AIS Fibre อย่างเป็นทางการ จาก AIS</h4>
          <div className="vdo-banner">
            <ReactPlayer width='100%' height='100%' controls={true} playing={true} url='/vdo/vdo-ais-sep_2020.mp4' />
          </div>
          <div className="about-desktop d-none d-sm-block">
            <div class="row">
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-left">
                <FadeInSection><div class="about-left fade-in">
                  <img alt="aisfibre ookla" src="/images/home/ookla-aw.png"/>
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
                    <img alt="aisfibre apple-tv" src="/images/home/apple_tv.png"/>
                  </div>
                </FadeInSection>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-sm-6 col-12 about-wrapper-left">
                <FadeInSection>
                  <div class="about-left fade-in">
                    <img alt="aisfibre speed-toggle" src="/images/home/speed-toggle.jpeg"/>
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
                    <img alt="aisfibre home_wifi" src="/images/home/home_wifi.png"/>
                  </div>
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
                    <img alt="aisfibre ookla" src="/images/home/ookla-aw.png"/>
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
                    <img alt="aisfibre apple-tv" src="/images/home/apple_tv.png"/>
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
                    <img alt="aisfibre speed-toggle" src="/images/home/speed-toggle.jpeg"/>
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
                    <img alt="aisfibre home_wifi" src="/images/home/home_wifi.png"/>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>
          <div className="q-and-a">
            <div className="img-qanda">
              <img alt="aisfibre" src="/images/home/bannerQandA.jpeg"/>
            </div>
            <h2>Q. บริการ AIS Fibre คืออะไร?</h2>
            <h2>A.</h2>
            <ul>
              <li>บริการอินเทอร์เน็ตความเร็วสูงผ่านเทคโนโลยีไฟเบอร์ออพติก 100% คุณภาพสัญญาณแรง ไม่มีสะดุด มีเสถียรภาพสูง ไร้สัญญาณรบกวน พร้อมตอบสนองการใช้งานไม่จำกัด</li>
              <li>รองรับการใช้งานมัลติมีเดียอย่างเต็มรูปแบบ เช่น ดูทีวีผ่านเน็ต เล่นเกมออนไลน์ ใช้งานกล้องวงจรปิด</li>
              <li>เชื่อมต่อการใช้งานอินเทอร์เน็ตจาก AIS ได้ทุกที่ทุกเวลา</li>
              <li>สนุกกับความบันเทิงระดับพรีเมี่ยมครบในกล่องเดียวกับ AIS liLAYBOX ทั้งภาพยนตร์ ซีรีส์ รายการทีวี และ คาราโอเกะ พร้อมสัมผัสสุดยอดความคมชัด ให้คุณสนุกจนไม่อยากพลาดจากหน้าจอ</li>
              <li>ติดตั้งได้รวดเร็ว พร้อมบริการหลังการขายจากทีมงานคุณภาพ</li>
            </ul>
            <h2>Q. AIS Fibre รองรับบริการเสริมอะไรได้บ้าง?</h2>
            <h2>A.</h2>
            <ul>
              <li>สามารถรองรับการใช้งานมัลติมีเดียได้อย่างเต็มรูปแบบ อาทิ โทรศัพท์บ้าน (Fixed line), ดูทีวีผ่านเน็ต (IPTV) ฯลฯ</li>
              <li>สามารถโหลดบิตได้ แต่ความเร็วจะขึ้นอยู่กับจำนวนผู้ใช้งานในขณะเวลานั้นๆ (Fair usage policy)</li>
              <li>สามารถทำ port forwarding เพื่อใช้กับกล้องวงจรปิด (IP Camera) ได้ ไม่ว่าคุณจะใช้แพ็กเกจใดๆ ก็ตาม</li>
            </ul>
            <h2>Q.หากลูกค้าต้องการเปลี่ยนแพ็กเกจความเร็วของบริการ AIS Fibre ได้หรือไม่?</h2>
            <h2>A.</h2>
            <ul>
              <li>กรณีลูกค้าต้องการเปลี่ยนแพ็กเกจความเร็วสูงขึ้น (Speed)
              สามารถเปลี่ยนแพ็กเกจได้ด้วยตัวเองที่เว็บไซด์ AIS Fibre (www.ais.co.th/fibre)
              เลือกเมนู “เปลี่ยนโปรโมชั่น” หรือติดต่อ AIS Fibre Contact Center 1175</li>
              <li>ไม่สามารถเปลี่ยนความเร็วแพ็กเกจให้น้อยลง (Speed)
              จนกว่าจะครบอายุสัญญา 12 เดือน</li>
            </ul>
            <h2>Q.ลูกค้าขอระงับการใช้บริการชั่วคราว หรือขอยกเลิกบริการก่อน 1 ปีได้หรือไม่?</h2>
            <h2>A.กรณีระงับการใช้บริการชั่วคราว</h2>
            <ul>
              <li>สามารถทำได้เฉพาะลูกค้า AIS Fibre รายเดือน เท่านั้น</li>
              <li> ต้องเป็นลูกค้า AIS Fibre อย่างน้อย 90 วัน</li>
              <li> ต้องไม่มียอดค่าใช้บริการค้างชำระ ณ วันที่ให้ระงับบริการชั่วคราว</li>
              <li> สามารถขอระงับบริการชั่วคราว ได้ไม่เกิน 2 ครั้งต่อปี นับแบบ Calendar year</li>
              <li> ต้องแจ้งวันที่ต้องการให้เริ่มระงับสัญญาณชั่วคราว และวันที่ต้องการกลับมาใช้งานทุกครั้ง</li>
              <li> ช่วงระยะเวลาที่สามารถขอระงับบริการชั่วคราว ต้องไม่น้อยกว่า 30 วัน และไม่เกิน 60 วัน ต่อครั้ง</li>
              <li> การขอแจ้งระงับบริการชั่วคราวล่วงหน้า ต้องไม่เกิน 30 วัน</li>
              <li> เมื่อครบกำหนดขอระงับสัญญาณชั่วคราว ระบบจะทำการเปิดสัญญาณใหม่อัตโนมัติ และเริ่มคิดค่าบริการรายเดือนตาม Package เดิม โดยคิด Prorate ตามวันที่เริ่มกลับมาใช้งานจริง</li>
              <li> ลูกค้าสามารถขอระงับบริการชั่วคราว หรือ เปิดใช้บริการ ผ่านทาง AIS Shop และ AIS Fibre Contact Center 1175 เท่านั้น</li>
              <li> ลูกค้าที่ใช้งานโปรโมชั่นพิเศษ เช่น Greeting Package, Discount 50% 3 เดือน, Power 3 จะยังคงนับระยะเวลาโปรโมชั่นพิเศษต่อไป ไม่หยุดตามการระงับบริการชั่วคราว</li>
              <li> ระหว่างระยะเวลาที่แจ้งระงับสัญญาณชั่วคราว จะไม่เรียกเก็บค่าบริการรายเดือนตามโปรโมชั่น/li></li>
              <li> การระงับบริการ ไม่รวมถึงแพ็กเกจเสริม (On Top Package) อื่นๆ เช่น Hooq, Doonee ฯลฯ/li></li>
              <li> ไม่สามารถระงับบริการ Fixed Line ได้ ค่ารักษาเลขหมายของ Fixed Line จะคงเรียกเก็บตามปกติ</li>
            </ul>
            <h2>A.การขอยกเลิกบริการก่อน 1 ปี สามารถทำได้หรือไม่</h2>
            <ul>
              <li>ลูกค้าสามารถขอแจ้งความประสงค์สมัครใช้บริการเอไอเอส ไฟเบอร์ ได้ 2
              รูปแบบ ได้แก่</li>
              <li>รับสิทธิ์ส่วนลดค่าติดตั้งและเดินสายภายนอก มูลค่า 4,800 บาท
              เมื่อตกลงใช้บริการเอไอส ไฟเบอร์ ต่อเนื่องอย่างน้อย 12 รอบบิล
              นับแต่วันติดตั้ง หากยกเลิกบริการก่อนครบ 12 รอบบิล
              ลูกค้าต้องชำระค่าติดตั้งคืนในอัตราที่ได้มีการหักลดลงตามสัดส่วนที่ได้ใช้บริก
              ารไปก่อนแล้ว
              เว้นแต่กรณีที่เหตุแห่งการยกเลิกบริการเกิดขึ้นจากให้บริการที่ไม่เป็นไปตามโ
              ฆษณาหรือมาตรฐานการให้บริการที่ได้แจ้งไว้
              หรือเกิดขึ้นจากความผิดของผู้ให้บริการ
              จะไม่มีการเรียกเก็บค่าติดตั้งอีกแต่อย่างใด</li>
              <li>กรณีเลือกชำระค่าติดตั้งและค่าเดินสายภายนอก 4,800 บาท ในรอบบิลแรก
              จะไม่มีกำหนดเงื่อนไขระยะเวลาการใช้บริการ เอไอเอส ไฟเบอร์</li>
              <li>กรณีลูกค้ายกเลิกบริการ
              ทางบริษัทขอสงวนสิทธิ์ในการเรียกเก็บคืนอุปกรณ์ทั้งหมดให้ทางบริษัทฯ</li>
            </ul>
            <h2>Q.มีการเรียกเก็บค่าใช้จ่ายในการระงับบริการชั่วคราวหรือไม่?</h2>
            <h2>A.</h2>
            <ul>
              <li>ไม่เก็บค่าบริการรายเดือนและค่าธรรมเนียมอื่นๆ ภายใน 30 วันแรก</li>
              <li> เกิน 30 วัน (วันที่ 31 – 60) มีค่ารักษาช่องสัญญาณ /Port Maintenance fee 150 บาท คิดตามระยะเวลาที่ขอระงับบริการจริง</li>
              <li> รอบบิลที่ลูกค้าทำการเปิดใช้บริการ (Reconnect Customer Request) จะ Prorate ตามการใช้งานจริง</li>
            </ul>
            <h3>ใบแจ้งค่าบริการการชำระค่าบริการ</h3>
            <ul>
              <li>ค่าบริการจะเรียกเก็บแบบล่วงหน้า ณ วันเริ่มต้นรอบบิล (Prepay) 1 เดือน
            ก่อนการใช้บริการ
            ซึ่งเป็นรูปแบบของการเรียกเก็บค่าบริการทั่วไปของอินเทอร์เน็ตบ้าน
            กรณีลูกค้าทำการสมัครและเปิดใช้บริการระหว่างรอบบิล
            จะคิดค่าบริการเฉลี่ยรายวัน (prorate) ตั้งแต่วันที่ติดตั้งเสร็จ-วันสิ้นรอบบิล
            โดยลูกค้าจะได้รับใบแจ้งค่าใช้บริการใบแรก หลังจากติดตั้งประมาณ 10 วัน</li>
              <li>วันตัดรอบบิลใบแจ้งค่าใช้บริการ จะขึ้นอยู่กับวันที่ติดตั้ง</li>
            </ul>
            <div className="table-date">
              <table class="tg">
                <thead>
                  <tr>
                    <th class="tg-0pky">ช่วงวันที่ติดตั้ง</th>
                    <th class="tg-0pky">วันตัดรอบบิลใบแจ้ง</th>
                    <th class="tg-0pky">วันกำหนดชำระ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="tg-0pky">1-3</td>
                    <td class="tg-0pky">3</td>
                    <td class="tg-0pky">29</td>
                  </tr>
                  <tr>
                    <td class="tg-0pky">4-7</td>
                    <td class="tg-0pky">7</td>
                    <td class="tg-0pky">2</td>
                  </tr>
                  <tr>
                    <td class="tg-0pky">8-11</td>
                    <td class="tg-0pky">11</td>
                    <td class="tg-0pky">6</td>
                  </tr>
                  <tr>
                    <td class="tg-0pky">12-15</td>
                    <td class="tg-0pky">15</td>
                    <td class="tg-0pky">10</td>
                  </tr>
                  <tr>
                    <td class="tg-0pky">16-19</td>
                    <td class="tg-0pky">19</td>
                    <td class="tg-0pky">14</td>
                  </tr>
                  <tr>
                    <td class="tg-0pky">20-23</td>
                    <td class="tg-0pky">23</td>
                    <td class="tg-0pky">28</td>
                  </tr>
                  <tr>
                    <td class="tg-0pky">24-27</td>
                    <td class="tg-0pky">27</td>
                    <td class="tg-0pky">22</td>
                  </tr>
                  <tr>
                    <td class="tg-0pky">28-31</td>
                    <td class="tg-0pky">วันสิ้นเดือน</td>
                    <td class="tg-0pky">26</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul>
              <li>ใบแจ้งค่าใช้บริการ ใบแรกจะแสดงค่าบริการ 2 รายการ</li>
            </ul>
            <p>
            ค่าบริการคิดเฉลี่ยตามวันที่ใช้งาน ตั้งแต่วันติดตั้ง – วันตัดรอบบิล (แสดงเฉพาะในบิลใบแรกเท่านั้น) ค่าบริการเรียกเก็บล่วงหน้า 1 เดือน เต็มจำนวน (แสดงตามปกติในทุก ๆ รอบบิล)
            </p>
            <p className="example">ตัวอย่าง การแสดงหน้าใบแจ้งฯ ใบแรก กรณีเลือกแพ็กเกจ 750 บาท ติดตั้งวันที่ 26/01/59 จะได้วันตัดรอบบิลใบแจ้งฯ ทุกวันที่ 27</p>
            <img alt="aisfibre billing" src="/images/home/bill.png"/>
            <div className="payment">
              <h2>สามารถชำระค่าบริการผ่านช่องทางไหนได้บ้าง ?</h2>
              <h2>A.</h2>
              <ul>
                <li>1.ชำระผ่านทางหน้าเว็บไซด์ AIS Fibre (www.ais.co.th/fibre)
                  <ul>
                    <li>- เลือกเมนู “ชำระค่าบริการ”</li>
                    <li>- กรอกหมายเลขอินเทอร์เน็ต (88xxxxxxxxxx) และหมายเลขบัตรที่ใช้ในการสมัคร
                เพื่อ log-in เข้าสู่ระบบ</li>
                    <li>- สามารถเลือกวิธีการชำระค่าบริการผ่าน mPAY
                หรือชำระออนไลน์ผ่านบัตรเครดิต/เดบิต VISA/Master Card จากนั้น
                ดำเนินการตามขั้นตอน</li>
                  </ul>
                </li>
                <li>2.ชำระผ่านจ่ายบิลแอพพลิเคชั่น mPAY
                  <ul>
                    <li>- Log in เข้าสู่หน้าหลัก เลือกไอคอน AIS Services</li>
                    <li>- เลือก AIS Fibre</li>
                    <li>- เลือกวิธีชำระ ใส่รหัส PIN และกดยืนยันการชำระ</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="about-center">
            <FadeInSection>
              <img alt="ais-playtv" src="/images/home/play1.jpg"/>
              <img alt="ais-playtv" src="/images/home/play2.jpg"/>
              <img alt="ais-playtv" src="/images/home/play3.jpg"/>
              <img alt="ais-playtv" src="/images/home/play4.jpg"/>
            </FadeInSection>
          </div>
        </section>
      </div>
    )
  }
}
