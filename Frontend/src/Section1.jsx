import { Carousel, Image } from 'react-bootstrap';
import image1 from './images/image-1.webp';
import image2 from './images/top-banner2.png';
import { Container, Row, Col } from 'react-bootstrap';
import image3 from './images/object-1.webp';
import image4 from './images/object-2.webp';
import image5 from './images/object-6.webp';
import image6 from './images/object-3.png';
import image7 from './images/object-5.png';
import image8 from './images/object-4.png'



function Section1() {
  return (
    <div className='section1'>
      <div className="bg2"></div>
      <div className="bg3">
        <Carousel >
          <Carousel.Item  className='bg5' >
            <Container fluid  >
              <Row  >
                <Col sm={6} md={6} lg={6} xl={6} xxl={6}>
                <div className='object1' data-aos="fade-left" data-aos-duration="3000">
                <Image src={image3}  />
                </div>
                <div className='text1'  data-aos="fade-down"    data-aos-duration="3000">
                  <p className='p20'>Only Organic Products </p>
                  <h1 className='text2'>Healthy
                    <br></br>
                   Organic Food</h1>
                   <button className='btn6'>DESCOVER MORE</button>
                   <Image src={image5}  className='object4'/>
                </div>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6} xxl={6} >
                  <Image src={image1} className='bgimage2'  data-aos="fade-up" data-aos-duration="3000"   />
                  <Image src={image4}  className='object3' data-aos="fade-up"   data-aos-duration="3000"/>
                  <Image src={image6}  className='object5' data-aos="fade-up"   data-aos-duration="3000"/>
                  <Image src={image7}  className='object8' data-aos="fade-up"   data-aos-duration="3000"/>
                  <Image src={image8}  className='object10' data-aos="fade-up"   data-aos-duration="3000"/>
                </Col>
              </Row>
            </Container>
           </Carousel.Item>

           <Carousel.Item  className='bg5' >
            <Container fluid >
              <Row >
                <Col sm={6} md={6} lg={6} xl={6} xxl={6}>
                <div>
                <Image src={image3} className='object1'  data-aos="fade-left" data-aos-duration="3000"/>
                </div>
                <div className='text1' data-aos="fade-down" data-aos-duration="3000">
                  <p className='p20'>Only Organic Products </p>
                  <h1 className='text2'>Healthy
                    <br></br>
                   Organic Food</h1>
                   <button className='btn6'>DESCOVER MORE</button>
                   <Image src={image5}  className='object4'/>
                </div>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6} xxl={6}>
                  <Image src={image2}  className='bgimage1' data-aos="fade-up"   data-aos-duration="3000"/>
                    <Image src={image4}  className='object2' data-aos="fade-up"   data-aos-duration="3000"/>
                    <Image src={image6}  className='object7' data-aos="fade-up"   data-aos-duration="3000"/>
                    <Image src={image7}  className='object9' data-aos="fade-up"   data-aos-duration="3000"/>
                    <Image src={image8}  className='object11' data-aos="fade-up"   data-aos-duration="3000"/>
                </Col>
              </Row>
            </Container>
          </Carousel.Item> 

        </Carousel>
      </div>
      <div className="bg4"></div>
    </div>



  );
}

export default Section1;

















