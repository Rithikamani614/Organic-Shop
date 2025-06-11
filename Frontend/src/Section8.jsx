import { Button ,Col,Container,Image, Row} from 'react-bootstrap';
import sec8img1 from './images/about-img-2-1.jpg';
import sec8img2 from './images/about-img-2-2.jpg';
import sec8img3 from './images/drops-2.png';
import sec8img4 from './images/shape-3.png';
import sec8img5 from './images/14744139.png';
import { FaArrowRight   } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Section8(){
    return(
        <div className='section8'>
            <div className='sec8bg'>
             <h1 className='sec8h1'>About Us</h1>
             <ul className='sec8ul'>
             <li className='sec8li1'>
                 <Link to='/'  style={{ color: '#f8ca38' ,textDecoration:'none'}} className='link'>Home</Link>
                 </li>
                <li>About</li>
             </ul>
            </div>
            <div>
                <Container>
                <Row className='sec8r1'>
                    <Col sm={12} md={12} lg={6}>
                     <div className='sec8bg2'>
                     <Image src={sec8img1} className='sec8img1'/>
                     </div>
                     <div className='sec8bg3'>
                     <Image src={sec8img2} className='sec8img2'/>
                      <Image srcSet={sec8img3} className='sec8img3'/>
                      <Image srcSet={sec8img4} className='sec8img4'/>
                     </div>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                    <div className='sec8bg4'>
                        <p className='sec8p1'>Get to Know Us</p>
                        <h2 className='sec8h2'>Proving the pure healthy products</h2>
                        <h4 className='sec8h4'>Natural products for lovers of healthy food.</h4>
                        <p className='sec8p2'>Dislike men who are so beguiled demoraliz worlds ed by the charms of pleasure of the moment. Lorem ipsum dolor sit At auctor urna nunc id cursus metus aliquam.
                        </p>
                    </div>
                       <Row className='sec8bg5'>
                        <Col className='sec8img55' lg={3} md={3} sm={3}>
                        <Image src={sec8img5}  className='sec8img5'/>
                        </Col>
                        <Col lg={9} md={9} sm={9} >
                        <ul className='sec8ul2'>
                            <li><FaArrowRight className='sec8icon1'/>Fresh and quality products</li>
                            <li><FaArrowRight className='sec8icon1'/>Fresh and pure healthy food</li>
                            <li><FaArrowRight className='sec8icon1'/>Don’t panic go for organic</li>
                        </ul>
                        <Button className='sec8btn'>DISCOVER MORE</Button>
                        </Col>
                    </Row>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    )
}
export default  Section8;

