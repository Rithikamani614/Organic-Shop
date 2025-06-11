import { Row, Col,Container, Image} from 'react-bootstrap';
import { FaDollarSign, FaShip,FaLeaf,FaShieldAlt ,FaStar } from 'react-icons/fa';
import { TbNumber66Small } from 'react-icons/tb';
import sec6img1 from './images/client.png';
import sec6img2 from './images/client.png';
import sec6img3 from './images/client.png';
import sec6img4 from './images/client.png';
import sec6img5 from './images/client.png';
import sec6img6 from './images/testi-thumb-1.jpg';
import sec6img7 from './images/testi-thumb-2.jpg';
import sec6img8 from './images/fruit-basket.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination ,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function Section6(){
   return(
    <div>
         <div className="sec6bg1">
          <Container className='sec6container'>
            <Row className='sec6row1'>
                <Col lg ={3} md={6} sm={12} className='sec6col1'>
                <Row className='sec6text2'>
                  <Col lg={4} md={4}>
                  <div className='sec6icon1'>
                    <FaDollarSign/>
                  </div>
                  </Col>
                  <Col lg={8} md={8}>
                  <div className='sec6text1'>
                  <h5> 
                  Return Policy
                  </h5>
                  <p>Money back guarantee
                  </p>
                </div>
                  </Col>
                </Row>
                </Col>
                <Col lg ={3} md={6} sm={12} className='sec6col1'>
                <Row className="sec6text3">
                  <Col  lg={4} md={4}>
                  <div className="sec6icon2">
                  <FaShip/>
                  </div>
                  </Col>
                  <Col  lg={8} md={8}>
                  <div className='sec6text1'>
                  <h5> 
                  Free Shipping
                  </h5>
                  <p>On all orders over $60.00
                  </p>
                </div>
                  </Col>
                </Row>
                  </Col>
                <Col lg ={3} md={6} sm={12} className='sec6col1'>
                <Row className="sec6text4">
                  <Col lg={4} md={4}>
                  <div className='sec6icon3'>
                  <FaLeaf />
                  </div>
                  </Col>
                  <Col lg={8} md={8}>
                  <div className='sec6text1'>
                  <h5> 
                  Store Locator
                  </h5>
                  <p>Find your nearest store
                  </p>
                </div>
                  </Col>
                </Row>
                </Col>
                <Col lg ={3} md={6} sm={12} className='sec6col1'>
                <Row className="sec6text5">
                  <Col lg={4} md={4}>
                  <div className='sec6icon4'>
                  <FaShieldAlt />
                </div>
                  </Col>
                  <Col lg={8} md={8}>
                  <div className='sec6text1'>
                  <h5> 
                     Secure Payments
                  </h5>
                  <p>You’re on safe and secure</p>
                </div>
                  </Col>
                </Row>
                </Col>
            </Row>
          </Container>
        </div> 
        <div className='sec6bg3'>
          <div className='sec6bg4'>
          <Container className='sec6container'>
            <Row className='sec6row4'>
              <Col>
              <img src={sec6img1} alt="" className='sec6img' />
              </Col>
              <Col>           
                 <img src={sec6img2} alt="" className='sec6img sec6image11' />
              </Col>
              <Col> 
                  <img src={sec6img3} alt="" className='sec6img sec6image11' />
              </Col>
              <Col>  
                <img src={sec6img4} alt="" className='sec6img sec6image11' />
              </Col>
              <Col>
              <img src={sec6img5} alt=""  className='sec6img sec6image'/>
              </Col>
              <hr  className='sec6hr'/>
            </Row>
          </Container>
          </div>
        </div>
         <div className="sec6bg2">
          <Container fluid>
            <Row className='sec6rw1' >
              <Col lg={5} md={12} sm={12}>
              <div className='sec6div1'>
              <p className='sec6p1'>What They’re Saying </p>
              <h2 className='sec6h2'>What they’re talking about our store</h2>
              <p className='sec6p2'>Lorem ipsum a little attention and energy will form the habit is simply free text.</p>
              </div>
              </Col>
              <Col lg={7} md={12} sm={12} className='sec6div2'>
              <div >
                 <Swiper
                 className="swiper slider-nav-autoplay"
                 modules={[ Pagination ,Autoplay]}
                 spaceBetween={90}
                 slidesPerView={2}  
                pagination={{
                  clickable: true,
                  el: '.my-pagination', 
                    
                }}

                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  375: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 1,
                  },
                  1200: {
                   
                    slidesPerView: 2, 
                  },
                }}
                autoplay={{
                  delay: 3000, // 3 seconds between each slide
                  disableOnInteraction: false, // Keep autoplay even after user interacts with the slider
                }}
                 >
                  <SwiperSlide className='swipper1'>
                 <Image src={sec6img7} className='sec6img6'/>
                 <div>
                   <ul className='sec6ul'>
                     <li>< FaStar/></li>
                     <li>< FaStar/></li>
                      <li>< FaStar/></li>
                      <li>< FaStar/></li>
                      <li>< FaStar/></li>
                    </ul>
                    <h4 className='sec6h11'>Aleesha Brown</h4>
                    <p className='sec6p12'>Co Founder</p>
                    <hr  className='sec6hr3'/>
                    <p className='sec6p11'>Promptitude is not only a duty, it is favorable to fortune, reputation, influence, a little attention and energy will form the habit, so as to make it easy and delightful.
                    </p>
                    <TbNumber66Small className='sec6tb' />
                 </div>
                </SwiperSlide>
                 <SwiperSlide className='swipper2' >
                <Image src={sec6img6} className='sec6img7'/>
                <div>
                   <ul className='sec6ul'>
                     <li>< FaStar/></li>
                     <li>< FaStar/></li>
                      <li>< FaStar/></li>
                      <li>< FaStar/></li>
                      <li>< FaStar/></li>
                    </ul>
                    <h4 className='sec6h11'>Jon D. William</h4>
                    <p className='sec6p12'>Co Founder</p>
                    <hr  className='sec6hr3'/>
                    <p className='sec6p11'>Promptitude is not only a duty, it is favorable to fortune, reputation, influence, a little attention and energy will form the habit, so as to make it easy and delightful.
                    </p>
                    <TbNumber66Small className='sec6tb' />
                 </div>
                </SwiperSlide>
                 <SwiperSlide className='swipper3'>
                <Image src={sec6img7} className='sec6img8'/>
                <div>
                   <ul className='sec6ul'>
                     <li>< FaStar/></li>
                     <li>< FaStar/></li>
                      <li>< FaStar/></li>
                      <li>< FaStar/></li>
                      <li>< FaStar/></li>
                    </ul>
                    <h4 className='sec6h11'>Aleesha Brown</h4>
                    <p className='sec6p12'>Co Founder</p>
                    <hr  className='sec6hr3'/>
                    <p className='sec6p11'>Promptitude is not only a duty, it is favorable to fortune, reputation, influence, a little attention and energy will form the habit, so as to make it easy and delightful.
                    </p>
                    <TbNumber66Small className='sec6tb' />
                 </div>
                </SwiperSlide>
                <SwiperSlide className='swipper4'>
                <Image src={sec6img6} className='sec6img9'/>
                <div>
                   <ul className='sec6ul'>
                     <li>< FaStar/></li>
                     <li>< FaStar/></li>
                      <li>< FaStar/></li>
                      <li>< FaStar/></li>
                      <li>< FaStar/></li>
                    </ul>
                    <h4 className='sec6h11'>Jon D. William</h4>
                    <p className='sec6p12'>Co Founder</p>
                    <hr  className='sec6hr3'/>
                    <p className='sec6p11'>Promptitude is not only a duty, it is favorable to fortune, reputation, influence, a little attention and energy will form the habit, so as to make it easy and delightful.
                    </p>
                    <TbNumber66Small className='sec6tb' />
                 </div>
                </SwiperSlide>
                </Swiper>
                <div className='my-pagination'></div>
            </div>
              </Col>
            </Row> 
          </Container>
      </div>
      <div className='sec6div3'>
        <Container className='sec6container3'>
        <Row className='sec6r2'>
          <Col lg={2} md={2} sm={6}>
          <Image src={sec6img8} className='sec6img10'/>
          </Col>
          <Col lg={10} md={10} sm={6} className='sec6div5'>
          <h2 className='sec6h10'>785,000</h2>
          <p className='sec6p10'>Healthy & Pure Organic Products</p>
          <hr className='sec6hr2' />
          </Col>
        </Row>
        </Container>     
      </div> 
    </div>
   )
}
export default  Section6;



















