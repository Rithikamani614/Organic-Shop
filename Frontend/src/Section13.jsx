import { Button, Col,Container, Row} from 'react-bootstrap';
import {  FaLocationArrow , FaPhoneSquare, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Section13(){
    return(
        <div className="section13">
            <div className='sec8bg'>
             <h1 className='sec8h1'>Contact Us</h1>
             <ul className='sec8ul'>
             <li className='sec8li1'>
                 <Link to='/'  style={{ color: '#f8ca38' ,textDecoration:'none'}} className='link'>Home</Link>
                 </li>
             <li>Contact</li>
             </ul>
            </div>
            <div>
                <Container>
                    <Row className='sec13r1'>
                        <Col sm={6} md={6} lg={6} xl={7}>
                          <div className='sec13b1'>
                            <p className='sec13p1'>Send us email</p>
                            <h2 className='sec13h2'>Feel free to write</h2>
                            <Row>
                                <Col className='mb-3'>
                                <input type="text" placeholder='Enter Name' className='sec13input' />
                                </Col>
                                <Col className='mb-3'>
                                <input type="email" placeholder='Enter Email' className='sec13input'/>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='mb-3'>
                                <input type="text" placeholder='Enter Subject' className='sec13input'/>
                                </Col>
                                <Col className='mb-3'>
                                <input type="text" placeholder='Enter Phone'  className='sec13input'/>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='mb-3'>
                                <textarea name="" id="" placeholder='Enter Message' className='sec13text'></textarea>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Button className='sec13btn1'>Send message</Button>
                                </Col>
                                <Col>
                                <Button className='sec13btn2'>reset</Button>
                                </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={5} >
                        <div>
                            <p className='sec13p2'>Need any help?</p>
                            <h2 className='sec13h22'>Get in touch with us</h2>
                            <p className='sec13p3'>Lorem ipsum is simply free text available dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply free labore dolore magna.
                            </p>
                        </div>
                        <div>
                          <ul className='sec23ul1'>
                            <li>
                                <Row>
                                    <Col lg={3} className='sec13icon11'><FaPhoneSquare className='sec13icon1'/></Col>
                                    <Col lg={9} className='sec13text1'> 
                                    <h6 className='sec13h6'> Have any question?</h6>
                                    <p className='sec13p4 p4'>Free +92 (020)-9850</p>
                                    </Col>
                                </Row>
                            </li>
                            <li>
                                <Row>
                                    <Col  lg={3} className='sec13icon11'><FaEnvelope className='sec13icon1'/></Col>
                                    <Col  lg={9} className='sec13text1'>
                                    <h6 className='sec13h6'>Write email</h6>
                                    <p className='sec13p4 p4' >needhelp@company.com</p>
                                    </Col>
                                </Row>
                            </li>
                            <li>
                                <Row>
                                    <Col  lg={3} className='sec13icon11'><FaLocationArrow  className='sec13icon1'/></Col>
                                    <Col  lg={9} className='sec13text1'>
                                    <h6 className='sec13h6'> Visit anytime</h6>
                                    <p className='sec13p4 '>66 broklyn golden street. New York</p>
                                    </Col>
                                </Row>
                            </li>
                          </ul>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Section13;