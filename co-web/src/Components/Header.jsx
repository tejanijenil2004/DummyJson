import '../App.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BsEnvelope, BsTelephone, BsFacebook, BsTwitter, BsInstagram, BsVimeo, BsDribbble, BsSkype } from "react-icons/bs";
import { useEffect, useState } from 'react';
import axios from 'axios';


function Header({ onSearchChange }) {

     let [cat, setcat] = useState([]);

     useEffect(() => {
          axios.get('https://dummyjson.com/products/categories')
               .then(function (response) {
                    // handle success
                    setcat(response.data);
               })
     }, []);
     // if ((`#search`) == "1") {
     //      window.location.reload(false);
     // }
     // else {

     //      window.location.reload(true);
     // }
     return (
          <>
               <Container>
                    <Row>
                         <Col sm="12" className='d-flex pt-2 info-head justify-content-between'>
                              <div className='d-none d-md-block'>
                                   <div className="d-flex">
                                        <p><BsEnvelope /></p>
                                        <a href='#' className='ps-2'>etrade@gmail.com</a>
                                        <p className='ps-4'><BsTelephone /></p>
                                        <a href='#' className='ps-2'>(732) 803-010-03</a>
                                   </div>
                              </div>
                              <div className='social'>
                                   <ul className='d-flex'>
                                        <li className='px-2'><a href="#"><BsFacebook /></a></li>
                                        <li className='px-2'><a href="#"><BsTwitter /></a></li>
                                        <li className='px-2'><a href="#"><BsInstagram /></a></li>
                                        <li className='px-2'><a href="#"><BsVimeo /></a></li>
                                        <li className='px-2'><a href="#"><BsDribbble /></a></li>
                                        <li className='px-2'><a href="#"><BsSkype /></a></li>
                                   </ul>
                              </div>
                         </Col>
                    </Row>
               </Container>
               <hr></hr>
               <Container>
                    <Row>
                         <Col>
                              <div className="logo">
                                   <img src={require(`../images/logo.png`)} alt="" />
                              </div>
                         </Col>
                         <Col>
                              <Navbar>
                                   <Container>
                                        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                                        <Nav className="me-auto">
                                             <Nav.Link className='px-3' href="#home">Home</Nav.Link>
                                             <Nav.Link className='px-3' href="#">About</Nav.Link>
                                             <Nav.Link className='px-3' href="#">Service</Nav.Link>
                                             <NavDropdown title="Categories" id="basic-nav-dropdown">
                                                  {
                                                       cat.map((name) => {
                                                            return (
                                                                 <NavDropdown.Item href="#action/3.1">{name}</NavDropdown.Item>
                                                            )
                                                       })
                                                  }
                                             </NavDropdown>
                                             <Nav.Link className='px-3' href="#">Shop</Nav.Link>
                                             <Nav.Link className='px-3' href="#">Contact</Nav.Link>
                                        </Nav>
                                        <input type="text" name="" className='p-2' placeholder='Search-Item' id="search" onChange={(e) => onSearchChange(e.target.value)} />
                                        <button className='btn'>Search</button>
                                   </Container>
                              </Navbar>
                         </Col>
                    </Row>
               </Container>
               <hr />
          </>
     )
}
export default Header;