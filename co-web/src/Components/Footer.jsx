import { Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import { FaApplePay, FaCcMastercard, FaCcVisa, FaGooglePay } from "react-icons/fa";
import { BsPaypal } from "react-icons/bs";

function Footer() {
     return (
          <div className="footer bg-dark text-white">
               <Container>
                    <Row>
                         <Col md="3" sm="6">
                              <img src={require(`../images/logo.png`)} alt="" />
                              <ul>
                                   <li className='py-1'><a href="#">Who We Are</a></li>
                                   <li className='py-1'><a href="#">Join Our Team</a></li>
                                   <li className='py-1'><a href="#">Terms & Condotion</a></li>
                                   <li className='py-1'><a href="#">We Respect Our Privacy</a></li>
                                   <li className='py-1'><a href="#">Fees & Payments</a></li>
                                   <li className='py-1'><a href="#">Return & refuns Policy</a></li>
                                   <li className='py-1'><a href="#">Promotions Terms & Condotions</a></li>
                              </ul>
                         </Col>
                         <Col md="3" sm="6">
                              <h1>Help</h1>
                              <ul>
                                   <li className='py-1'><a href="#">Track Your Order</a></li>
                                   <li className='py-1'><a href="#">Frequently Asked Questions</a></li>
                                   <li className='py-1'><a href="#">Returns</a></li>
                                   <li className='py-1'><a href="#">Cancellactions</a></li>
                                   <li className='py-1'><a href="#">Payments</a></li>
                                   <li className='py-1'><a href="#">Customer Care</a></li>
                                   <li className='py-1'><a href="#">How Do I Remdom My Coupon</a></li>
                              </ul>
                         </Col>
                         <Col md="3" sm="6">
                              <h1>Shop By</h1>
                              <ul>
                                   <li className='py-1'><a href="#">Men</a></li>
                                   <li className='py-1'><a href="#">Women</a></li>
                                   <li className='py-1'><a href="#">Kids</a></li>
                                   <li className='py-1'><a href="#">Indie</a></li>
                                   <li className='py-1'><a href="#">Stores</a></li>
                                   <li className='py-1'><a href="#">New Arrivals</a></li>
                                   <li className='py-1'><a href="#">Brand Directory</a></li>
                                   <li className='py-1'><a href="#">Home</a></li>
                                   <li className='py-1'><a href="#">Collections</a></li>
                              </ul>
                         </Col>
                         <Col md="3" sm="6">
                              <h1>Follow Us</h1>
                              <ul>
                                   <li className='py-1'><a href="#">Facebook</a></li>
                                   <li className='py-1'><a href="#">Instagram-ETRADE</a></li>
                                   <li className='py-1'><a href="#">Twitter</a></li>
                                   <li className='py-1'><a href="#">Pinterest</a></li>
                              </ul>
                         </Col>
                    </Row>
                    <hr />
                    <Row>
                         <Col className='col-10'>
                              <h3>Payment Methods</h3>
                              <div className="d-flex mt-4 f-logo">
                                   {/* <FontAwesomeIcon icon="fa-brands fa-cc-visa" /> */}
                                   <FaCcVisa className='mx-2' />
                                   <FaCcMastercard className='mx-2' />
                                   <BsPaypal className='mx-2' />
                                   <FaGooglePay className='mx-2' />
                                   <FaApplePay className='mx-2' />

                              </div>
                         </Col>
                         <Col className='s-logo ms-auto'>
                              <h3>Secure systems</h3>
                              <img src={require(`../images/secure.png`)} className="ms-4 mt-3" alt="" />
                         </Col>
                    </Row>
               </Container>
               <hr />
          </div>
     )
}
export default Footer;   