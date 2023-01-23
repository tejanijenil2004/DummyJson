import '../App.css';
import { Card, Container, Row } from 'react-bootstrap';
import { BsStarFill } from "react-icons/bs";
// import { BiRupee } from "react-icons/bi";
import { useEffect, useState } from 'react';
import axios from 'axios';
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from './Header';
import { Link } from "react-router-dom";
import Footer from './Footer';


function Products() {
     const [set, setname] = useState([]);
     const [img, setimg] = useState([]);
  
     useEffect(() => {
          axios.get('https://dummyjson.com/products')
               .then(function (response) {
                    // handle success
                    console.log(response);
                    setname(response.data.products);
                    setimg(response.data.thumbnail);

               })
               .catch(function (error) {
                    // handle error
                    console.log(error);
               })
     }, []);

     // const refPage = () => {
     //      window.location.reload(false);
     // }
     const handleSearch = (search) => {
          const fitems = set.filter(
               (items) =>
                    items.category.includes(search) || items.title.includes(search)
          );
          setname(fitems);
     };

     return (
          <>

               <Header onSearchChange={handleSearch} />
               <Container>
                    <Row>
                         {
                              set.map((i, k) => {
                                   return (
                                        <div key={k} className="col-3 single-item m-5 p-3 ">
                                             {/* <p className='d-flex'>{i.id} <div className="ms-3 fw-bold">{i.title}</div></p>
                                             <img src={i.images[0]} alt="" className='mb-2' />
                                             <hr />
                                             <p className='mb-2'>{i.description}</p>
                                             <p><b>Brand :-</b>{i.brand}</p>
                                             <hr />
                                             <b className='d-flex fs-5'>Price :- <p>{i.price}<BiRupee /></p></b>
                                             <div className="d-flex">
                                                  <p className='text-success fs-5'>{i.discountPercentage}% Off</p>
                                                  <p className='ms-4 bg-success text-white fs-6 p-1 star'>
                                                       {i.rating}
                                                       <BsStarFill />
                                                  </p>
                                             </div>
                                             <p>Available Stock :- <b>{i.stock}</b> </p>
                                             <button className="btn btn-primary btn-sm m-3">
                                                  <Link to={`/${i.id}`} className="text-light">
                                                       View Product
                                                  </Link>
                                             </button> */}
                                             <Card
                                                  className='me-4 mt-3 card-wrapper'
                                                  style={{ width: "18rem" }}>
                                                  <Card.Body className='card-body'>
                                                       <Link to={`/${i.id}`} className="text-light">
                                                            <Card.Img
                                                                 variant='top'
                                                                 className='rounded-top img'
                                                                 src={i.images[0]}
                                                            />
                                                       </Link>
                                                       {/* <Card.Text className='ms-2 mt-2'>{i.brand}</Card.Text> */}
                                                       <Card.Title className='ms-2'>{i.title}</Card.Title>
                                                       <Card.Text className='ms-2 mb-3'>{i.description}</Card.Text>
                                                  </Card.Body>
                                                  <Card.Footer className='c-footer'>
                                                       <div className="d-flex justify-content-between c-foot-wrap">
                                                            <h4 className='fs-4 mb-0'>{i.price}$</h4>
                                                            <p className='btn btn-outline-primary mb-0'>Add To Cart</p>
                                                            <p className='btn btn-outline-success btn-success text-white mb-0'>
                                                                 <BsStarFill className='mb-1 me-2 text-white' />
                                                                 {i.rating}
                                                            </p>
                                                       </div>
                                                  </Card.Footer>
                                             </Card>
                                        </div>
                                   )
                              })
                         }
                    </Row>
               </Container>
               <Footer />
          </>
     )
}

export default Products;