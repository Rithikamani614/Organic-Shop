import { Col, Container, Row ,Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleRight } from 'react-icons/fa';
import sec10img1 from './images/banner-1.jpg'

function Section10(){
    return(
        <div className="section10">
            <div className='sec8bg'>
             <h1 className='sec8h1'>Service Details</h1>
             <ul className='sec8ul'>
                <li className='sec8li1'>
                <Link to='/'  style={{ color: '#f8ca38' ,textDecoration:'none'}} className='link'>Home</Link>
                </li>
                <li>Service</li>
             </ul>
            </div>
            <div className="sec10bg1">
                <Container>
                    <Row>
                        <Col lg={5}>
                        <div className="sec10box1">
                            <h3 className="sec10h3">All Services</h3>
                            <ul className="sec10ul">
                                <li className="sec10active">Agriculture Products <FaAngleRight className="sec10icon1"/></li>
                                <li>Fresh Vegetable <FaAngleRight className="sec10icon2"/></li>
                                <li>Organic Products <FaAngleRight className="sec10icon3"/></li>
                                <li>Dairy Products <FaAngleRight className="sec10icon4"/></li>
                            </ul>
                        </div>
                        <div className="sec10box2">
                        </div>
                        </Col>
                        <Col lg={7}>
                        <div className="sec10img11">
                            <Image src={sec10img1} className="sec10img1"/>
                            <h2 className="sec10h2">Fresh Vegetable</h2>
                            <p className="sec10p1">
                            Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p className="sec10p2">
                            When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <h3 className="sec10h10">Our Scope of Work</h3>
                            <p className="sec10p3">
                            Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Section10;