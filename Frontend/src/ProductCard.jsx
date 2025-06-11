import {Col ,Card,Button} from "react-bootstrap";
import { FaStar,FaHeart,FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ProductCard({product}){
    return(
             <Col sm={12} md={6} lg={3} xl={3}>
                     <Card className='sec5card1'>
                        <Card.Img  src={product.images[0].image} className='sec5card11' />
                        <Card.Body>
                         <Card.Title >
                            <Link to={"/product/"+product._id} className=' sec5card-title'><h4 >{product.name}</h4></Link>
                         <p className="sec5p3">${product.price}.00</p>
                         </Card.Title>
                        <Card.Text >
                            <ul className='sec5ul'>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                            </ul>
                        <Link to={"/product/"+product._id} className=' sec5card-title'> <Button className="productcardbtn">view More</Button></Link>
                        </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
    )
}


