import { Container, Row} from 'react-bootstrap';
import ProductCard from './ProductCard';
import { Fragment, useEffect, useState } from 'react';


function Section5(){
    const [products, setProducts] = useState([]);

    useEffect(() =>{
      fetch(process.env.REACT_APP_API_URL+'/products')
      .then(res => res.json())
      .then( res => setProducts(res.products))
    },[])

    return(
        <Fragment>
        <div className='sec5'>
            <Container className='sec5container'>
                <p className='sec5p1'>Special Offers</p>
                <h2 className='sec5p2'>Check today’s hot deal <br />
                products
                </h2>
                <Row className='sec5r1'>
                  {products.map(product => <ProductCard product={product} />)}                   
                    </Row>
            </Container>
        </div>
        </Fragment>
    )
}
export default Section5;









