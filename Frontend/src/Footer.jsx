import { Row, Col,Container} from 'react-bootstrap';
import fimage1 from './images/logo-2.png';
import { FaTwitter, FaFacebook, FaPinterest, FaInstagram, FaMapMarker, FaPhoneSquare, FaEnvelope } from 'react-icons/fa';
function Footer(){
    return(
        <div className="footer">
            <div className="footerbg1">
               <Container>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                    <div className='f1'>
                        <img src={fimage1} alt="" />
                        <p className='footerp1'>We’re providing every day fresh and quality products for you.</p>
                        <div>
                            <ul className='footerul'>
                                <li className='ficon1'>
                                    <FaTwitter/></li>
                                <li className='ficon1'>
                                    <FaFacebook /></li>
                                <li className='ficon1'><FaPinterest/></li>
                                <li className='ficon1'><FaInstagram/></li>
                            </ul>
                        </div>
                    </div>
                    </Col>
                    <Col sm={12} md={6} lg={2}>
                    <div className='f2'>
                        <ul>
                            <li className='footerp2'>Explore</li>
                            <li className='footerp3'>About Company</li>
                            <li className='footerp3'>Our Services</li>
                            <li className='footerp3'>Become a Seller</li>
                            <li className='footerp3'>New Products</li>
                            <li className='footerp3'>Contact</li>
                        </ul>
                    </div>
                     </Col>
                    <Col sm={12} md={6} lg={3}>
                    <div className='f3'>
                        <ul>
                            <li className='footerp2'>Contact</li>
                            <li className='footerp4'><FaPhoneSquare style={{color:'#f8ca38',fontSize:'18px',marginRight:'10px'}}/>
                            Phone
                            <p className='footerp5 p6'>+91 79047 13525</p>
                            </li>
                            <li className='footerp4'><FaEnvelope style={{color:'#f8ca38',fontSize:'18px',marginRight:'10px'}} />Email
                            <p className='footerp5 p6'>rithikamani614@gmail.com</p>
                            </li>
                            <li className='footerp4'><FaMapMarker style={{color:'#f8ca38',fontSize:'18px',marginRight:'10px'}}/>Address
                            <p className='footerp5'>66 road, broklyn street new york
                            </p>
                            </li>
                        </ul>
                    </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                    <div className='f4'>
                        <h4 className='footerp2'>Newsletter
                        </h4>
                        <input type="email" placeholder='Enter your email' className='footerinput'/>
                        <button className='footerbtn'>SUBSCRIBE</button>
                    </div>
                    </Col>
                </Row>
                <div>
                    <hr className='footerhr'/>
                    <p className='footerp7'>Copyright @ 2025 Organic Shop. All Rights Reserved</p>
                </div>
               </Container>
            </div>
            
        </div>
    )
}
export default Footer;

