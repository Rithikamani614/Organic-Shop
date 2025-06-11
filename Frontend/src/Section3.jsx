import { Row, Col,Card,Container} from 'react-bootstrap';
import image9 from './images/shape-1.webp';
import image10 from './images/about-img-1.jpg';
import image11 from './images/about-img-2.jpg';
import image12 from './images/cat-1.jpg';
import image13 from './images/cat-2.jpg';
import image14 from './images/cat-3.jpg';
import image15 from './images/cat-4.jpg';
import { FaCheckCircle,FaPlay } from 'react-icons/fa';

function Section3(){
    return(
        <div className="bg7">
           <div className='text7'>
            <Row >
                <Col sm={12} md={12} lg={6} xl={6} className='cl1'>
                <img src={image9} className='image9' alt=''/>
                <div>
                <img src={image10} className='image10'  alt=''/>
                <a href='https://www.youtube.com/watch?v=3JigXb9KXqI' className="play-btn">
                     <FaPlay className='play-icon'/>
                   </a>
                </div>
                <img src={image11} className='image11'  alt=''/>
                </Col>
                <Col  sm={12} md={12} lg={6} xl={6} className='cl2'>
                <div className='text6'>
                <p className='p7'>Welcome to Fesho</p>
                <h2 className='p8'>Be healthy & eat only pure organic food</h2>
                <p className='p9'>Lorem ipsum is simply free text available dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply free ut labore et dolore magna aliqua.</p>
                <Row className='p11'>
                <Col className='text8' sm={12} md={6} lg={6} xl={6}>
                <FaCheckCircle style={{color:'#f8ca38',fontSize:'20px'}} /> The Best Farmers
                <p className='p10'>Lorem ipsum dolor sited amet consectetur notted.</p>
                </Col>
                <Col className='text8' sm={12} md={6} lg={6} xl={6}>
                <FaCheckCircle style={{color:'#f8ca38',fontSize:'20px'}} /> The Best Farmers
                <p className='p10'>Lorem ipsum dolor sited amet consectetur notted.</p>
                </Col>
                </Row>
                <button className='btn10'>DESCOVER MORE</button>
                </div>
                </Col>
            </Row>
            <div className='bg8'>
            <div className='p12'>
                <p className='p13'>Our Categories</p>
                <h1 className='p14'>What we're offering</h1>
            </div> 
            </div>
           </div>
           <div className='bg9'>   
            <Container>
            <Row className='rw6'>          
                <Col sm={6} md={6} lg={3} xl={3}>
                <Card  className='card1'>
                <Card.Img  src={image12} className='image12' />
               <Card.Body>
               <Card.Title className='card-title'>Vegetables</Card.Title>
                <Card.Text className='card-text'>
                When nothing prevents our to we like best be.
                  </Card.Text>
                 </Card.Body>
                  </Card>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                <Card  className='card2'>
                <Card.Img  src={image13} className='image12' />
               <Card.Body>
               <Card.Title className='card-title'>Fresh Fruits</Card.Title>
                <Card.Text className='card-text'>
                When nothing prevents our to we like best be.
                  </Card.Text>
                 </Card.Body>
                  </Card>
                </Col>
                 <Col sm={6} md={6} lg={3} xl={3}>
                <Card  className='card3'>
                <Card.Img  src={image14} className='image12' />
               <Card.Body>
               <Card.Title className='card-title'>Spices</Card.Title>
                <Card.Text className='card-text'>
                When nothing prevents our to we like best be.
                  </Card.Text>
                 </Card.Body>
                  </Card>
                </Col> 
                <Col sm={6} md={6} lg={3} xl={3}>
                <Card  className='card4'>
                <Card.Img  src={image15} className='image12' />
               <Card.Body>
               <Card.Title className='card-title'>Dried Products</Card.Title>
                <Card.Text className='card-text'>
                When nothing prevents our to we like best be.
                  </Card.Text>
                 </Card.Body>
                  </Card>
                </Col>
                
            </Row>
            </Container>
           </div>
           <div className='bg10'></div>
        </div>
    )
}
export default Section3;