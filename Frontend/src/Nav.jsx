import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Offcanvas,Modal } from 'react-bootstrap';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Link ,NavLink} from 'react-router-dom'; 
import img1 from './images/logo.webp';
import { FaTwitter, FaFacebook, FaPinterest, FaInstagram,  FaEnvelope,  FaShoppingCart, FaSearch, FaBars, FaPhoneSquare, FaMapMarker } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

function One({cartItems}){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showCartModal, setShowCartModal] = useState(false);
   const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);
// const navigate = useNavigate();
    return(
        <div className='nav2'>
         <Row className="rw1 ">
          <Col  xs={12} sm={12} md={12} lg={12}>
          <Container>
            <div className="d-flex justify-content-between align-items-center nine">
              <img src={img1} alt="" title="Fesho" className="img1" />
                <Navbar expand="lg" className="nav-outer nav1">
                <Navbar.Toggle aria-controls="navbar-nav" className="nav2" />
                <Navbar.Collapse id="navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link
                as={NavLink}
                to="/"
                className={({ isActive }) => (isActive ? 'link1 active' : 'link1')}
                // style={{ color: '#003c38', fontWeight: '600' }}
                >
                Home
                </Nav.Link>

                <NavDropdown title="Pages" id="pages-dropdown" className="link1">
                <NavDropdown.Item
                as={NavLink}
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : '')}
                >
                About
                </NavDropdown.Item>
                <NavDropdown.Item
                as={NavLink}
                to="/services"
                className={({ isActive }) => (isActive ? 'active' : '')}
                >
                Services
                </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Shop" id="shop-dropdown" className="link1">
                <NavDropdown.Item
                as={NavLink}
                to="/products"
                className={({ isActive }) => (isActive ? 'active' : '')}
                >
                Products
                </NavDropdown.Item>
                <NavDropdown.Item
                as={NavLink}
                to="/cart"
                className={({ isActive }) => (isActive ? 'active' : '')}
                >
                Cart
                </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                as={NavLink}
                to="/contact"
                className={({ isActive }) => (isActive ? 'link1 active' : 'link1')}
                >
                Contact
                </Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Navbar>

              <div className="outer-box d-flex align-items-center">
                <Button variant="link" className="btn2">
                  <FaSearch style={{ fontSize: '28px', color: '#164333' }} />
                </Button>

                 <Button variant="link" onClick={() => setShowCartModal(true)} className="btn3 position-relative">
                  <FaShoppingCart style={{ fontSize: '30px', color: '#164333' }} />
                  <Badge className="count position-absolute translate-middle" id='cart_count'>
                    {/* {cartItems.length} */}
                    {totalQty}
                  </Badge>
                </Button>
                <Link to="products"><button className="btn1">SHOP NOW</button></Link>
                <button className="icon1" onClick={handleShow}>
                  <FaBars style={{ fontSize: '25' }} />
                </button>
              </div>
            </div>
          </Container>

      <Modal show={showCartModal} onHide={() => setShowCartModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
               <Modal.Body>
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <ul className="list-group">
                  {[...cartItems].reverse().map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between">
                      <div>
                        <strong>{item.product.name}</strong><br />
                        Quantity: {item.qty}
                      </div>
                      <span>${(item.qty * item.product.price).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Modal.Body>
              <Modal.Footer>
          {cartItems.length > 0 && (
            <>
              <Link to="/cart">
                <Button variant="primary" onClick={() => setShowCartModal(false)}>
                  View Cart
                </Button>
              </Link>

              <Link to="/login">
                <Button variant="success" onClick={() => setShowCartModal(false)}>
                  Checkout
                </Button>
              </Link>
            </>
          )}
        </Modal.Footer>
      </Modal>


        </Col>

        <Offcanvas show={show} onHide={handleClose} placement="end" className="custom-offcanvas">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img src={img1} alt="" title="Fesho" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" style={{ fontSize: '17px', marginTop: '-7px' }}>Home</Nav.Link>
              <hr style={{ marginTop: '-1px' }} />
              <NavDropdown title="Pages" id="pages-dropdown" style={{ fontSize: '17px', marginTop: '-7px' }} className="custom-dropdown">
                <NavDropdown.Item as={Link} to="/about" className="custom-dropdown-item">About</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services" className="custom-dropdown-item">Services</NavDropdown.Item>
              </NavDropdown>
              <hr style={{ marginTop: '-1px' }} />
              <NavDropdown title="Shop" id="shop-dropdown" style={{ fontSize: '17px', marginTop: '-7px' }} className="custom-dropdown">
                <NavDropdown.Item as={Link} to="/shop" className="custom-dropdown-item">Products</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cart" className="custom-dropdown-item">Cart</NavDropdown.Item>
              </NavDropdown>
              <hr style={{ marginTop: '-1px' }} />
              <Nav.Link as={Link} to="/contact" style={{ fontSize: '17px', marginTop: '-7px' }}>Contact</Nav.Link>
            </Nav>
            <hr style={{ marginTop: '-1px' }} />

            <div className="div1">
              <ul className="li3">
                <li>
                  <div style={{ display: 'inline-block' }} className="div4">
                    <FaPhoneSquare style={{ fontSize: '20px', color: '#43aa5c', marginRight: '15px', marginTop: '-55px' }} className="icon2" />
                  </div>
                  <div style={{ display: 'inline-block' }} className="div5">
                    <h5>Phone</h5>
                    <p style={{ color: '#797f7d', fontSize: '14px' }}>+1(307) 776-0608</p>
                  </div>
                </li>
                <li>
                  <div style={{ display: 'inline-block' }} className="div4">
                    <FaEnvelope style={{ fontSize: '20px', color: '#43aa5c', marginRight: '15px', marginTop: '-55px' }} />
                  </div>
                  <div style={{ display: 'inline-block' }} className="div5">
                    <h5>Email</h5>
                    <p style={{ color: '#797f7d', fontSize: '14px' }}>needhelp@company.com</p>
                  </div>
                </li>
                <li>
                  <div style={{ display: 'inline-block' }} className="div4">
                    <FaMapMarker style={{ fontSize: '19px', color: '#43aa5c', marginRight: '15px', marginTop: '-55px' }} />
                  </div>
                  <div style={{ display: 'inline-block' }} className="div5">
                    <h5>Address</h5>
                    <p style={{ color: '#797f7d', fontSize: '13px' }}>88 Brooklyn Golden Street, New York</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <ul className="li4">
                <li><FaTwitter style={{ fontSize: '17px', color: '#43aa5c' }} /></li>
                <li><FaFacebook style={{ fontSize: '17px', color: '#43aa5c' }} /></li>
                <li><FaPinterest style={{ fontSize: '17px', color: '#43aa5c' }} /></li>
                <li><FaInstagram style={{ fontSize: '17px', color: '#43aa5c' }} /></li>
              </ul>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
         </Row>
        </div>
    )
};
export default One;



