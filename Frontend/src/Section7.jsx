import { Row, Col,Card,Container} from 'react-bootstrap';
import sec7img1 from './images/news-1.jpg';
import sec7img2 from './images/news-2.jpg';
import sec7img3 from './images/news-3.jpg';
import { FaUser,FaComments, FaInstagram} from 'react-icons/fa';
import sec7img4 from './images/gallery-3.jpg';
import sec7img5 from './images/gallery-4.jpg';
import sec7img6 from './images/gallery-5.jpg';
import sec7img7 from './images/gallery-6.jpg';
import sec7img8 from './images/gallery-1.jpg';
import sec7img9 from './images/gallery-2.jpg';


function Section7(){
    return(
        <div className='sec7'>
            <div>
                <p className='sec7p1'>What We’re Offering
                </p>
                <h2 className='sec7p2'>Latest news updates <br />
                & articles
                </h2>
            </div>
            <div>
                <Container>
                    <Row style={{marginTop:'40px'}}>
                        <Col md={6} lg={4}>
                         <Card className='sec7card1'>
                            <div className='date'>20 Aug</div>
                         <Card.Img  src={sec7img1}  />
                        <Card.Body>
                        <Card.Text >
                            <ul className='sec7ul'>
                                <li className='sec7li1'><FaUser className='sec7icon'/> by Admin</li>
                                <li><FaComments className='sec7icon'/> 2 Comments</li>
                            </ul>
                       </Card.Text>
                        <Card.Title >
                            <div className='sec7text1'>
                            <h4 className='sec7p3'>
                            Which healthy food growth strategies required
                            </h4>
                            </div>                         
                            </Card.Title>
                        <Card.Text >
                           <p className='sec7p4'>
                            Duis aute irure dolor lipsum simply free text the local markets.
                            </p> 
                            <button className='sec7btn1'>READ MORE</button>
                           </Card.Text>
                       </Card.Body>
                        </Card>
                        </Col>
                        <Col  md={6} lg={4}>
                         <Card className='sec7card2' >
                         <div className='date'>20 Aug</div>
                         <Card.Img  src={sec7img2}  />
                        <Card.Body>
                        <Card.Text >
                            <ul className='sec7ul'>
                                <li className='sec7li1'><FaUser className='sec7icon'/> by Admin</li>
                                <li><FaComments className='sec7icon'/> 2 Comments</li>
                            </ul>
                       </Card.Text>
                        <Card.Title className='card-title'>
                        <div className='sec7text1'>
                            <h4 className='sec7p3'>
                            Which healthy food growth strategies required
                            </h4>
                            </div> 
                        </Card.Title>
                        <Card.Text >
                          <p className='sec7p4'>
                            Duis aute irure dolor lipsum simply free text the local markets.
                            </p> 
                            <button className='sec7btn1'>READ MORE</button> 
                        </Card.Text>
                       </Card.Body>
                        </Card>
                        </Col>
                         <Col  md={6} lg={4}>
                         <Card className='sec7card3' >
                         <div className='date'>20 Aug</div>
                         <Card.Img  src={sec7img3}  />
                        <Card.Body>
                        <Card.Text >
                            <ul className='sec7ul'>
                                <li className='sec7li1'><FaUser className='sec7icon'/> by Admin</li>
                                <li><FaComments className='sec7icon'/> 2 Comments</li>
                            </ul>
                       </Card.Text>
                        <Card.Title className='card-title'>
                        <div className='sec7text1'>
                            <h4 className='sec7p3'>
                            Which healthy food growth strategies required
                            </h4>
                            </div> 
                        </Card.Title>
                        <Card.Text >
                            <p className='sec7p4'>
                            Duis aute irure dolor lipsum simply free text the local markets.
                            </p>
                            <button className='sec7btn1'>READ MORE</button>
                        </Card.Text>
                       </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'130px',marginBottom:'20px'}}>
                         <Col  >
                         <Card  className='sec7card4'>
                          <Card.Img  src={sec7img4}/>
                          <FaInstagram className='sec7icon10'/>
                         </Card>
                        </Col>
                        <Col >
                         <Card  className='sec7card5'>
                          <Card.Img  src={sec7img5} />
                          <FaInstagram className='sec7icon10'/>
                         </Card>
                        </Col>
                        <Col >
                         <Card  className='sec7card6'>
                          <Card.Img  src={sec7img6} />
                          <FaInstagram className='sec7icon10'/>
                         </Card>
                        </Col>
                        <Col >
                         <Card  className='sec7card7'>
                          <Card.Img  src={sec7img7} />
                          <FaInstagram className='sec7icon10'/>
                         </Card>
                        </Col>
                        <Col >
                         <Card  className='sec7card8'>
                          <Card.Img  src={sec7img8} />
                          <FaInstagram className='sec7icon10'/>
                         </Card>
                        </Col>
                        <Col >
                         <Card  className='sec7card9'>
                          <Card.Img  src={sec7img9} />
                          <FaInstagram className='sec7icon10'/>
                         </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Section7;